import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  // Link,
  // NavLink, // used to indecate the active link, when the URL that matches <NavLink to>, then isActive=true
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  // useLoaderData,
} from "@remix-run/react";

import SideBar from "./components/SideBar";

import appStylesHref from "./app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Willbery</title>
        <Meta />
        <Links />
      </head>
      <body>
        <SideBar />
        <div className="flex-1 p-4 w-full h-fit pb-28">
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
