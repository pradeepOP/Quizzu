import { Arvo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/useContext";

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
        </AuthProvider>
      </body>
    </html>
  );
}
