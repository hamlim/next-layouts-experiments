import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>With Vanilla Extract!</title>
        {/* HACK! next-style-loader needs this element to inject styles during dev... */}
        <noscript id="__next_css__DO_NOT_USE__" />
      </head>
      <body>{children}</body>
    </html>
  );
}
