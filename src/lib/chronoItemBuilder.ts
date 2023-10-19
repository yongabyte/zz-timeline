// lib/chronoItemBuilder.js
import { TimelineItem } from "react-chrono";
const imageContext = require.context('/public/images', false, /\.(jpg|jpeg|png|gif)$/);

export class ChronoItemBuilder {
    private basePath: string;

    constructor(basePath: string) {
      this.basePath = basePath;
    }
    
    buildchronoItems(): Array<TimelineItem> {
      const imageFilenames: string[] = imageContext.keys();
      const relativeFilenames: string[] = imageFilenames.filter((filename: string) => filename.startsWith('public/'));
    
      const tItems: Array<TimelineItem> = relativeFilenames.map((imagePath: string) => {
        const filename: string = imagePath.split('/').pop()!; // Get the filename from the path
        const datePart: string = filename.split('_')[0]; // Get the date part before the underscore
        // Assuming the date format is "YYYYMMDD", you can parse it into a Date object
        const year = parseInt(datePart.substring(0, 4)),
              month = parseInt(datePart.substring(4, 6)) - 1, // Month is 0-based in JavaScript Date
              day = parseInt(datePart.substring(6, 8)),
              date = new Date(year, month, day);
    
        const dateformatted: string = date.toLocaleDateString('en-us', { month: "short" }) + ' ' + year;
        return {
          title: dateformatted,
          media: {
            name: dateformatted,
            source: {
              url: `${this.basePath}/images/${filename}`
            },
            type: "IMAGE"
          }
        }
      });
    
      return tItems;
    }

}