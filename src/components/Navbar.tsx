"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src="/img/logo.png"
                width="1024"
                alt="N"
                height="1024"
                className="w-8"
              />
            </span>
            <span>Clipboard History</span>
          </span>
        </Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <ThemeChanger />
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="https://chromewebstore.google.com/detail/clipboard-history-pro-sec/ombhfdknibjljckajldielimdjcomcek?hl=en"
              className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
