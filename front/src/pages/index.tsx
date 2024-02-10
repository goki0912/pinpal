import Image from "next/image";
import { Inter } from "next/font/google";
import GoogleMap from '@/components/organisms/GoogleMap';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <GoogleMap />
    </main>
  );
}
