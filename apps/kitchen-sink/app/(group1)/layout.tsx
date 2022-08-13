// Oddly enough this still inherits the layout from the root `app` folder 🤔
export default function GroupLayout({ children }) {
  return (
    <html>
      <head>
        <title>Group 1</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
