import React from "react";

const Calendar = () => {
  return (
    <div className="lg:flex lg:h-full lg:flex-col">
      <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          <time dateTime="2022-01">May 2024</time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-l-md border-y border-l border-gray-300 pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Previous month</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden border-y border-gray-300 px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block"
            >
              Today
            </button>
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"></span>
            <button
              type="button"
              className="flex h-9 w-12 items-center justify-center rounded-r-md border-y border-r border-gray-300 pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
            >
              <span className="sr-only">Next month</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="relative ml-6 md:hidden"></div>
        </div>
      </header>
      <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
          <div className="flex justify-center bg-white py-2">
            <span>M</span>
            <span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>T</span>
            <span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>W</span>
            <span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>T</span>
            <span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>F</span>
            <span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>S</span>
            <span className="sr-only sm:not-sr-only">at</span>
          </div>
          <div className="flex justify-center bg-white py-2">
            <span>S</span>
            <span className="sr-only sm:not-sr-only">un</span>
          </div>
        </div>
        <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2021-12-27">27</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2021-12-28">28</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2021-12-29">29</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2021-12-30">30</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2021-12-31">31</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-01">1</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-01">2</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-03">3</time>
              <ol className="mt-2">
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      AI
                    </p>
                    <time
                      dateTime="2022-01-03T10:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      8:30AM-10:00AM
                    </time>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      Maths
                    </p>
                    <time
                      dateTime="2022-01-03T14:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      10:30AM-12:00PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-04">4</time>
              <ol className="mt-2">
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      AI
                    </p>
                    <time
                      dateTime="2022-01-03T10:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      8:30AM-10:00AM
                    </time>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      Maths
                    </p>
                    <time
                      dateTime="2022-01-03T14:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      10:30AM-12:00PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-05">5</time>
              <ol className="mt-2">
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      AI
                    </p>
                    <time
                      dateTime="2022-01-03T10:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      8:30AM-10:00AM
                    </time>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      Maths
                    </p>
                    <time
                      dateTime="2022-01-03T14:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      10:30AM-12:00PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-06">6</time>
              <ol className="mt-2">
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      AI
                    </p>
                    <time
                      dateTime="2022-01-03T10:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      8:30AM-10:00AM
                    </time>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      Maths
                    </p>
                    <time
                      dateTime="2022-01-03T14:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      10:30AM-12:00PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time
                dateTime="2022-01-07"
                className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
              >
                7
              </time>
              <ol className="mt-2">
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      AI
                    </p>
                    <time
                      dateTime="2022-01-03T10:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      8:30AM-10:00AM
                    </time>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex">
                    <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                      Maths
                    </p>
                    <time
                      dateTime="2022-01-03T14:00"
                      className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >
                      10:30AM-12:00PM
                    </time>
                  </a>
                </li>
              </ol>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-08">8</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-09">9</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-10">10</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-11">11</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-12">12</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-13">13</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-14">14</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-15">15</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-16">16</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-17">17</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-18">18</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-19">19</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-20">20</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-21">21</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-22">22</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-23">23</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-24">24</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-25">25</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-26">26</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-27">27</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-28">28</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-29">29</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-30">30</time>
            </div>
            <div className="relative bg-white px-3 py-2">
              <time dateTime="2022-01-31">31</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2022-02-01">1</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2022-02-02">2</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2022-02-03">3</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2022-02-04">4</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2022-02-05">5</time>
            </div>
            <div className="relative bg-gray-50 px-3 py-2 text-gray-500">
              <time dateTime="2022-02-06">6</time>
            </div>
          </div>
          <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2021-12-27" className="ml-auto">
                27
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2021-12-28" className="ml-auto">
                28
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2021-12-29" className="ml-auto">
                29
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2021-12-30" className="ml-auto">
                30
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2021-12-31" className="ml-auto">
                31
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-01" className="ml-auto">
                1
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-02" className="ml-auto">
                2
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-03" className="ml-auto">
                3
              </time>
              <span className="sr-only">2 events</span>
              <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              </span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-04" className="ml-auto">
                4
              </time>
              <span className="sr-only">2 events</span>
              <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              </span>{" "}
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-05" className="ml-auto">
                5
              </time>
              <span className="sr-only">2 events</span>
              <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              </span>{" "}
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-06" className="ml-auto">
                6
              </time>
              <span className="sr-only">2 events</span>
              <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              </span>{" "}
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time
                dateTime="2022-01-07"
                className="ml-auto text-indigo-600 font-semibold"
              >
                7
              </time>
              <span className="sr-only">2 events</span>
              <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                <span className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"></span>
              </span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-08" className="ml-auto">
                8
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-09" className="ml-auto">
                9
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-10" className="ml-auto">
                10
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-11" className="ml-auto">
                11
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-12" className="ml-auto">
                12
              </time>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-13" className="ml-auto">
                13
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-14" className="ml-auto">
                14
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-15" className="ml-auto">
                15
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-16" className="ml-auto">
                16
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-17" className="ml-auto">
                17
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-18" className="ml-auto">
                18
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-19" className="ml-auto">
                19
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-20" className="ml-auto">
                20
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-21" className="ml-auto">
                21
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 font-semibold text-white hover:bg-gray-100 focus:z-10"
            >
              <time
                dateTime="2022-01-22"
                className="ml-auto flex h-6 w-6 items-center justify-center text-gray-500"
              >
                22
              </time>
             
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-23" className="ml-auto">
                23
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-24" className="ml-auto">
                24
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-25" className="ml-auto">
                25
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-26" className="ml-auto">
                26
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-27" className="ml-auto">
                27
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-28" className="ml-auto">
                28
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-29" className="ml-auto">
                29
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-30" className="ml-auto">
                30
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-01-31" className="ml-auto">
                31
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-02-01" className="ml-auto">
                1
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-02-02" className="ml-auto">
                2
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-02-03" className="ml-auto">
                3
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-02-04" className="ml-auto">
                4
              </time>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-02-05" className="ml-auto">
                5
              </time>
              <span className="sr-only">0 events</span>
            </button>
            <button
              type="button"
              className="flex h-14 flex-col bg-gray-50 px-3 py-2 text-gray-500 hover:bg-gray-100 focus:z-10"
            >
              <time dateTime="2022-02-06" className="ml-auto">
                6
              </time>
              <span className="sr-only">0 events</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
