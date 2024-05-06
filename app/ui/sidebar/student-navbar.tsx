"use client";
import { NavigationLink } from "@/app/lib/definitions";
import {
  UserGroupIcon,
  HomeIcon,
  ArchiveBoxIcon,
  Cog8ToothIcon,
  WalletIcon,
  BuildingLibraryIcon,
  BanknotesIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";

const links: NavigationLink[] = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Courses",
    icon: ArchiveBoxIcon,
    href: "/dashboard/courses",
  },
  {
    name: "Group",
    icon: PencilIcon,
    href: "/dashboard/group",
  },
  {
    name: "Timetable",
    href: "/dashboard/timetable",
    icon: UserGroupIcon,
  },
  {
    name: "Exams Schedule",
    href: "/dashboard/schedule",
    icon: WalletIcon,
  },
  {
    name: "Results",
    href: "/dashboard/results",
    icon: BuildingLibraryIcon,
  },
  {
    name: "E-Library",
    href: "/dashboard/library",
    icon: BuildingLibraryIcon,
  },
];

export default function StudentNavLinks() {
  return <NavLinks links={links} />;
}
