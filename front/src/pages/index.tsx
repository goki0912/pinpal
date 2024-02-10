import Image from "next/image";
import { Inter } from "next/font/google";
import GoogleMap from '@/components/organisms/GoogleMap';
import  PlacesList  from '@/components/organisms/PlacesList';
import InputGroup from '@/components/organisms/InputGroup';
import { usePlaces } from '@/hooks/usePlaces';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const allPlace = usePlaces();
  return (
    <main>
      <GoogleMap />
      <PlacesList places={allPlace} />
      {/* <InputGroup title="Group" subtitle="一緒に行くグループを作ろう！"/> */}
    </main>
  );
}
