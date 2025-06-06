import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col justify-center bg-white overflow-x-hidden px-4"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >

      <div className="flex items-center bg-white p-4 pb-2 justify-between">
        <div className="text-[#181111] flex size-12 shrink-0 items-center">
        </div>
        <h2 className="text-[#181111] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          Whispers
        </h2>
      </div>

      
      <div className="text-center py-10">
        <h1 className="text-[#181111] text-3xl sm:text-4xl font-bold leading-tight pb-3">
          Oops! Page Not Found
        </h1>
        <p className="text-[#181111] text-base font-normal leading-normal pb-6 max-w-lg mx-auto">
          We're sorry, but the page you were looking for doesn't seem to exist.
          It might have been moved, deleted, or the URL could be incorrect.
        </p>
        <Link
          to="/"
          className="inline-flex min-w-[84px] px-6 py-2 h-10 items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-full transition hover:opacity-90"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
