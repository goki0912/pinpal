import Image from "next/image";
import { Inter } from "next/font/google";
import  { usePlacesByGroup } from "@/hooks/usePlacesByGroup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const places = usePlacesByGroup(1);
  console.log(places);

  return (
    <main>
    </main>
  );
}
