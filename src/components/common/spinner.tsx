import React from "react";

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <div
      style={{ width: "40px", height: "40px" }} // Fallback if Tailwind padding/margin issues exist
      className="flex items-center justify-center"
    >
      <div className="w-10 h-10 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Spinner;
