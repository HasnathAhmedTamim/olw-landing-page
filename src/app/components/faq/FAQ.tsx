"use client";

import { useState } from "react";
import Image from "next/image";

const FAQ_DATA = [
  {
    question: "Is there a free trial available?",
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add your company name, VAT number, and address to your invoices via the billing dashboard.",
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually. All major credit cards are accepted through our secure payment processor.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your email in the 'Profile' section of your account settings after verifying your new address.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  return (
    // Outer section with 100px left/right gap and 77px bottom gap
    <section className="w-full px-[clamp(16px,7vw,100px)] pb-19.25 pt-16 bg-white">

      {/* 1. FAQ Container Div */}
      <div className="bg-[#F6F6F6] rounded-2xl">
        <div className="text-center px-8 pt-8 pb-12 md:px-12 md:pt-12 md:pb-12 lg:px-59 lg:pt-18.5 lg:pb-18.75">
          <h2 className="font-['DM_Sans',sans-serif] font-semibold text-[36px] leading-11 tracking-[-0.02em] text-center text-black">
            Frequently asked <span className="text-[#ED3C6A]">questions</span>
          </h2>
          <p className="mt-3 font-['DM_Sans',sans-serif] font-normal text-[20px] leading-7.5 tracking-[0%] text-center text-black">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="w-full flex flex-col px-8 pb-8 md:px-12 md:pb-12 lg:px-59 lg:pb-16">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[rgba(191,33,74,0.28)] last:border-0 py-6"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center text-left gap-4"
                >
                  <span className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-7 tracking-[0%] text-black">
                    {item.question}
                  </span>
                  <div className="shrink-0">
                    {isOpen ? (
                      // Minus Icon
                      <div className="w-6 h-6 rounded-full border-2 border-[#ED3C6A] flex items-center justify-center">
                        <div className="w-3 h-0.5 bg-[#ED3C6A]" />
                      </div>
                    ) : (
                      // Plus Icon
                      <div className="w-6 h-6 rounded-full border-2 border-[#ED3C6A] flex items-center justify-center relative">
                        <div className="w-3 h-0.5 bg-[#ED3C6A]" />
                        <div className="w-0.5 h-3 bg-[#ED3C6A] absolute" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Animated Answer */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                  <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-6 tracking-[0%] text-[#606060]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 19px Gap as requested */}
      <div className="h-4.75" />

      {/* 2. Still have questions Container */}
      <div className="bg-[#F6F6F6] rounded-3xl p-8 text-center flex flex-col items-center">
        {/* Overlapping Avatar Group */}
        <div className="flex -space-x-2 mb-6">
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
            <Image src="/avatars/user1.jpg" alt="Team" fill className="object-cover" />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative z-10">
            <Image src="/avatars/user2.jpg" alt="Team" fill className="object-cover" />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative">
            <Image src="/avatars/user3.jpg" alt="Team" fill className="object-cover" />
          </div>
        </div>

        <h3 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-7.5 tracking-[0%] text-center text-[#101828]">Still have Questions?</h3>
        <p className="mt-2 mb-8 max-w-md font-['DM_Sans',sans-serif] font-normal text-[18px] leading-7 tracking-[0%] text-center text-[rgba(156,156,156,1)]">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
        </p>

        <button className="bg-[#ED3C6A] text-white px-6 py-3 rounded-lg font-['DM_Sans',sans-serif] font-medium text-[16px] leading-6 tracking-[0%] hover:bg-opacity-90 transition-all active:scale-95">
          Get in touch
        </button>
      </div>
    </section>
  );
}