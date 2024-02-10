import Image from "next/image";
import { Inter } from "next/font/google";
import Date from "../components/molecules/Date";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Date />

    </main>
  );
}
