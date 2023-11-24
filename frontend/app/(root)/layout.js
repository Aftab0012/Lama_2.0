import Navbar from '@/components/shared/navbar/Navbar';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <main className="relative background-light850_dark100">
      <Navbar />
      <div className="flex">
        LeftSideBar
        <section className="flex flex-col flex-1 min-h-screen px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="w-full max-w-5xl mx-auto">{children}</div>
        </section>
      </div>
      {/* Toaster */}
    </main>
  );
};

export default Layout;
