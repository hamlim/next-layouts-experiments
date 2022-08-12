// root layout.tsx

export default function Layout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <title>Kitchen Sink!</title>
      </head>
      <body>
        {children}
        <div>Layout</div>
      </body>
    </html>
  );
}
