import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedGuard – Track Dangerous Drug Interactions for Families",
  description: "Keep elderly relatives safe. Input their medications and get instant alerts about dangerous drug combinations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b3608d09-b79c-415f-9941-54709cd7f7f5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
