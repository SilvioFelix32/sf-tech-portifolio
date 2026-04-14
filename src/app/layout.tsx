import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Silvio Felix | Portfolio",
  description: "Portfolio de desenvolvedor Full-Stack",
  icons: {
    icon: "/sf-tech_favicon.jpeg",
    shortcut: "/sf-tech_favicon.jpeg",
    apple: "/sf-tech_favicon.jpeg",
  },
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
