import Link from "next/link";

export default function Home() {
  let linkStyles = "text-2xl hover:text-green-500 hover:underline";

  return (
    <main className="bg-black text-white w-full min-h-screen pt-24 pl-60">
      <h1 className="text-4xl font-bold mb-6">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul>
        <li>
          <Link className={linkStyles} href="/week-2">
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link className={linkStyles} href="/week-3">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link className={linkStyles} href="/week-4">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link className={linkStyles} href="/week-5">
            Week 5 Assignment
          </Link>
        </li>
        <li>
          <Link className={linkStyles} href="/week-6">
            Week 6 Assignment
          </Link>
        </li>
        <li>
          <Link className={linkStyles} href="/week-7">
            Week 7 Assignment
          </Link>
        </li>
        <li>
          <Link className={linkStyles} href="/week-8">
            Week 8 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
