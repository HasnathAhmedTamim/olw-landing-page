import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#D6D6D6] bg-[#FFFFFF] pt-20">
      {/* Main Container - 100px gap from left/right on large screens */}
      <div className="w-full px-6 lg:px-[100px] mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Description Section */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src="/logos/google_logo.svg"
                alt="Google Logo"
                width={125}
                height={45}
                className="h-auto"
              />
            </div>
            <p className="font-['Plus_Jakarta_Sans'] font-normal text-[14px] leading-[22px] text-[#52525B] max-w-[320px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <a href="#" aria-label="Twitter" title="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-50">
                <Image src="/twitter.svg" alt="Twitter" width={20} height={20} className="h-5 w-5 object-contain" />
              </a>
              <a href="#" aria-label="Facebook" title="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-50">
                <Image src="/fb.svg" alt="Facebook" width={20} height={20} className="h-5 w-5 object-contain" />
              </a>
              <a href="#" aria-label="Instagram" title="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-50">
                <Image src="/ig.svg" alt="Instagram" width={20} height={20} className="h-5 w-5 object-contain" />
              </a>
              <a href="#" aria-label="GitHub" title="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-50">
                <Image src="/gh.svg" alt="GitHub" width={20} height={20} className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company Section */}
            <div>
              <h4 className="font-['DM_Sans'] font-bold text-[16px] leading-[24px] text-[#18181B] mb-6">
                Company
              </h4>
              <ul className="flex flex-col">
                {['About', 'Features', 'Works', 'Career'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['DM_Sans'] font-medium text-[14px] leading-[40px] text-[#18181B] hover:opacity-70 transition-opacity">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h4 className="font-['DM_Sans'] font-bold text-[16px] leading-[24px] text-[#18181B] mb-6">
                Help
              </h4>
              <ul className="flex flex-col">
                {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['DM_Sans'] font-medium text-[14px] leading-[40px] text-[#18181B] hover:opacity-70 transition-opacity">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h4 className="font-['DM_Sans'] font-bold text-[16px] leading-[24px] text-[#18181B] mb-6">
                Resources
              </h4>
              <ul className="flex flex-col">
                {['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'].map((item) => (
                  <li key={item}>
                    <a href="#" className="font-['DM_Sans'] font-medium text-[14px] leading-[40px] text-[#18181B] hover:opacity-70 transition-opacity">
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
      <div className="w-full bg-[#230B41] py-[14px]">
        <p className="font-['Poppins'] font-normal text-[14px] leading-[22px] tracking-[0px] text-center text-[#FFFFFF]">
          © Copyright 2024, All Rights Reserved by XYz
        </p>
      </div>
    </footer>
  );
};

export default Footer; 