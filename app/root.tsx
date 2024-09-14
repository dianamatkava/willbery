import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
// import { useEffect } from "react";
import {
  // Form,
  Links,
  // Link,
  // NavLink, // used to indecate the active link, when the URL that matches <NavLink to>, then isActive=true
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  // useLoaderData,
  useNavigation, // returns the current navigation state: it can be one of "idle", "loading" or "submitting".
  // useSubmit,
} from "@remix-run/react";

import SideBar from "./components/SideBar";

import appStylesHref from "./app.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

import { createEmptyContact, getContacts } from "./data";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return json({ contacts, q });
};

export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
};

export default function App() {
  // const { contacts, q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  // const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  // useEffect(() => {
  //   const searchField = document.getElementById("q");
  //   if (searchField instanceof HTMLInputElement) {
  //     searchField.value = q || "";
  //   }
  // }, [q]);

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
          id="detail"
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
