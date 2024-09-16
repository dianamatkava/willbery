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
  useNavigation, // returns the current navigation state: it can be one of "idle", "loading" or "submitting".
} from "@remix-run/react";

import SideBar from "./components/SideBar";

import appStylesHref from "./app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

export default function App() {
  const navigation = useNavigation();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

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
        <div
          id="main-container"
          className={
            navigation.state === "loading" && !searching ? "loading" : ""
          }
        >
          <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
