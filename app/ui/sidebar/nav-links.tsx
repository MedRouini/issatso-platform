"use client";
import { useEffect, useRef, useState } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline"; // Importing MenuIcon and XIcon for hamburger menu
import Image from "next/image";
import logo from "@/public/logo.jpeg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavigationLink } from "@/app/lib/definitions";

export default function NavLinks({ links }: { links: NavigationLink[] }) {
  const pathname = usePathname();
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu open/close
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex items-center md:flex md:items-center md:justify-between">
      {/* Hamburger menu */}
      <button
        onClick={toggleMenu}
        className="block text-gray-500 focus:outline-none md:hidden"
      >
        {isMenuOpen ? "" : <Bars3Icon className="h-8 w-8" aria-hidden="true" />}
      </button>

      {/* Mobile Menu */}
      <div
        ref={sidebarRef}
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-gray-100 transition duration-300 ease-in-out md:hidden",
          { "-translate-x-full": !isMenuOpen, "translate-x-0": isMenuOpen }
        )}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="px-4 py-6">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src={logo}
                    className="mix-blend-multiply"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <button
                    onClick={toggleMenu}
                    className="block text-gray-500 focus:outline-none"
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <NavLinksList
                  onClick={handleLinkClick}
                  links={links}
                  setOpenAccordion={setOpenAccordion}
                  pathname={pathname}
                  openAccordion={openAccordion}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden w-full md:flex md:items-center md:space-x-6">
        <NavLinksList
          links={links}
          pathname={pathname}
          setOpenAccordion={setOpenAccordion}
          openAccordion={openAccordion}
        />
      </div>
    </div>
  );
}

function NavLinksList({
  links,
  pathname,
  setOpenAccordion,
  openAccordion,
  onClick,
}: {
  links: NavigationLink[];
  pathname: string;
  setOpenAccordion: (index: number | null) => void;
  openAccordion: number | null;
  onClick?: () => void;
}) {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-3 pl-2">
      {links.map((link, index) => {
        const isAccordion = link.sublinks && link.sublinks.length > 0;

        if (!isAccordion) {
          return (
            <NavLink
              onClick={onClick}
              key={link.name}
              link={link}
              pathname={pathname}
            />
          );
        } else {
          return (
            <div className="relative w-full" key={link.name}>
              <AccordionLink
                link={link}
                pathname={pathname}
                isOpen={openAccordion === index}
                onClick={() =>
                  setOpenAccordion(openAccordion === index ? null : index)
                }
              />
              {isAccordion && openAccordion === index && (
                <div className="mt-2 flex w-full flex-col gap-3 pl-3">
                  {link.sublinks?.map((sublink) => (
                    <NavLink
                      onClick={onClick}
                      key={sublink.name}
                      link={sublink}
                      pathname={pathname}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );
}

function AccordionLink({
  link,
  pathname,
  isOpen,
  onClick,
}: {
  link: NavigationLink;
  pathname: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const LinkIcon = link.icon as any;

  return (
    <div
      onClick={() => onClick()}
      className={clsx(
        "flex cursor-pointer items-center justify-between gap-2 rounded-md p-3 text-sm font-medium hover:bg-blue-100 hover:text-blue-600",
        {
          "bg-blue-100 text-blue-600": pathname === link.href,
        }
      )}
    >
      <div className="flex items-center gap-2">
        <LinkIcon className="w-6" />
        <p>{link.name}</p>
      </div>
      <ChevronDownIcon
        className={`w-4 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
      />
    </div>
  );
}

function NavLink({
  onClick,
  link,
  pathname,
}: {
  link: NavigationLink;
  pathname: string;
  onClick?: () => void;
}) {
  const LinkIcon = link.icon;

  return (
    <Link
      onClick={onClick}
      href={link.href}
      className={clsx(
        "flex w-full cursor-pointer items-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-blue-100 hover:text-blue-600",
        {
          "bg-blue-100 text-blue-600": pathname === link.href,
        }
      )}
    >
      {LinkIcon && <LinkIcon className="w-6" />}
      <p>{link.name}</p>
    </Link>
  );
}
