import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import UsersList from "./UsersList";
import LoadingFallback from "./LoadingFallback";
import ErrorFallback from "./ErrorFallback";

export default function Dashboard() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <UsersList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
