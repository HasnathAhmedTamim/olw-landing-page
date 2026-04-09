import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen w-full bg-white py-16 lg:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-[#1E1E1E]">Pricing</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-black/70">
        This is the Pricing page.
      </p>
      <Link href="/" className="mt-8 inline-block text-[#ED3C6A] underline">
        Back to home
      </Link>
    </main>
  );
}
