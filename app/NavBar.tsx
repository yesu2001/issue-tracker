"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const currentpath = usePathname();
  const links = [
    { lable: "Dashboard", href: "/" },
    { lable: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b px-5 mb-5 h-14 items-center">
      <Link href="/" className="text-3xl">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              link.href == currentpath ? "text-zinc-900" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
          >
            {" "}
            {link.lable}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
