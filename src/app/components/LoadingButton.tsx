import React, { useState } from "react";

interface LoadingIconProps {
  widthPx: number;
  heightPx: number;
  colour: string;
  durationSeconds: number;
  thicknessPx: number;
}

const LoadingIcon: React.FC<LoadingIconProps> = ({
  widthPx,
  heightPx,
  colour,
  durationSeconds,
  thicknessPx,
}) => {
  return (
    <div className="flex justify-center items-center">
      <span className="loader"></span>
      <style jsx>{`
        .loader {
          width: ${widthPx}px;
          height: ${heightPx}px;
          border: ${thicknessPx}px solid ${colour};
          border-bottom-color: transparent;
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation ${durationSeconds}s linear infinite;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => Promise<void> | void;
  className?: string;
  children: React.ReactNode;
  loadingColorHex?: string;
  loadingSizePx?: number;
  loadingThicknessPx?: number;
  loadingDurationSeconds?: number;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  onClick,
  className = "",
  children,
  loadingColorHex = "#ffffff",
  loadingSizePx = 20,
  loadingThicknessPx = 3,
  loadingDurationSeconds = 1,
  ...props // Spread operator to accept additional props
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={`relative ${className}`}
      onClick={handleClick}
      disabled={isLoading}
      {...props} // Passing the additional props to the button element
    >
      <span
        className="w-full h-full flex justify-center items-center transition-opacity duration-300"
        style={{ opacity: isLoading ? 0 : 1 }}
      >
        {children}
      </span>
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <LoadingIcon
            widthPx={loadingSizePx}
            heightPx={loadingSizePx}
            colour={loadingColorHex}
            durationSeconds={loadingDurationSeconds}
            thicknessPx={loadingThicknessPx}
          />
        </span>
      )}
    </button>
  );
};

export default LoadingButton;
