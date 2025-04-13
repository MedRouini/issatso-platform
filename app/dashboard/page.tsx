import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container mt-8 mx-auto md:px-6 flex flex-col md:flex-row gap-4">
      <section className="mb-32 text-center md:text-left bg-white p-4 rounded-lg">
        <h2 className="mb-12 text-left text-3xl font-bold">Latest News</h2>

        <div className="mb-6 flex flex-wrap justify-center align-center">
          <div className="mb- shrink-0 grow-0 basis-auto md:mb-0 w-40">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src="/news.png"
                width={300}
                height={300}
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a>
            </div>
          </div>

          <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <h5 className="mb-3 text-lg font-bold">News Title</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              Exams
            </div>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>13.01.2022</u> by
                <a href="#!">Anna Maria Doe</a>
              </small>
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap justify-center align-center">
          <div className="mb- shrink-0 grow-0 basis-auto md:mb-0 w-40">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src="/news.png"
                width={300}
                height={300}
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a>
            </div>
          </div>

          <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <h5 className="mb-3 text-lg font-bold">News Title</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              Exams
            </div>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>13.01.2022</u> by
                <a href="#!">Anna Maria Doe</a>
              </small>
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
          </div>
        </div>
        <div className="mb-6 flex flex-wrap justify-center align-center">
          <div className="mb- shrink-0 grow-0 basis-auto md:mb-0 w-40">
            <div
              className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <Image
                src="/news.png"
                width={300}
                height={300}
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
              </a>
            </div>
          </div>

          <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
            <h5 className="mb-3 text-lg font-bold">News Title</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
              Exams
            </div>
            <p className="mb-6 text-neutral-500 dark:text-neutral-300">
              <small>
                Published <u>13.01.2022</u> by
                <a href="#!">Anna Maria Doe</a>
              </small>
            </p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white w-96 rounded-lg h-96 p-6">
        <h1 className="font-bold ">Upcoming Events</h1>
        <p className="text-gray-400">Next 7 days</p>

        <section className="bg-white dark:bg-gray-900 antialiased">
          <div className="max-w-screen-xl  mx-auto">
            <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12">
              <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700 flex justify-between items-center">
                <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                  <p className="text-lg text-sm font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                    09/05 <br /> 9PM
                  </p>
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      <Link href="#" className="hover:underline">
                        Open Minds
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      NATEG
                    </p>
                  </div>
                </div>
                <ArrowRightIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
