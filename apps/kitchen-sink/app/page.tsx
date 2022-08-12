import Link from "next/link";

export default function Index() {
  return (
    <div>
      Hello from Index!
      <Link href="/foo">Go to Foo</Link>
    </div>
  );
}
