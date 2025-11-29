import React from "react";

const SkeletonHomeSection2 = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="w-full mt-5">
            <div className="h-6 bg-gray-300 rounded-md w-full mb-4"></div>
            <div className="h-6 bg-gray-300 rounded-md w-4/6 mb-4"></div>
            <div className="h-6 bg-gray-300 rounded-md w-3/6 mb-4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonHomeSection2;
