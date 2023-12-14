import React from "react";

const CourseCardSkeleton = ({grid}: {grid?: boolean}) => {
  return (
    <div className={`border rounded-lg dark:border-[#333] w-full ${grid && ''} h-fit p-3 justify-end items-start flex flex-col space-y-2 cursor-pointer bg-white dark:bg-[#222] animate-pulse`}>
      <div className="bg-gray-200 dark:bg-gray-800 rounded h-4 w-20 animate-pulse" />
      <div className="bg-gray-200 dark:bg-gray-800 rounded h-8 w-32 animate-pulse" />
      <div className="bg-gray-200 dark:bg-gray-800 rounded h-4 w-24 animate-pulse" />
      <div className="w-full pt-1 flex flex-wrap space-x-0.5 space-y-0.5 justify-start">
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-4 w-12 animate-pulse" />
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-4 w-16 animate-pulse" />
        <div className="bg-gray-200 dark:bg-gray-800 rounded-full h-4 w-10 animate-pulse" />
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
