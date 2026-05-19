import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://discoverzushi.com"),
  title: "Discover Zushi | Private Cultural Journeys Through Shonan & Miura",
  description:
    "Inbound luxury cultural experiences through the people of Shonan and Miura. Private journeys curated by Discover Zushi.",
  openGraph: {
    title: "Discover Japan Through Its People",
    description:
      "A private invitation into coastal Japanese life through the sea, fields, kitchens, and people of Shonan and Miura.",
    images: ["/images/shonan-ocean-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
