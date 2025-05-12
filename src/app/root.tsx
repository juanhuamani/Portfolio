import { Outlet, useLocation } from "react-router-dom";
import { Suspense } from "react";

export const AppRoot = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Suspense key={location.pathname} fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export const AppRootErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};