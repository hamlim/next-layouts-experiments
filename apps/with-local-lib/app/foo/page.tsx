"use client";
import { foo } from "mixed-lib-with-exports";

export default function Foo() {
  return (
    <div>
      Hello from Foo (use client)! <strong>{foo}</strong>
    </div>
  );
}
