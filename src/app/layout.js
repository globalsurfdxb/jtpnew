import "./globals.css";

import SmoothScrolling from "./components/SmoothScrolling";

export const metadata = {
  title: "JTP",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
       <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
