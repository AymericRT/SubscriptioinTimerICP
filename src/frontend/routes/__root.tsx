import { Outlet, createRootRoute } from "@tanstack/react-router";

import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import alloyLogo from "../assets/alloy.png";
import icLogo from "../assets/ic.svg";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <main>
      <div>
        <a href="https://alloy.rs" target="_blank">
          <img src={alloyLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://internetcomputer.org" target="_blank">
          <img src={icLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Alloy + ICP</h1>
      <Outlet />
      <TanStackRouterDevtools />
    </main>
  );
}
