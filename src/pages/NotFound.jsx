import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
          <span className="relative block px-8 py-3 bg-gradient-to-b from-black to-gray-900 border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </a>
      </button>
    </main>


  )
}

export default NotFound


// import React from 'react';

// const NotFoundPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-900">
//       <h1 className="text-4xl font-semibold text-white text-center">404 - Page Not Found</h1>
//     </div>
//   );
// };

// export default NotFoundPage;

