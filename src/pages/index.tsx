import { ChronoItemBuilder } from "@/lib/chronoItemBuilder";
import { Chrono } from "react-chrono";
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/router';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  const basePath: string = useRouter().basePath; //finding current bath path, in case of app lives on subdomain 
  const imageItems = new ChronoItemBuilder(basePath).buildchronoItems();
  let mHeight: string = "400";

  if (typeof window !== "undefined" && window.innerWidth <= 768){
    mHeight = "280";
  }

  return (
    <main  
    className={roboto.className + ' -mx-4'}
    >
      <Chrono
        items={imageItems}
        mode="VERTICAL_ALTERNATING"
        mediaHeight={mHeight}
        cardHeight={mHeight}
        cardWidth={mHeight}
        mediaSettings={{ align: 'left', fit: 'contain' }}
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
