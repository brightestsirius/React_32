import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import TodosBoard from "../Todos/TodosBoard";

import LoadingFallback from "../Fallbacks/LoadingFallback";
import ErrorFallback from "../Fallbacks/ErrorFallback";

export default function Dashboard() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <TodosBoard />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
