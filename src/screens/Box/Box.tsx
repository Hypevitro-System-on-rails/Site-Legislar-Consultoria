import React from "react";
import { Button } from "../../components/ui/button";

export const Box = (): JSX.Element => {
  return (
    <div className="flex h-screen w-full">
      {/* Left side content */}
      <div className="flex flex-col justify-between w-1/2 p-8 bg-white">
        <div className="text-xl font-semibold tracking-wide">VINCENT LAW</div>
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">Vincent Schwartz</h1>
          <p className="text-sm font-medium tracking-wider">
            BOSTON DIVORCE ATTORNEY
          </p>
          <p className="text-base mt-4 max-w-md">
            A long record of successfully resolving complex divorce & family law
            matters.
          </p>
          <Button className="mt-4 bg-black text-white hover:bg-gray-800">
            Book a Call
          </Button>
        </div>
        <div></div> {/* Spacer for bottom alignment */}
      </div>

      {/* Right side with image and navigation */}
      <div className="relative w-1/2 bg-gray-900">
        {/* Navigation */}
        <div className="absolute top-0 right-0 flex items-center p-6 space-x-8 text-white">
          <Button variant="link" className="text-white">
            Services
          </Button>
          <Button variant="link" className="text-white">
            Pricing
          </Button>
          <Button variant="link" className="text-white">
            Blog
          </Button>
          <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600">
            Call Now
          </Button>
        </div>

        {/* Background image */}
        <div className="h-full w-full">
          <img
            src="/assignment.svg"
            alt="Attorney portrait"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
