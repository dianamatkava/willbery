// app/routes/$catchAll.tsx
import Layout from "../components/Layout"; // Adjust the import path as necessary
import { Link } from "@remix-run/react";

export default function NotFound() {
  return (
    <Layout>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  );
}
