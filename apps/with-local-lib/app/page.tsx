import Link from "next/link";

import { foo } from "mixed-lib-with-exports";

import { hello } from "client-lib";

import { howdy, useCustomState } from "regular-lib";

import { useState } from "react";

console.log({ hello, howdy, useCustomState });

export default function Index() {
  // let [foo] = useCustomState();
  return (
    <div>
      Hello from Index!
      <strong>{foo}</strong>
      <Link href="/foo">Go to Foo</Link>
      <Link href="/grouped">Go to grouped</Link>
    </div>
  );
}
