import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { motion, AnimatePresence } from "framer-motion";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const AppRoot = () => {
  const location = useLocation();
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isInitialLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="min-h-screen bg-black text-white"
          >
            <Suspense key={location.pathname} fallback={<LoadingScreen />}>
              <Outlet />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const AppRootErrorBoundary = () => {
  return <div>Something went wrong!</div>;
};