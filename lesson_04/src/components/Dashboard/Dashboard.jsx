import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import UsersData from "./UsersData";

export default function Dashboard() {
  return (
    <>
      <ErrorBoundary
        fallbackRender={({ error }) => <p>Smth went wrong: {error.message}</p>}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <UsersData />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
