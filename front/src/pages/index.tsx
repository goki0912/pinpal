import Image from "next/image";
import { Inter } from "next/font/google";
import CreateGroup from "../components/organisms/CreateGroup";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main>
      <CreateGroup title="Group" subtitle="一緒に行くグループを作ろう！"/>
    </main>
  );
}
