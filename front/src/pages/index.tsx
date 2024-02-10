import Image from "next/image";
import { Inter } from "next/font/google";
import { usePlaces } from "@/hooks/usePlaces";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const places = usePlaces();
  console.log(places);

  return (
    <main>
      <h1>Places</h1>
      <ul>
        {places?.map((place) => (
          <li key={place.id}>
            
            <h2>{place.name}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}
