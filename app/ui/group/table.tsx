import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Table() {
  const mockData = [
    {
      fullName: "Mohamed Rouini",
      email: "alice.johnson@issatso.u-sousse.tn",
      id: 1,
      profilePicture: `/customers/1.png`,
    },
    {
      fullName: "Bob Smith",
      email: "bob.smith@issatso.u-sousse.tn",
      id: 2,
      profilePicture: `/customers/2.png`,
    },
    {
      fullName: "Charlie Brown",
      email: "charlie.brown@issatso.u-sousse.tn",
      id: 3,
      profilePicture: `/customers/3.png`,
    },
    {
      fullName: "Diana Miller",
      email: "diana.miller@issatso.u-sousse.tn",
      id: 4,
      profilePicture: `/customers/4.png`,
    },
    {
      fullName: "Eve Wilson",
      email: "eve.wilson@issatso.u-sousse.tn",
      id: 5,
      profilePicture: `/customers/5.png`,
    },
    {
      fullName: "Frank Thomas",
      email: "frank.thomas@issatso.u-sousse.tn",
      id: 6,
      profilePicture: `/customers/6.png`,
    },
    {
      fullName: "Grace Lee",
      email: "grace.lee@issatso.u-sousse.tn",
      id: 7,
      profilePicture: `/customers/7.png`,
    },
    {
      fullName: "Henry Brown",
      email: "henry.brown@issatso.u-sousse.tn",
      id: 8,
      profilePicture: `/customers/8.png`,
    },
    {
      fullName: "Ivy Clark",
      email: "ivy.clark@issatso.u-sousse.tn",
      id: 9,
      profilePicture: `/customers/9.png`,
    },
    {
      fullName: "Jackie Cooper",
      email: "jackie.cooper@issatso.u-sousse.tn",
      id: 10,
      profilePicture: `/customers/10.png`,
    },
    {
      fullName: "Kevin Davis",
      email: "kevin.davis@issatso.u-sousse.tn",
      id: 11,
      profilePicture: `/customers/11.png`,
    },
    {
      fullName: "Linda Evans",
      email: "linda.evans@issatso.u-sousse.tn",
      id: 12,
      profilePicture: `/customers/12.png`,
    },
    {
      fullName: "Mark Fisher",
      email: "mark.fisher@issatso.u-sousse.tn",
      id: 13,
      profilePicture: `/customers/1.png`,
    },
    {
      fullName: "Nancy Green",
      email: "nancy.green@issatso.u-sousse.tn",
      id: 14,
      profilePicture: `/customers/2.png`,
    },
    {
      fullName: "Olivia Harris",
      email: "olivia.harris@issatso.u-sousse.tn",
      id: 15,
      profilePicture: `/customers/3.png`,
    },
    {
      fullName: "Peter Jackson",
      email: "peter.jackson@issatso.u-sousse.tn",
      id: 16,
      profilePicture: `/customers/4.png`,
    },
    {
      fullName: "Quentin King",
      email: "quentin.king@issatso.u-sousse.tn",
      id: 17,
      profilePicture: `/customers/5.png`,
    },
    {
      fullName: "Rachel Lopez",
      email: "rachel.lopez@issatso.u-sousse.tn",
      id: 18,
      profilePicture: `/customers/6.png`,
    },
    {
      fullName: "Samuel Martin",
      email: "samuel.martin@issatso.u-sousse.tn",
      id: 19,
      profilePicture: `/customers/7.png`,
    },
    {
      fullName: "Tina Nelson",
      email: "tina.nelson@issatso.u-sousse.tn",
      id: 20,
      profilePicture: `/customers/8.png`,
    },
    {
      fullName: "Ursula O'Connor",
      email: "ursula.oconnor@issatso.u-sousse.tn",
      id: 21,
      profilePicture: `/customers/9.png`,
    },
    {
      fullName: "Vincent Parker",
      email: "vincent.parker@issatso.u-sousse.tn",
      id: 22,
      profilePicture: `/customers/10.png`,
    },
    {
      fullName: "Wendy Quinn",
      email: "wendy.quinn@issatso.u-sousse.tn",
      id: 23,
      profilePicture: `/customers/11.png`,
    },
    {
      fullName: "Xavier Robinson",
      email: "xavier.robinson@issatso.u-sousse.tn",
      id: 24,
      profilePicture: `/customers/12.png`,
    },
    {
      fullName: "Yvonne Smith",
      email: "yvonne.smith@issatso.u-sousse.tn",
      id: 25,
      profilePicture: `/customers/1.png`,
    },
    {
      fullName: "Zack Thompson",
      email: "zack.thompson@issatso.u-sousse.tn",
      id: 26,
      profilePicture: `/customers/2.png`,
    },
    {
      fullName: "Anne White",
      email: "anne.white@issatso.u-sousse.tn",
      id: 27,
      profilePicture: `/customers/3.png`,
    },
    {
      fullName: "Benjamin Young",
      email: "benjamin.young@issatso.u-sousse.tn",
      id: 28,
      profilePicture: `/customers/4.png`,
    },
    {
      fullName: "Catherine Zane",
      email: "catherine.zane@issatso.u-sousse.tn",
      id: 29,
      profilePicture: `/customers/5.png`,
    },
    {
      fullName: "David Adams",
      email: "david.adams@issatso.u-sousse.tn",
      id: 30,
      profilePicture: `/customers/6.png`,
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-end">
        <div className=" flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="sr-only">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((data) => (
            <tr
              key={data.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{data.id}</td>

              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-10 h-10 rounded-full"
                  src={data.profilePicture}
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">{data.fullName}</div>
                  <div className="font-normal text-gray-500">{data.email}</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                  Online
                </div>
              </td>
              <td className="whitespace-nowrap bg-white py-3 pl-6 pr-3">
                <div className="flex gap-2">
                  <Link
                    href={`#`}
                    className="group relative cursor-pointer overflow-hidden rounded-md border bg-white p-2 hover:overflow-visible hover:bg-gray-100 focus-visible:outline-none print:hidden"
                    aria-describedby="tooltip-02"
                  >
                    <EyeIcon className="w-5" />
                    <span
                      role="tooltip"
                      id="tooltip-02"
                      className="invisible absolute right-full top-1/2 z-10 mr-2 -translate-y-1/2 rounded bg-slate-700 p-2 text-xs text-white opacity-0 transition-all before:invisible before:absolute before:left-full before:top-1/2 before:z-10 before:-mt-1 before:mr-2 before:border-y-4 before:border-l-4 before:border-y-transparent before:border-l-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
                    >
                      View details page
                    </span>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
