import "./globals.css";

export const metadata = {
  title: "KFC Crunch",
  description: "Finger Lickin' Good",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}