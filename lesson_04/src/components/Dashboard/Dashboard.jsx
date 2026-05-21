import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import List from "./List";

export default function Dashboard() {
  return (
    <>
      <ErrorBoundary
        fallbackRender={({ error }) => <p>Smth went wrong: {error.message}</p>}
      >
        <Suspense fallback={<p>Loading...</p>}>
          <List />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
