/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const WatchblocksLazyImport = createFileRoute('/watch_blocks')()
const SignmessageLazyImport = createFileRoute('/sign_message')()
const SendethwithfillersLazyImport = createFileRoute('/send_eth_with_fillers')()
const GetlatestblockLazyImport = createFileRoute('/get_latest_block')()
const GetbatchbalancesLazyImport = createFileRoute('/get_batch_balances')()
const GetbalanceLazyImport = createFileRoute('/get_balance')()
const GetaddressLazyImport = createFileRoute('/get_address')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const WatchblocksLazyRoute = WatchblocksLazyImport.update({
  path: '/watch_blocks',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/watch_blocks.lazy').then((d) => d.Route))

const SignmessageLazyRoute = SignmessageLazyImport.update({
  path: '/sign_message',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sign_message.lazy').then((d) => d.Route))

const SendethwithfillersLazyRoute = SendethwithfillersLazyImport.update({
  path: '/send_eth_with_fillers',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/send_eth_with_fillers.lazy').then((d) => d.Route),
)

const GetlatestblockLazyRoute = GetlatestblockLazyImport.update({
  path: '/get_latest_block',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/get_latest_block.lazy').then((d) => d.Route),
)

const GetbatchbalancesLazyRoute = GetbatchbalancesLazyImport.update({
  path: '/get_batch_balances',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/get_batch_balances.lazy').then((d) => d.Route),
)

const GetbalanceLazyRoute = GetbalanceLazyImport.update({
  path: '/get_balance',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/get_balance.lazy').then((d) => d.Route))

const GetaddressLazyRoute = GetaddressLazyImport.update({
  path: '/get_address',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/get_address.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/get_address': {
      id: '/get_address'
      path: '/get_address'
      fullPath: '/get_address'
      preLoaderRoute: typeof GetaddressLazyImport
      parentRoute: typeof rootRoute
    }
    '/get_balance': {
      id: '/get_balance'
      path: '/get_balance'
      fullPath: '/get_balance'
      preLoaderRoute: typeof GetbalanceLazyImport
      parentRoute: typeof rootRoute
    }
    '/get_batch_balances': {
      id: '/get_batch_balances'
      path: '/get_batch_balances'
      fullPath: '/get_batch_balances'
      preLoaderRoute: typeof GetbatchbalancesLazyImport
      parentRoute: typeof rootRoute
    }
    '/get_latest_block': {
      id: '/get_latest_block'
      path: '/get_latest_block'
      fullPath: '/get_latest_block'
      preLoaderRoute: typeof GetlatestblockLazyImport
      parentRoute: typeof rootRoute
    }
    '/send_eth_with_fillers': {
      id: '/send_eth_with_fillers'
      path: '/send_eth_with_fillers'
      fullPath: '/send_eth_with_fillers'
      preLoaderRoute: typeof SendethwithfillersLazyImport
      parentRoute: typeof rootRoute
    }
    '/sign_message': {
      id: '/sign_message'
      path: '/sign_message'
      fullPath: '/sign_message'
      preLoaderRoute: typeof SignmessageLazyImport
      parentRoute: typeof rootRoute
    }
    '/watch_blocks': {
      id: '/watch_blocks'
      path: '/watch_blocks'
      fullPath: '/watch_blocks'
      preLoaderRoute: typeof WatchblocksLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/get_address': typeof GetaddressLazyRoute
  '/get_balance': typeof GetbalanceLazyRoute
  '/get_batch_balances': typeof GetbatchbalancesLazyRoute
  '/get_latest_block': typeof GetlatestblockLazyRoute
  '/send_eth_with_fillers': typeof SendethwithfillersLazyRoute
  '/sign_message': typeof SignmessageLazyRoute
  '/watch_blocks': typeof WatchblocksLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/get_address': typeof GetaddressLazyRoute
  '/get_balance': typeof GetbalanceLazyRoute
  '/get_batch_balances': typeof GetbatchbalancesLazyRoute
  '/get_latest_block': typeof GetlatestblockLazyRoute
  '/send_eth_with_fillers': typeof SendethwithfillersLazyRoute
  '/sign_message': typeof SignmessageLazyRoute
  '/watch_blocks': typeof WatchblocksLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/get_address': typeof GetaddressLazyRoute
  '/get_balance': typeof GetbalanceLazyRoute
  '/get_batch_balances': typeof GetbatchbalancesLazyRoute
  '/get_latest_block': typeof GetlatestblockLazyRoute
  '/send_eth_with_fillers': typeof SendethwithfillersLazyRoute
  '/sign_message': typeof SignmessageLazyRoute
  '/watch_blocks': typeof WatchblocksLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/get_address'
    | '/get_balance'
    | '/get_batch_balances'
    | '/get_latest_block'
    | '/send_eth_with_fillers'
    | '/sign_message'
    | '/watch_blocks'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/get_address'
    | '/get_balance'
    | '/get_batch_balances'
    | '/get_latest_block'
    | '/send_eth_with_fillers'
    | '/sign_message'
    | '/watch_blocks'
  id:
    | '__root__'
    | '/'
    | '/get_address'
    | '/get_balance'
    | '/get_batch_balances'
    | '/get_latest_block'
    | '/send_eth_with_fillers'
    | '/sign_message'
    | '/watch_blocks'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  GetaddressLazyRoute: typeof GetaddressLazyRoute
  GetbalanceLazyRoute: typeof GetbalanceLazyRoute
  GetbatchbalancesLazyRoute: typeof GetbatchbalancesLazyRoute
  GetlatestblockLazyRoute: typeof GetlatestblockLazyRoute
  SendethwithfillersLazyRoute: typeof SendethwithfillersLazyRoute
  SignmessageLazyRoute: typeof SignmessageLazyRoute
  WatchblocksLazyRoute: typeof WatchblocksLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  GetaddressLazyRoute: GetaddressLazyRoute,
  GetbalanceLazyRoute: GetbalanceLazyRoute,
  GetbatchbalancesLazyRoute: GetbatchbalancesLazyRoute,
  GetlatestblockLazyRoute: GetlatestblockLazyRoute,
  SendethwithfillersLazyRoute: SendethwithfillersLazyRoute,
  SignmessageLazyRoute: SignmessageLazyRoute,
  WatchblocksLazyRoute: WatchblocksLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/get_address",
        "/get_balance",
        "/get_batch_balances",
        "/get_latest_block",
        "/send_eth_with_fillers",
        "/sign_message",
        "/watch_blocks"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/get_address": {
      "filePath": "get_address.lazy.tsx"
    },
    "/get_balance": {
      "filePath": "get_balance.lazy.tsx"
    },
    "/get_batch_balances": {
      "filePath": "get_batch_balances.lazy.tsx"
    },
    "/get_latest_block": {
      "filePath": "get_latest_block.lazy.tsx"
    },
    "/send_eth_with_fillers": {
      "filePath": "send_eth_with_fillers.lazy.tsx"
    },
    "/sign_message": {
      "filePath": "sign_message.lazy.tsx"
    },
    "/watch_blocks": {
      "filePath": "watch_blocks.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
