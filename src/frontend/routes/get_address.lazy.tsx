import { Link, createLazyFileRoute } from '@tanstack/react-router'

import { backend } from '../../backend/declarations'
import { useQuery } from '@tanstack/react-query'
import Source from '../components/source'

export const Route = createLazyFileRoute('/get_address')({
  component: Page,
})

function Page() {
  const {
    data: addressResult,
    isFetching: isFetchingAddress,
    refetch: refetchAddress,
  } = useQuery({
    queryKey: ['address'],
    queryFn: () => backend.get_address(),
    enabled: false,
  })

  return (
    <>
      <Link to="/">
        <button> Menu</button>
      </Link>
      <div className="card">
        <p>Get the Ethereum address of the backend canister.</p>
        <button onClick={() => void refetchAddress()}>
          {isFetchingAddress ? 'Requesting…' : 'get_address()'}
        </button>
        {addressResult && (
          <pre>{JSON.stringify(addressResult, null, 2)}</pre>
        )}
        <Source file="get_address.rs" />
      </div>
    </>
  )
}
