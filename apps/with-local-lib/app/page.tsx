import Link from "next/link";

import { foo } from "mixed-lib-with-exports";

// ClientComponent import breaks right now:
// TypeError: Cannot read properties of undefined (reading 'ClientComponent')
//   at resolveModuleMetaData
import { hello, ClientComponent } from "client-lib";

import { howdy } from "regular-lib";

console.log({ hello, howdy, ClientComponent });

export default function Index() {
  return (
    <div>
      Hello from Index!
      <strong>{foo}</strong>
      <ClientComponent />
      <Link href="/foo">Go to Foo</Link>
      <Link href="/grouped">Go to grouped</Link>
    </div>
  );
}
