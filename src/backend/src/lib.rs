mod service;
use crate::service::transfer_usdc_subscription::subscripton_fee_usdc;

use alloy::{
    signers::icp::IcpSigner,
    transports::icp::{RpcApi, RpcService},
};
use ic_cdk::export_candid;
use std::time::Duration;
use ic_cdk_timers::set_timer_interval;

const N: Duration = Duration::from_secs(10);

#[ic_cdk::update]
fn start_timer() {
    ic_cdk_timers::set_timer_interval(N, || ic_cdk::spawn(async_function()));
}

async fn async_function() {
    let _ = subscripton_fee_usdc().await.unwrap();
}




// The toolkit app uses an external EVM RPC Proxy instead of the EVM RPC Canister
// available on IC. When you make a call to the EVM RPC canister, that call gets
// made by all nodes in the subnet. For a successfull response to be returned,
// all RPC responses returned must be identical. In most cases this is not a problem
// but more often than seldom this becomes an issue. When for instance getting the
// latest block number, it is quite likely that a new block gets created during the
// time it takes for the RPC procider to execute the requests.
fn get_rpc_service_sepolia() -> RpcService {
    // Uncomment to use EVM RPC Canister instead of RPC proxy
    // RpcService::EthSepolia(EthSepoliaService::Alchemy)

    // Below proxy is intended for limited use with this demo, DO NOT use in a
    // production setting. To deploy an proxy on CloudFlare for Alchemy as provider,
    // fork and deploy this example: https://github.com/c-atts/catts-evm-rpc-proxy
    RpcService::Custom(RpcApi {
        url: "https://ic-alloy-evm-rpc-proxy.kristofer-977.workers.dev/eth-sepolia".to_string(),
        headers: None,
    })
}

fn get_rpc_service_base() -> RpcService {
    // Uncomment to use EVM RPC Canister instead of RPC proxy
    // RpcService::BaseMainnet(L2MainnetService::Alchemy)

    RpcService::Custom(RpcApi {
        url: "https://ic-alloy-evm-rpc-proxy.kristofer-977.workers.dev/base-mainnet".to_string(),
        headers: None,
    })
}

fn get_ecdsa_key_name() -> String {
    #[allow(clippy::option_env_unwrap)]
    let dfx_network = option_env!("DFX_NETWORK").unwrap();
    match dfx_network {
        "local" => "dfx_test_key".to_string(),
        "ic" => "key_1".to_string(),
        _ => panic!("Unsupported network."),
    }
}

async fn create_icp_signer() -> IcpSigner {
    let ecdsa_key_name = get_ecdsa_key_name();
    IcpSigner::new(vec![], &ecdsa_key_name, None).await.unwrap()
}




export_candid!();
