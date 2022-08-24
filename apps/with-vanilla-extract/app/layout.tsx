import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>With Vanilla Extract!</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
