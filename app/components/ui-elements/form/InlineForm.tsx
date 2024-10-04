// deprecated, this approach involves refreshing the page

export default function FormControl({
  method,
  action,
  children,
}: {
  method: string; // TODO: add enum
  action: string;
  children: React.ReactNode;
}) {
  return (
    <form method="post">
      <input type="hidden" name={action} value={method} />
      {children}
    </form>
  );
}


// and this how the action will look like

// export async function action({ request }) {
//   const formData = await request.formData();
//   const method = formData.get("_method");
//   if (method == "post") {
//     // get user from access token
//     const user = await getUser();
//     const card = await createDummyCardCrud({ user });
//     setTimeout(() => {
//       console.log("This message appears after 20 milliseconds.");
//     }, 20000000);
//     console.log(card);
//     return redirect(`/activities/${card._id.toString()}`);
//   }
//   return json({});
}