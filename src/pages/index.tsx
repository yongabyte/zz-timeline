import chronoItemBuilder from "@/lib/chronoItemBuilder";
import { Chrono } from "react-chrono";
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export default function Home() {
  const imageItems = chronoItemBuilder();
  console.log(JSON.stringify(imageItems));
  return (
    <main  
    className={roboto.className}
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
     </main>
  );
}
