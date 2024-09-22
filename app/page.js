import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white w-full min-h-screen pt-24 pl-60">
        <h1 className="text-4xl font-bold mb-6">CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
        <li><Link className="text-2xl hover:text-green-500 hover:underline" href="/week-2">Week 2 Assignment</Link></li>
        <li><Link className="text-2xl hover:text-green-500 hover:underline" href="/week-3">Week 3 Assignment</Link></li>
        </ul>
    </main>
  );
}
