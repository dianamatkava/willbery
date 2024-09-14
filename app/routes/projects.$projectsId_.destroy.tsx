import invariant from "tiny-invariant";
import { redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";

import { deleteContact } from "../data";

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.contactId, "Account not found");
  await deleteContact(params.contactId);
  return redirect("/");
};
