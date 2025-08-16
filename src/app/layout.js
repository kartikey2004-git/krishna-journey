import { Geist, Manrope } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})


const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata = {
  title: "The Eternal Journey of Shri Krishna",
  description: "From Birth in Mathura to the Mahabharata's Wisdom - Experience the divine journey of Shri Krishna",
};

export default function RootLayout({ children }) {
  return (
    <html 
    lang="en" 
    className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
