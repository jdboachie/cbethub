import React from "react";

const CourseCardSkeleton = ({grid}: {grid?: boolean}) => {
  return (
    <div className={`border rounded-3xl dark:border-[#333] max-sm:m-0 m-1 h-fit p-3 justify-end items-start flex flex-col space-y-2 cursor-pointer bg-white dark:bg-black animate-pulse`}>
      <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl h-4 w-20 animate-pulse" />
      <div className="bg-gray-200 dark:bg-gray-800 rounded-3xl h-6 w-28 animate-pulse" />
      <div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-12 w-40 animate-pulse" />
      <div className="w-full pt-1 flex flex-wrap space-x-0.5 justify-start">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-4 w-12 animate-pulse" />
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-4 w-16 animate-pulse" />
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-4 w-10 animate-pulse" />
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
