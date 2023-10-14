import Link from "next/link";
import React from "react";

export const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      link: "/",
    },
    {
      label: "Issues",
      link: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-6 px-5 h-14 items-center">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.link}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
