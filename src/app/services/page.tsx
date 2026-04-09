import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-360 bg-white px-6 py-16 lg:px-10">
      <h1 className="text-4xl font-bold tracking-tight text-[#1E1E1E]">Services</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-black/70">
        This is the Services page.
      </p>
      <Link href="/" className="mt-8 inline-block text-[#ED3C6A] underline">
        Back to home
      </Link>
    </main>
  );
}
