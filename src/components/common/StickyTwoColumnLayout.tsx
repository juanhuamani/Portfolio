import React from "react";

interface StickyTwoColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  stickySide?: "left" | "right";
}

export const StickyTwoColumnLayout = ({
  leftContent,
  rightContent,
  stickySide = "right", 
}: StickyTwoColumnLayoutProps) => {
  return (
    <div className="flex w-full min-h-screen text-white">
      <div
        className={`w-1/2 p-6 ${
          stickySide !== "left" ? "space-y-6 overflow-hidden" : ""
        }`}
      >
        {stickySide === "left" ? (
          <div className="sticky top-1/2 translate-y-[-50%]">{leftContent}</div>
        ) : (
          leftContent
        )}
      </div>

      <div
        className={`w-1/2 p-6 ${
          stickySide !== "right" ? "space-y-6 overflow-hidden" : ""
        }`}
      >
        {stickySide === "right" ? (
          <div className="sticky top-1/2 translate-y-[-50%]">{rightContent}</div>
        ) : (
          rightContent
        )}
      </div>
    </div>
  );
};