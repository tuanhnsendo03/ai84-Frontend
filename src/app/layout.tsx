import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import useFont from "@/font";
import config from "@/settings.json";

export const metadata: Metadata = {
  title: "AI SaaS Launcher",
  description: "Created by TryDome",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const font = useFont();
  return (
    <html
      lang="en"
      className={`${
        config.theme === "dark"
          ? "bg-ai-background-dark"
          : "bg-ai-background-regular"
      }`}
    >
      <body className={font.className}>{children}</body>
    </html>
  );
}
