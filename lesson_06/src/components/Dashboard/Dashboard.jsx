import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import TodosBoard from "../Todos/TodosBoard";
import UserStatus from "../UserStatus/UserStatus";
import Counter from "../Counter/Counter";

import LoadingFallback from "../Fallbacks/LoadingFallback";
import ErrorFallback from "../Fallbacks/ErrorFallback";

import useUserStatus from "../../hooks/useUserStatus";

import { UserContext } from "../../contexts/UserContext";

export default function Dashboard() {
  const userStatus = useUserStatus();

  return (
    <>
      <UserContext.Provider value={{ ...userStatus }}>
        <UserStatus />
        <hr />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<LoadingFallback />}>
            <TodosBoard />
          </Suspense>
        </ErrorBoundary>
      </UserContext.Provider>
      <hr />
      <Counter />
    </>
  );
}
