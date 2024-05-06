// import { signOut } from "@/auth";
import { PowerIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/public/logo.jpeg";
import { signOut } from "@/auth";

export function SidenavBase({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:fixed md:top-0 md:z-50 md:w-64 flex flex-col  px-3 print:hidden md:h-full md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="hidden h-40 rounded-md bg-white md:block md:flex md:items-center md:justify-center ">
          <Image
            src={logo}
            className="mix-blend-multiply	"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        {children}
        <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
