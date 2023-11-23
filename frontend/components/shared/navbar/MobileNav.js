'use client';

import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex flex-col h-full gap-6 pt-16 pb-10 overflow-y-auto">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.label}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                height={24}
                width={24}
                alt={item.label}
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p className={`${isActive ? 'base-bold' : 'base-medium'}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          height={36}
          width={36}
          alt="DevOverflow"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="border-none background-light900_dark200"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            height={23}
            width={23}
            alt="DevOverflow"
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>

        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button
                  className="small-medium btn-secondary
                  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                >
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/sign-up">
                <Button
                  className="small-medium light-border-2 btn-tertiary
                  text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                >
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
