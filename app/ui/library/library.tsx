import Image from "next/image";
import book from "@/public/books/clean-code.jpg";
import book1 from "@/public/books/book1.png";
import book2 from "@/public/books/book2.png";
import book3 from "@/public/books/book3.png";
import book4 from "@/public/books/images (2).jpeg";
import { StarIcon } from "@heroicons/react/20/solid";

export default function Library() {
  return (
    <div className="mt-3 flex w-full flex-col px-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Recommended for you</h1>
        <p className="text-sm text-gray-400">
          Handpicked based on your reading preferences.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-6">
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-full h-72 rounded-lg bg-gray-200 relative">
            <div className="absolute top-0 right-0 w-20 h-6 bg-yellow-500 rounded-lg flex items-center justify-center font-medium text-sm">
              Coding
            </div>
            <Image
              src={book}
              alt="logo"
              width={500}
              height={500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium">Clean Code</h1>
            <p className="text-sm text-gray-400">
              Learn how to write clean code with Robert C. Martin ...
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-full h-72 rounded-lg bg-gray-200 relative">
            <div className="absolute top-1 right-0 w-20 h-6 bg-yellow-500 rounded-lg flex items-center justify-center font-medium text-sm">
              Coding
            </div>
            <Image
              src={book4}
              alt="logo"
              width={500}
              height={500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium">The C Programming Language</h1>
            <p className="text-sm text-gray-400">
              C is a general-purpose, procedural computer programming
              language...
            </p>
          </div>
        </div>{" "}
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">New Releases</h1>
        <p className="text-sm text-gray-400">
          Newly released books spanning various genres.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-6">
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-full h-72 rounded-lg bg-gray-200 relative">
            <div className="absolute top-0 right-0 w-16 h-6 bg-yellow-500 rounded-lg flex items-center justify-center font-medium text-sm">
              Fiction
            </div>
            <Image
              src={book1}
              alt="logo"
              width={500}
              height={500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium">I Want a Better Catastrophe</h1>
            <p className="text-sm text-gray-400">
              With global warming projected to rocket past the...{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-full h-72 rounded-lg bg-gray-200 relative">
            <div className="absolute top-0 right-0 w-16 h-6 bg-yellow-500 rounded-lg flex items-center justify-center font-medium text-sm">
              Fiction
            </div>
            <Image
              src={book3}
              alt="logo"
              width={500}
              height={500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium">The Midnight Library</h1>
            <p className="text-sm text-gray-400">
              The story follows a woman named Nora Seed, who{" "}
            </p>
          </div>
        </div>{" "}
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Your Favourite</h1>
        <p className="text-sm text-gray-400">
          Your favourite books spanning various genres.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-6">
        <div className="flex flex-col gap-2 mt-3">
          <div className="w-full h-72 rounded-lg bg-gray-200 relative">
            <StarIcon className="absolute w-6 h-6 top-0 right-0  text-yellow-500 rounded-lg flex items-center justify-center text-sm"></StarIcon>
            <Image
              src={book}
              alt="logo"
              width={500}
              height={500}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-xl font-medium">Clean Code</h1>
            <p className="text-sm text-gray-400">
              Learn how to write clean code with Robert C. Martin ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
