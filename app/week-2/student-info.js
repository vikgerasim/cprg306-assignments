import Link from "next/link";

export default function StudentInfo() {
    return (
      <div>
        <h1 className="">Viktor Gerasimenko</h1>
        <Link className="hover:text-green-500 hover:underline" href="https://github.com/vikgerasim/cprg306-assignments">github.com/vikgerasim/cprg306-assignments</Link>           
      </div>
    );
  }