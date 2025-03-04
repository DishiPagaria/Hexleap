import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  weight : ["400", "600"],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Sport Database",
  description: "Sport Database",
  keywords: ["sport" , "database"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
