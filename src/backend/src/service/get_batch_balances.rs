use alloy::{
    eips::BlockNumberOrTag,
    primitives::{Address, U256},
    rpc::client::{ClientBuilder, IcpClient},
    transports::icp::IcpConfig,
};

use crate::RPC_SERVICE;

#[ic_cdk::update]
async fn get_batch_balances(addresses: Vec<String>) -> Result<String, String> {
    let config = IcpConfig::new(RPC_SERVICE);
    let client: IcpClient = ClientBuilder::default().icp(config);

    let mut batch = client.new_icp_batch();
    let tag = BlockNumberOrTag::Latest;
    let mut get_balance_calls = Vec::new();

    for address in addresses {
        let address = match address.parse::<Address>() {
            Ok(addr) => addr,
            Err(e) => return Err(e.to_string()),
        };
        let call = batch.add_call("eth_getBalance", &(address, tag)).unwrap();
        get_balance_calls.push(call);
    }

    batch.send().await.unwrap();

    let mut balances = Vec::new();
    for call in get_balance_calls {
        let balance: U256 = call.await.unwrap();
        balances.push(balance.to_string());
    }

    Ok(balances.join(","))
}