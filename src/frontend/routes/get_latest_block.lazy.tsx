import { Link, createLazyFileRoute } from "@tanstack/react-router";

import { backend } from "../../backend/declarations";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/get_latest_block")({
  component: Page,
});

function Page() {
  const {
    data: latestBlockResult,
    isFetching: isFetchingBlock,
    refetch: refetchBlock,
  } = useQuery({
    queryKey: ["latestBlock"],
    queryFn: () => backend.get_latest_block(),
    enabled: false,
  });

  return (
    <>
      <Link to="/">
        <button> Menu</button>
      </Link>
      <div className="card">
        <p>Request the latest block from Eth Sepolia.</p>
        <button onClick={() => refetchBlock()}>
          {isFetchingBlock ? "Requesting…" : "get_latest_block()"}
        </button>
        {latestBlockResult && (
          <pre>{JSON.stringify(latestBlockResult, null, 2)}</pre>
        )}
      </div>
    </>
  );
}
