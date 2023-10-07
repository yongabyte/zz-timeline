import chronoItemBuilder from "@/lib/chronoItemBuilder";
import { Chrono } from "react-chrono";

export default function Home() {
  const imageItems = chronoItemBuilder();
  console.log(JSON.stringify(imageItems));
  return (
    <Chrono
      items={imageItems}
      mode="VERTICAL_ALTERNATING"
      noUniqueId
      scrollable
    />
  );
}
