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
    <div className="flex flex-col lg:flex-row w-full min-h-screen text-white">
      <div
        className={`w-full lg:w-1/2 p-4 lg:p-6 ${
          stickySide !== "left" ? "lg:space-y-6 lg:overflow-hidden" : ""
        } ${
          stickySide === "left" ? "order-1" : "order-2"
        } lg:order-none`}
      >
        {stickySide === "left" ? (
          <div className="lg:sticky lg:top-1/2 lg:translate-y-[-50%]">
            {leftContent}
          </div>
        ) : (
          leftContent
        )}
      </div>

      <div
        className={`w-full lg:w-1/2 p-4 lg:p-6 ${
          stickySide !== "right" ? "lg:space-y-6 lg:overflow-hidden" : ""
        } ${
          stickySide === "right" ? "order-1" : "order-2"
        } lg:order-none`}
      >
        {stickySide === "right" ? (
          <div className="lg:sticky lg:top-1/2 lg:translate-y-[-50%]">
            {rightContent}
          </div>
        ) : (
          rightContent
        )}
      </div>
    </div>
  );
};