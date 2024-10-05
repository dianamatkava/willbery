import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
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
      <body className="flex h-screen w-full overflow-hidden">
        <SideBar />
        <div
          className=" flex-1 h-screen
        mx-auto m-4 w-full pb-28 max-w-[1600px]"
        >
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
