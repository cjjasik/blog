const restaurantData = {

    essABagel: {
        image: "https://images.happycow.net/venues/1024/28/25/hcmp28252_786272.jpeg",
        name: "Ess-a-Bagel",
        type: "Breakfast, Bagels",
        website: "https://www.ess-a-bagel.com/",
        description: "It’s not controversial to say that Ess-A-Bagel serves the best bagels in Midtown. People around here seem to agree, as evidenced by the lines that stretch out the front door. But the lines move fast, and while you’re waiting you can figure out your order - we like their signature one with whitefish salad and nova. Have one of these for breakfast and you probably won’t be starving at 11:29am like usual.",
        costCategory: "$$",
        district: "Midtown, Midtown East, & Union Square",
        hours: "Monday-Sunday (6am - 5pm)",
        mapImage: "https://screenshot.googleplex.com/6c8B3bGpp7jJ27t.png",   
    },

    baekJeong: {
        image: "https://images.squarespace-cdn.com/content/v1/5d261d9efca80d00014b7525/1589876472146-47E54OPVXS95EFJRC6PS/korean-bbq-dinner.jpg?format=1500w",
        name: "Kang Ho Dong Baekjeong",
        type: "Korean BBQ",
        website: "https://www.baekjeongnyc.com/",
        description: "On a street loaded with KBBQ, Kang Ho Dong Baekjeong—which started opening locations in California in 2012—stands out as the most consistently good option for tabletop grilled meats. Apparently, the rest of the city agrees, because wait times at this Koreatown restaurant can be horrendous. Either make a prepaid reservation (available for parties of six or more), or arrive early and find somewhere to hang until you’re seated. Every table is outfitted with a tubular stainless steel vent that looks like a slightly intimidating probe, and you should expect loud music and a mostly-drunk crowd. All of the meat options are fantastic, and everything else—from the pork mandoo and seafood pancake to the egg custard and cheesy corn—is just as great.",
        costCategory: "$$$",
        district: "Koreatown",
        hours: "Sunday - Wednesday (11:30Am - 11PM)  |  Thursday -  Saturday (11:30Am - 2AM)",
        mapImage: "https://screenshot.googleplex.com/6UnqyVjwdFTaZmp.png",   
    },
    
    cote: {
        image: "https://media.cnn.com/api/v1/images/stellar/prod/180827153546-cote-nyc-korean-steakhouse-13.jpg?q=w_1920,h_1080,x_0,y_0,c_fill",
        name: "Cote Korean Steak House",
        type: "Korean BBQ",
        website: "cotenyc.com",
        description: "Cote is basically Korean BBQ, turbocharged. Each element of the dining experience at this Flatiron spot is taken up a notch—from the fancy grills and high-end meat to the smooth marble tables and sharply-dressed servers. You’re welcome to order however you want here, but most people will go for the $68 prix-fixe option, which gets you four different kinds of top-quality prime beef, plus banchan, a savory egg soufflé, two different stews, and a little cup of soft serve to finish. You can also add on a few other appetizers like steak tartare or larger accompaniments like bibimbop, but the Butcher’s Feast comes with more than enough food. The steak is truly excellent—rich, tender, buttery—to the extent that you’ll want to eat some of it on its own before wrapping it up in a lettuce leaf with one of the provided sauces.",
        costCategory: "$$$",
        district: "Flatiron",
        hours: "Monday - Sunday (5pm - 11pm)",
        mapImage: "https://screenshot.googleplex.com/AmjhHCbiSHEqFdd.png",
    }, 

    dimSumGoGo: {
        image: "https://static.wixstatic.com/media/dacb1d_a7f07b4b5c05447e87294b331b14dceb~mv2.jpg/v1/fill/w_2500,h_1875,al_c/dacb1d_a7f07b4b5c05447e87294b331b14dceb~mv2.jpg",
        name: "Dim Sum Go Go",
        type: "Dim Sum",
        website: "https://www.dimsumgogonyc.com/",
        description: "Dim Sum Go Go in Manhattan’s Chinatown feels more stripped down than what’s happening on weekend mornings at similar spots in the neighborhood. There are no carts roving around here, and the space is only a fraction of the size of Ping’s or Royal Seafood Restaurant. You’re not going to find the same crowded buzz at Dim Sum Go Go as you will at other legendary parlors, where tables are filled to the gills with big families receiving trays of food everywhere you look. In other words, it’s a great place to remember for a calm Thursday work lunch or a solo experience, since they offer dim sum service every day until 9pm. Alone or not, their $15.95 dim sum platter remains one of the greatest set deals in the borough. Each one comes with a kaleidoscope of steamed dumplings, and it’s a good way to try a bunch of different pieces in a single order. Supplement the set with baked pork buns or shrimp-stuffed eggplant if you’re with another person, though.",
        costCategory: "$$",
        district: "Chinatown  |  EastVillage coming soon",
        hours: "Monday - Sunday (11AM - 9PM)",
        mapImage: "https://screenshot.googleplex.com/4MN7wPRMiRjHeS4.png",
    }, 

    noodleVillage: {
        image: "https://farm6.static.flickr.com/5207/5258879454_8654e85b2a.jpg",
        name: "Noodle Village",
        type: "Chinese, Noodles",
        website: "nynoodlevillage.com",
        description: "If your experiences with wonton soup have been relegated to slippery, doughy wontons filled with little bits of pork dropped into an oily soup, a trip to Noodle Village will change your perspective. The soup is light and doesn’t just taste like something that came from a can, and the wontons are thin and filled with big chunks of shrimp. Since trying the wonton soup here, we find it hard to walk near Chinatown on a cold day without going in. And after trying some other places up the block with reportedly good wonton soup, we can confirm that Noodle Village’s is indeed something special.",
        costCategory: "$",
        district: "Chinatown",
        hours: "Monday - Sunday (11AM - 9:30PM)",
        mapImage: "https://screenshot.googleplex.com/3zyh6BLUR3MM9T8.png",
    }, 

    sundayInBrooklyn: {
        image: "https://blog.resy.com/wp-content/uploads/2021/07/Sunday-in-Brooklyn-HI-RES-222-906x604.jpg",
        name: "Sunday in Brooklyn",
        type: "American, Brunch",
        website: "sundayinbrooklyn.com",
        description: "It’s the kind of place where people would go even if the food was hot garbage. Good news: it’s not. Sunday In Brooklyn does a great brunch, serving grain bowls and matcha lattes for those who just went to their hot yoga studio that’s morally opposed to showers, and patty melts and Bloody Marys for those who did too good of a job reenacting their college glory days last night. Dinner is more limited - your choices are a somewhat forgettable chicken or steak or some much weirder, much better stuff like pastrami-cured cod and sea trout in potato broth and hot buns stuffed with oyster cream. Sunday in Brooklyn is a better brunch spot than it is a dinner restaurant, but it doesn’t really matter. The reason that real people are at Sunday in Brooklyn is the vibes. (Which are only going to get better when the rooftop opens.)",
        costCategory: "$$$",
        district: "Williamsburg",
        hours: "Monday - Sunday (9:30AM - 10PM)",
        mapImage: "https://screenshot.googleplex.com/BUj7GqWWaCWNdg2.png",
    }, 

    kru: {
        image: "https://media.timeout.com/images/105927246/750/422/image.jpg",
        name: "Kru",
        type: "Modern, Thai",
        website: "https://www.krubrooklyn.com/",
        description: "At first glance, Kru might seem like a run-of-the-mill “cool” Williamsburg restaurant. The room is dimly lit, with dark walls and some unobtrusive decorative elements like botanical illustrations and racks of delicate stemware. But this isn't just another trendy spot. The focus here is on reinterpreted century-old Thai recipes, and every dish is a showstopper. Their signature beef head curry has the kind of heat that feels like going on a psychedelic trip, and their take on a peach melba is one of the best things you'll eat in the neighborhood.",
        costCategory: "$$",
        district: "Williamsburg",
        hours: "Tuesday, Wednesday & Saturday, Sunday (5:30pm - 9pm)  |  Thursday-Friday (5:30pm - 10pm)  |  Monday (Closed)",
        mapImage: "https://screenshot.googleplex.com/6enAZDznzLEGHTD.png",
    }, 

    53: {
        image: "https://53-nyc.com/media_files/images/220506_53_537730_websize.max-1900x1900.jpg",
        name: "53",
        type: "Southeast Asian",
        website: "https://53-nyc.com/",
        description: "This “contemporary Asian” spot from the Marea team is right next door to the MoMA, so it’s only fitting that it raises the bar for restaurant design in NYC. The main dining room features sweeping curved, rainbow-colored blades across the ceiling that will make you think of strings on a giant harp. For your next big night out, come for the best soup dumplings we’ve had in a while, and don’t even try to decide between the sambal-smothered skate and the incredibly moist Hainanese chicken—just get both.",
        costCategory: "$$$$",
        district: "Midtown",
        hours: "Tuesday-Wednesday (12 – 2:30PM & 5 – 10:30PM), Thursday (12 – 2:30PM & 5 –11PM), Friday-Saturday (5PM - 11PM), Sunday & Monday (5PM - 10:30PM)",
        mapImage: "https://screenshot.googleplex.com/pvvMLi4iip6iP5x.png",
    }, 

    losTacos: {
        image: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_center,f_auto/images/Los_Tacos_No_1_Midtown-Spread_of_Food-Noah_Devereaux_tmrg7g",
        name: "Los Tacos No. 1",
        type: "Mexican",
        website: "https://www.lostacos1.com/",
        description: "The original Los Tacos No. 1 is in Chelsea Market, and they do some of the best tacos in the city. This second location is, unfortunately, in Times Square. Although, the good news is: they make the same tacos. So the next time the R train breaks down, and you find yourself stranded in a land of German tourists and Mickey Mouse impersonators, get some food here. It isn’t as busy as the one downtown, and it would be worth a trip if Times Square weren’t technically the worst. Just know that they don’t have seats and that the corn tortillas are maybe the best we’ve had.",
        costCategory: "$",
        district: "Midtown, Chelsea, Noho, Times Square, Grand Central, Tribeca",
        hours: "Sunday (11am - 9pm), Monday - Saturday (11am - 10pm)",
        mapImage: "https://screenshot.googleplex.com/7BDDiZQ82rNYPkB.png",
    }, 

    sojuHaus: {
        image: "https://tb-static.uber.com/prod/image-proc/processed_images/6ad374f9c8035807baa2099afa636175/b4facf495c22df52f3ca635379ebe613.jpeg",
        name: "Soju Haus",
        type: "Korean, Liquor",
        website: "tmgroupwebsite.wixsite.com",
        description: "On the second floor of a building on Fifth Avenue in Manhattan’s Korea Town, Soju Haus is a chic, lively place. The beverage of choice is, as one would expect, soju, a Korean saké-like drink that is smooth on the palate. But don’t just come here to sip exclusively, as the menu is loaded with meaty Korean goodness. ",
        costCategory: "$$",
        district: "Koreatown",
        hours: "Sunday - Wednesday (4pm - 1am)  |  Thursday (4pm - 2am)  |  Friday - Saturday (4pm - 3am)",
        mapImage: "https://screenshot.googleplex.com/8KJNLUNdyXafka9.png",
    }, 

}

export default restaurantData;