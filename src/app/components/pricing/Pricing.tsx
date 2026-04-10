// "use client";

// import { useState } from "react";
// import Image from "next/image";

// // Define the feature set to ensure consistency across all cards
// const ALL_FEATURES = [
//   "20,000+ of PNG & SVG graphics",
//   "Access to 100 million stock images",
//   "Upload custom icons and fonts",
//   "Unlimited Sharing",
//   "Upload graphics & video in up to 4k",
//   "Unlimited Projects",
//   "Instant Access to our design system",
//   "Create teams to collaborate on designs"
// ];

// const PRICING_PLANS = [
//   {
//     name: "Freebie",
//     description: "Ideal for individuals who need quick access to basic features.",
//     monthlyPrice: "$0",
//     yearlyPrice: "$0",
//     highlighted: false,
//     featuresIncluded: 2, // First 2 features are checked
//   },
//   {
//     name: "Professional",
//     description: "Ideal for individuals who need advanced features and tools for client work.",
//     monthlyPrice: "$25",
//     yearlyPrice: "$20", // Assuming a discount for yearly
//     highlighted: true,
//     featuresIncluded: 6, // First 6 features are checked
//   },
//   {
//     name: "Enterprise",
//     description: "Ideal for businesses who need personalized services and security for large teams.",
//     monthlyPrice: "$100",
//     yearlyPrice: "$80",
//     highlighted: false,
//     featuresIncluded: 8, // All features are checked
//   }
// ];

// export default function Pricing() {
//   const [isYearly, setIsYearly] = useState(false);

//   return (
//     <section className="w-full py-20 bg-[var(--color-background)]">
//       <div className="container-custom mx-auto max-w-[1440px] px-6 lg:px-[100px]">

//         {/* Header Section */}
//         <div className="text-center mb-12 flex flex-col items-center">
//           <h2 className="text-[40px] font-bold text-[#1e1e1e] mb-4">
//             Airbnb Assistant <span className="text-[var(--color-accent)]">pricing</span>
//           </h2>
//           {/* Applying your exact font specifications */}
//           <p className="font-sans font-normal text-[20px] leading-none text-[#191D23]">
//             Choose a plan that’s right for you
//           </p>
//         </div>

//         {/* Toggle Section */}
//         <div className="flex items-center justify-center gap-4 mb-16">
//           <span className={`text-[16px] transition-colors ${!isYearly ? "text-[#1e1e1e]" : "text-gray-500"}`}>
//             Pay Monthly
//           </span>

//           {/* Custom Toggle Switch */}
//           <button
//             type="button"
//             onClick={() => setIsYearly(!isYearly)}
//             className="relative inline-flex h-7 w-14 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
//             aria-pressed={isYearly}
//           >
//             <span className="sr-only">Toggle yearly billing</span>
//             <span
//               className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isYearly ? "translate-x-8" : "translate-x-1"
//                 }`}
//             />
//           </button>

//           <div className="relative flex items-center">
//             <span className={`text-[16px] transition-colors ${isYearly ? "text-[#1e1e1e]" : "text-gray-500"}`}>
//               Pay Yearly
//             </span>

//             {/* Arrow & Save Tag overlay */}
//             <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 flex items-center min-w-max pointer-events-none">
//               <Image
//                 src="/Arrow 2.png"
//                 alt="Arrow"
//                 width={45}
//                 height={30}
//                 className="object-contain"
//               />
//               <span className="text-[var(--color-accent)] font-normal text-[14px] ml-1">
//                 Save 25%
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Pricing Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
//           {PRICING_PLANS.map((plan, index) => (
//             <div
//               key={index}
//               className={`rounded-[10px] p-8 lg:p-10 transition-all duration-300 ${plan.highlighted
//                   ? "bg-[var(--color-accent)] text-white shadow-xl scale-105"
//                   : "bg-white text-[var(--color-nav-text)] border border-[var(--color-service-border)] hover:shadow-[0_4px_20px_var(--color-service-shadow)]"
//                 }`}
//             >
//               <h3 className="text-[24px] font-bold mb-4">{plan.name}</h3>
//               <p className={`text-[14px] leading-[150%] mb-8 min-h-[60px] ${plan.highlighted ? "text-white/90" : "text-gray-500"}`}>
//                 {plan.description}
//               </p>

//               <div className="flex items-end mb-8">
//                 <span className="text-[50px] font-bold leading-none tracking-tight">
//                   {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
//                 </span>
//                 <span className={`text-[16px] ml-2 mb-2 ${plan.highlighted ? "text-white/80" : "text-gray-500"}`}>
//                   / Month
//                 </span>
//               </div>

//               <button
//                 className={`w-full py-4 rounded-[5px] text-[16px] font-bold transition-colors mb-10 ${plan.highlighted
//                     ? "bg-white text-[var(--color-accent)] hover:bg-gray-100"
//                     : "bg-transparent border border-[var(--color-service-border)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white"
//                   }`}
//               >
//                 Get Started Now
//               </button>

//               {/* Features List */}
//               <ul className="flex flex-col gap-5">
//                 {ALL_FEATURES.map((feature, featureIndex) => {
//                   const isIncluded = featureIndex < plan.featuresIncluded;
//                   return (
//                     <li key={featureIndex} className="flex items-center gap-4">
//                       {isIncluded ? (
//                         // Checkmark SVG
//                         <svg className="shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <circle cx="12" cy="12" r="12" fill={plan.highlighted ? "rgba(255,255,255,0.2)" : "#FAC4D2"} fillOpacity={plan.highlighted ? "1" : "0.5"} />
//                           <path d="M7 12L10.5 15.5L17 8" stroke={plan.highlighted ? "white" : "#ED3C6A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                       ) : (
//                         // Cross SVG
//                         <svg className="shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <circle cx="12" cy="12" r="12" fill={plan.highlighted ? "rgba(255,255,255,0.1)" : "#F3F4F6"} />
//                           <path d="M15 9L9 15M9 9L15 15" stroke={plan.highlighted ? "white" : "#9CA3AF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                       )}
//                       <span className={`text-[14px] leading-[150%] ${plan.highlighted ? "text-white" : isIncluded ? "text-[#1e1e1e]" : "text-gray-400"
//                         }`}>
//                         {feature}
//                       </span>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }