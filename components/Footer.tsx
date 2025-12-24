import { Puzzle, PuzzleIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-950 w-full">
      <div className="mt-auto w-full max-w-340 py-10 px-4 sm:px-6 llg:px-8 lg:pt-20 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <Link
              href={"#"}
              className="flex-none text-xl font-semibold text-white focus::outline-hidden focus:opacity-80"
              aria-label="Brand"
            >
              <span className="text-primary font-cairo-play cairo-play-bold">
                YH
              </span>
              <Puzzle />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
