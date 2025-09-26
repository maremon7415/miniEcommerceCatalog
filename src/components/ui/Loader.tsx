"use client";

interface LoaderProps {
  fullPage?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fullPage = false }) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`flex justify-center items-center ${
        fullPage ? "h-screen" : "h-64"
      } p-4`}
    >
      {/* Spinner */}
      <div className="h-8 w-8 border-b-2 border-blue-600 rounded-full animate-spin" />

      {/* Text for context */}
      <span className="ml-2 text-gray-600">Loading...</span>
    </div>
  );
};

export default Loader;
