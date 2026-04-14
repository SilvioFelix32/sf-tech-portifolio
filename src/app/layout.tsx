import type { Metadata } from "next";
import "../src/index.css";

export const metadata: Metadata = {
  title: "Silvio Felix | Portfolio",
  description: "Portfolio de desenvolvedor Full-Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
