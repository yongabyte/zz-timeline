// lib/chronoItemBuilder.js
const imageContext = require.context('../../public/images', false, /\.(jpg|jpeg|png|gif)$/);

const chronoItemBuilder = () => {
  const imageFilenames = imageContext.keys();
  const relativeFilenames = imageFilenames.filter((filename) => filename.startsWith('public/'));

  const parsedDates = relativeFilenames.map((imagePath) => {
    const filename = imagePath.split('/').pop(); // Get the filename from the path
    const datePart = filename.split('_')[0]; // Get the date part before the underscore
    // Assuming the date format is "YYYYMMDD", you can parse it into a Date object
    const year = datePart.substr(0, 4),
          month = datePart.substr(4, 2) - 1,// Month is 0-based in JavaScript Date
          day = datePart.substr(6, 2),
          date = new Date(year, month, day);
    
    const dateformatted = date.toLocaleDateString('en-us', { month: "short" }) + ' ' + year;
    return {
      title: dateformatted,
      // cardTitle: dateformatted,
      media: {
        name:dateformatted,
        source: {
          url: `/images/${filename}`
        },
        type: "IMAGE"
      }
    }
  });

  return parsedDates;
};

export default chronoItemBuilder;
