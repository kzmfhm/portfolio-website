import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto flex items-center justify-center py-10 w-screen">
      <div className="max-w-2xl min-h-[300px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Your page is not Found</h2>
        <p className="text-base font-medium text-center">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          href={"/"}
          className="bg-accent text-primary w-44 h-12 rounded-full text-base font-bold flex items-center justify-center hover:bg-accent-hover duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
