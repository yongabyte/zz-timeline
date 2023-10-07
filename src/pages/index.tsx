import chronoItemBuilder from "@/lib/chronoItemBuilder";
import { Chrono } from "react-chrono";

export default function Home() {
  const imageItems = chronoItemBuilder();
  return (
    <div 
    className="font-mono"
    >
      <Chrono
        items={imageItems}
        mode="VERTICAL_ALTERNATING"
        noUniqueId
        mediaHeight="500"
        cardWidth="500"
        scrollable
        theme={{
          primary: 'grey',
          secondary: 'white',
          cardBgColor: 'white',
          titleColor: 'grey',
          titleColorActive: 'green',
        }}
      />
     </div>
  );
}
