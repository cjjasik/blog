const attractionData = {
    sanGennaro: {
      image: "https://loving-newyork.com/wp-content/uploads/2019/09/The-Feast-of-San-Gennaro-NYC-190913160344020.jpg",
      name: "Feast of San Gennaro",
      type: "Festival, Italy",
      website: "https://sangennaronyc.org/",
      description: "Eat at some of the best Italian restaurants in the city, watch colorful parades, catch live music and, of course, see the world-famous cannoli eating competition. ",
      costCategory: "$",
      district: "Little Italy",
      hours: "September 14-24, 2023",
      mapImage: "",
    },
  
    friendsExperience: {
      image: "https://media.timeout.com/images/105685116/750/422/image.jpg",
      name: "The FRIENDS Experience: The One in New York",
      type: "Tour, Experience, Nostalgic",
      website: "https://nyc.friendstheexperience.com/?utm_source=google&utm_medium=localcards&utm_campaign=110671_nyc",
      description: "Immerse yourself in the world of FRIENDS™ like never before with interactive set recreations, props and costumes, photo ops and exclusive merchandise. There’s no better place to be an unapologetic FRIENDS™ fan!",
      costCategory: "$$-$$$",
      district: "Flatiron",
      hours: "Wednesday-Sunday (10am - 7pm)  |  Monday-Tuesday (closed)",
      mapImage: "https://screenshot.googleplex.com/7vDQf2gpxCkMxA7.png",
    },
  
    empireStateBuilding: {
      image: "https://media.timeout.com/images/101705309/image.jpg",
      name: "Empire State Building",
      type: "Architecture, Tour, Sight Seeing",
      website: "https://www.esbnyc.com/",
      description: "The Empire State Building is a 102-story Art Deco skyscraper in Midtown Manhattan, New York City. The building was designed by Shreve, Lamb & Harmon and built from 1930 to 1931. Its name is derived from 'Empire State', the nickname of the state of New York.",
      costCategory: "$$ - $$$",
      district: "Midtown",
      hours: "Monday - Sunday (9am - 1am)",
      mapImage: "",
    },
  
    edge: {
      image: "https://www.edgenyc.com/sites/default/files/styles/half_width_image/public/acquiadam/2022-05/0213_RET_RGB_LoRes150%20%282%29.png?itok=OZ_NFz7T",
      name: "The Edge",
      type: "Architecture, Tour, Sight Seeing",
      website: "https://www.edgenyc.com/en",
      description: "Edge is New York City’s most exciting new attraction, set high above the fabulous, glimmering, brand new Hudson Yards! You’ll ride the elevator 100 stories into the sky, then step out in the open air onto a vast viewing platform with the famous NYC skyline right before your eyes.",
      costCategory: "$ - $$$",
      district: "Hudson Yards",
      hours: "Monday - Sunday (10am - 10pm)",
      mapImage: "",
    },
  
    strand: {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Strand_Bookstore_%2848072652191%29.jpg/1200px-Strand_Bookstore_%2848072652191%29.jpg",
      name: "The Strand Book Store",
      type: "Shopping, Books",
      website: "https://www.strandbooks.com/",
      description: "The Strand is the largest non-commercialised bookstore in New York and is the sole survivor of Book Row. It was moved to Broadway in 1957, and is now co-managed by Ben's son Fred, and his daughter Nancy. The Manhattan bookstore stocks “18 Miles of Books”, which is more than 2.5 million used, new and rare books!",
      costCategory: "$ - $$",
      district: "Upper West Side, Union Square",
      hours: "Monday - Sunday (10am - 8pm)",
      mapImage: "",
    },
  
    wicked: {
      image: "https://s1.ticketm.net/dam/a/8f4/eac77d3f-de25-40f5-af88-00ea8c1568f4_91951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
      name: "Wicked the Musical",
      type: "Broadway, Musicals",
      website: "https://wickedthemusical.com/",
      description: "Meet the witches of Oz before Dorothy dropped in.",
      costCategory: "$$-$$$$",
      district: "Times Square, Broadway",
      hours: "Check the website for specific performance days and times.",
      mapImage: "",
    },
  
      hamilton: {
      image: "https://www.detroitnews.com/gcdn/presto/2019/03/06/PDTN/165eab72-e2b9-4cdf-81d4-7c725825bdd6-HamiltonGroup3.jpg?crop=5995,3372,x0,y627&width=3200&height=1800&format=pjpg&auto=webp",
      name: "Hamilton",
      type: "Broadway, Musicals",
      website: "https://hamiltonmusical.com/new-york/",
      description: "The sung-through musical follows Hamilton from his early life as a poor orphan in the Caribbean, to his ascendency as the right-hand man of George Washington, to his death in an infamous duel with Aaron Burr.",
      costCategory: "$$-$$$$",
      district: "Times Square, Broadway",
      hours: "Check the website for specific performance days and times.",
      mapImage: "",
    },
  
    brooklynBridge: {
      image: "https://www.usatoday.com/gcdn/-mm-/9a34f53d72d82ec195f239ad6952a7308ddcca3a/c=0-135-2118-1332/local/-/media/2018/07/28/USATODAY/USATODAY/636683395229527947-GettyImages-496266816.jpg?width=1600&height=800&fit=crop&format=pjpg&auto=webp",
      name: "Brooklyn Bridge",
      type: "Architecture, Tourist",
      website: "https://www.nyc.gov/html/dot/html/infrastructure/brooklyn-bridge.shtml",
      description: "The Brooklyn Bridge is a hybrid cable-stayed/suspension bridge in New York City, spanning the East River between the boroughs of Manhattan and Brooklyn. Opened on May 24, 1883, the Brooklyn Bridge was the first fixed crossing of the East River.",
      costCategory: "Free",
      district: "Brooklyn",
      hours: "The bridge is available to walk across at various hours!",
      mapImage: "",
    },
  
    cauldron: {
      image: "https://thecauldron.io/uploads/tinymce/Potions%20Experience/The%20Reaping%202023/351B8027-min.jpg",
      name: "The Cauldron NYC: Our Potion Bar NYC",
      type: "Liquor, Fantasy",
      website: "https://thecauldron.io/nyc",
      description: "Fantasy-inspired pop-up inside Bavaria Bierhaus offers cocktail classes to create-your-own drinks.",
      costCategory: "$$-$$$",
      district: "Financial District, Flatiron",
      hours: "Monday (Closed)  |  Tuesday (4pm - 12am)  |  Wednesday (2pm - 12am)  |  Thursday (2pm - 1am)  |  Friday (2pm - 2am)  |  Saturday (12pm - 2am)  |  Sunday (11:30am - 10pm)",
      mapImage: "",
    },
  
  }
  
  export default attractionData;
