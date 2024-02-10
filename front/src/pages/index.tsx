import Image from "next/image";
import { Inter } from "next/font/google";
import Email from "../components/molecules/Email";
import PlaceAlert from "../components/molecules/PlaceAlert";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <PlaceAlert place="Tokyo" onClick={() => {}} />

    </main>
  );
}
