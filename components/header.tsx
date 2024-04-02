import Link from "next/link";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline" legacyBehavior>
        <a className="underline hover:text-blue-600">Letters to Mankind</a>
      </Link>
    </h2>
  );
}
