import Link from 'next/link';
import React from 'react';
import Theme from './Theme';
import MobileNav from './MobileNav';
import Image from 'next/image';
import '../../../styles/customStyles.css';

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full gap-5 p-6 flex-between background-light900_dark200 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          className="Brand-logo max-md:hidden"
          src="/assets/images/lama.png"
          height={100}
          width={130}
          alt="DevOverflow"
        />
      </Link>
      <p className="text-dark500_light700">GlobalSearch</p>
      <div className="gap-5 flex-between">
        <Theme />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
