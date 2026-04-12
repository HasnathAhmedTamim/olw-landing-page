import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#D6D6D6] bg-[#FFFFFF] pt-20">
      {/* Main Container - 100px gap from left/right on large screens */}
      <div className="mb-16 w-full px-6 lg:px-25">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">

          {/* Brand & Description Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/logos/google_logo.svg"
                alt="Google Logo"
                width={160}
                height={40}
                className="h-auto w-auto"
              />
            </div>
            <p className="max-w-155 font-['Plus_Jakarta_Sans'] text-[14px] font-normal leading-5.5 tracking-[0px] text-[#52525B] lg:max-w-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex flex-wrap items-center gap-6 md:gap-[34.34px]">
              <a href="#" aria-label="Twitter" title="Twitter" className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                <Image src="/twitter.svg" alt="Twitter" width={20} height={20} className="block h-5 w-5 object-contain" />
              </a>
              <a href="#" aria-label="Facebook" title="Facebook" className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                <Image src="/fb.svg" alt="Facebook" width={20} height={20} className="block h-5 w-5 object-contain" />
              </a>
              <a href="#" aria-label="Instagram" title="Instagram" className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                <Image src="/ig.svg" alt="Instagram" width={20} height={20} className="block h-5 w-5 object-contain" />
              </a>
              <a href="#" aria-label="GitHub" title="GitHub" className="inline-flex h-5 w-5 shrink-0 items-center justify-center">
                <Image src="/gh.svg" alt="GitHub" width={20} height={20} className="block h-5 w-5 object-contain" />
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 lg:col-start-6 lg:col-span-7 lg:grid-cols-3 lg:gap-x-33 lg:pl-13.5">
            {/* Company Section */}
            <div>
              <h4 className="mb-6 font-['DM_Sans'] text-[16px] font-bold leading-6 text-[#18181B]">
                Company
              </h4>
              <ul className="flex flex-col">
                {['About', 'Features', 'Works', 'Career'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['DM_Sans'] text-[14px] font-medium leading-10 text-[#18181B] transition-opacity hover:opacity-70">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h4 className="mb-6 font-['DM_Sans'] text-[16px] font-bold leading-6 text-[#18181B]">
                Help
              </h4>
              <ul className="flex flex-col">
                {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['DM_Sans'] text-[14px] font-medium leading-10 text-[#18181B] transition-opacity hover:opacity-70">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="mb-6 font-['DM_Sans'] text-[16px] font-bold leading-6 text-[#18181B]">
                Resources
              </h4>
              <ul className="flex flex-col">
                {['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['DM_Sans'] text-[14px] font-medium leading-10 text-[#18181B] transition-opacity hover:opacity-70">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#230B41] py-3.5">
        <p className="text-center font-['Poppins'] text-[14px] font-normal leading-5.5 tracking-[0px] text-[#FFFFFF]">
          © Copyright 2024, All Rights Reserved by XYz
        </p>
      </div>
    </footer>
  );
};

export default Footer; 