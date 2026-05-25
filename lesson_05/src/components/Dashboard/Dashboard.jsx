import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import UsersData from "./Users/UsersData";
import TodoHooks from "./TodoHooks/TodoHooks";
import UserStatus from "./UserStatus/UserStatus";

import LoadingFallback from "../Fallback/LoadingFallback";
import ErrorFallback from "../Fallback/ErrorFallback";

import useUserStatus from "../../hooks/useUserStatus";

export default function Dashboard() {
  const { userStatus, setUserStatus } = useUserStatus();

  return (
    <>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <UsersData />
        </Suspense>
      </ErrorBoundary> */}

      <UserStatus userStatus={userStatus} setUserStatus={setUserStatus} />

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <TodoHooks />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
