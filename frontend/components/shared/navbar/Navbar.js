import Link from 'next/link';
import React from 'react';
import Theme from './Theme';
import MobileNav from './MobileNav';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import '../../../styles/customStyles.css';

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full gap-5 p-6 flex-between background-light900_dark200 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="gap-1 flex-center">
        <Image
          className="Brand-logo max-md:hidden"
          src="/assets/images/lama.png"
          height={40}
          width={40}
          alt="DevOverflow"
        />
        <p className="font-sans text-[26px] h1-bold text-blue-700 dark:text-yellow-400">
          LAMA
        </p>
      </Link>
      <p className="text-dark500_light700">
        <Input />
      </p>
      <div className="gap-5 flex-between">
        <Theme />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
