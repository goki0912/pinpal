import Image from "next/image";
import { Inter } from "next/font/google";
import { useGroups } from "@/hooks/useGroups";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const groups = useGroups();
  console.log(groups);
  
  return (
    <main>
    </main>
  );
}
