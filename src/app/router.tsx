import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "@/config/paths";
import { useMemo } from "react";
import { AppRoot, AppRootErrorBoundary } from "@/app/root";


// eslint-disable-next-line react-refresh/only-export-components
export const createAppRouter = () =>
  createBrowserRouter(
    [
      {
        path: paths.app.root.path,
        element: (
            <AppRoot />  
        ),
        ErrorBoundary: AppRootErrorBoundary,
        children: [
          {
            path: paths.app.root.path,
            lazy: async () => {
              const { HomePage } = await import("@/pages/app/home");
              return {
                Component: HomePage,
              };
            },
            ErrorBoundary: AppRootErrorBoundary,
          },
        ],
      },
      {
        path: "*",
        lazy: async () => {
          const { NotFoundPage } = await import("@/pages/not-found");
          return { Component: NotFoundPage };
        },
      },
    ],
  );

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return (
    <RouterProvider router={router} />
  );
};
