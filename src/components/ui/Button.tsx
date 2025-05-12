import React from "react";
import { cn } from "@/utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  rounded?: "full" | "lg" | "md" | "none";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = "secondary",
  size = "md",
  rounded = "full",
}) => {
  // Tamaños
  const sizeMap = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  // Estilos base
  const baseStyles = "border font-medium backdrop-blur-sm transition duration-200";

  // Variantes
  const primaryStyles = "text-blue-400 border-blue-800 bg-blue-950/10 hover:bg-blue-800/20";
  const secondaryStyles = "text-gray-300 border-gray-700 hover:bg-gray-700/10";

  return (
    <button
      onClick={onClick}
      className={cn(
        baseStyles,
        sizeMap[size],
        `rounded-${rounded}`,
        variant === "primary" ? primaryStyles : secondaryStyles,
        className
      )}
    >
      {children}
    </button>
  );
};
