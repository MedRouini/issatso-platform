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
  QuestionMarkCircleIcon,
  DocumentIcon,
  ClockIcon,
  CalendarDaysIcon,
  BookOpenIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";

const links: NavigationLink[] = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Courses",
    icon: DocumentIcon,
    href: "/dashboard/courses",
  },
  {
    name: "Group",
    icon: UserGroupIcon,
    href: "/dashboard/group",
  },
  {
    name: "Timetable",
    href: "/dashboard/timetable",
    icon: ClockIcon,
  },
  {
    name: "Exams Schedule",
    href: "/dashboard/schedule",
    icon: CalendarDaysIcon,
  },
  {
    name: "Results",
    href: "/dashboard/results",
    icon: AcademicCapIcon,
  },
  {
    name: "E-Library",
    href: "/dashboard/library",
    icon: BookOpenIcon,
  },
  {
    name: "KDB Helper",
    href: "/dashboard/kdb-helper",
    icon: QuestionMarkCircleIcon,
  },
];

export default function StudentNavLinks() {
  return <NavLinks links={links} />;
}
