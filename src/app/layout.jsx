import { Arvo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer2 from "@/components/Footer2";
import { AuthProvider } from "@/context/userContext";

const arvo = Arvo({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Quizzu",
  description: "An app for taking online exams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-background">
      <body className={arvo.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer2 />
        </AuthProvider>
      </body>
    </html>
  );
}
