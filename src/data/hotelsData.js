const hotelData = {
    
    langham: {
        name: "The Langham, New York, Fifth Avenue",
        website: "https://www.langhamhotels.com/en/the-langham/new-york/",
        location: "400 5th Ave, New York, NY 10018",
        costCategory: "$$$",
        image: "https://www.langhamhotels.com/content/dam/langhamhotels/dynamicmedia/north_america/the-langham-new-york-fifth-avenue-tlnyc/home/tlnyc-exterior-01.jpg",
        description: "Centrally located in the city, The Langham, New York, Fifth Avenue is a convenient base for all your big city adventures. Iconic cultural attractions and shopping destinations, like The Grand Central Station and Times Square, are just a short walk away.",
    },

    hotelAtFifth: {
        name: "The Hotel at Fifth Avenue",
        website: "https://www.hotelatfifthavenuenyc.com/",
        location: "17 W 32nd St 14th Floor, New York, NY 10001",
        costCategory: "$$",
        image: "https://www.peninsula.com/-/media/images/new-york/compressed/photos/pny-exterior.jpg?mw=987&hash=2DD03609949993C9FC90CD008FFC0AB0",
        description: "Located on 32nd Street between Broadway and Fifth Avenue, The Hotel @ Fifth Avenue is just a short two block walk away from the Empire State Building. The iconic Fashion District, 34th Street Macy's, and Madison Square Garden are within walking distance and the Jacob Javits Convention Center is a quick taxi ride away. Experience the captivating energy of Midtown Manhattan from this intimate, boutique location with easy access to Grand Central Station, Penn Station, and the Port Authority Bus Terminal.",
    },

    hiltonGardenInn: {
        name: "Hilton Garden Inn New York/West 35th Street",
        website: "https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=NYCTFGI&arrivalDate=2023-10-02&departureDate=2023-10-03&room1NumAdults=2&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true&WT.mc_id=zLADA0US1GI2OLX3GGL4ADVMETA5LF6_NYCTFGI7_129231037_&adType=PD&gclid=CjwKCAjwu4WoBhBkEiwAojNdXqYajGSZ1dm5g5I_llt_Lj9ASlZgpigb7AhNVbFaQE2p5EHNLrtrvhoCWJgQAvD_BwE&dsclid=56218221598490624&dclid=CO6B0uD-p4EDFUibwAod_H0Oag&hmGUID=b9fe38b8-4d89-466e-bf4b-8085419a4856&bm-verify=AAQAAAAH_____60aRJauHBuUV2tyF19gN9N3PKfFAMwiNDead8_uwIDbIr-D-RwgR2VEUvfOIGgLUY9sOJG0vyYl1M1JWWLE4dp1RaCV9jLDj8yueDj0Wb2mj91Jxo6vxOZfJ7cgkDKT_3r4L6m1yCkZciW3AeqQiUAMJQf6wFFBoB0_qVAVog2603S6oVeomRkGiYUhG8xy1M08LDuZdHWpzEfP4cAnvca0LnhT05ncJhAXfEG9dRVm-OdlOe3Ah68a4Er1AHqj_Ago6rMMxK9m8c-LP8yAl1c68pE8K7BcQFaCzW22w9SELtFaua9Ch2x98IJ1pYlt7JNJXlw-pVD0ul7XiGvEwhCR2LJheh6gJOXhngGNHAEhN7NN1H-F6K3mZoieDr1ll5C5yPIMtZ3cWw3yEwgNHNU6pcuHriE8XJzaDttRL_yd_rqMUM1yJAhaXv9Ot_aKsNWBNIRa1AdXOLPYGBoL7hu1k2iplgfY6JqhqTSjEU2VqDBDAFFejHPqjw95FX7tMS2nMDAnW4gnAixlh4FoBi6DLIVIe2y6BVqZY4bBtppQISTi0VVS7RDQhEEJ-Dl7y7rkB7OzC6sijeJfT9ITFhc4r8dFPnDnsHRSIpLlSdVj8W2ThnfJGaLgIuO37T8Yvifk9hM7YvrrbAwKdEGVE5N35Ihu9KpLH4pmGdQk7BuUpoKaGAPEy6mzH_R8zTnxtzeOsxMQtPwWRXWsDKgSTHnR52mX4lY9jRZtY_av4VCfcB_5Kgq_oPuzzGO7T3H9H4xThCcN6Kbm9zY3VkiXALIfV6x1qRTbgJh9Hy2uRFuFW854a7mgShylUQmUA55YpCtBlzvj8rKXD-AiEMoEFBOL0Kt25o00EVDo5oyN6eLcgJvVjSVOLBMYFQ28QhWeJA0iKaVAsOKE9bjc8BmhMUKly8rh7rG5iAfeY1DBjGpmDYjPigSRT3k8ASiic7GAhHiI_tu20pdCWp8vyBp6lY5mpZSBjedxewiumTw4NZV8rOzh8XlXzSHHqSXs_ydUlqxPqgP77exXcxe8PVW7KUhrpV4iJdwx_KPcXzD-KonQ6vnPNuFMelCWWg",
        location: "63 W 35th St, New York, NY 10001",
        costCategory: "$$",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/26/64/3f/99/exterior.jpg",
        description: "We’re in Midtown Manhattan, just steps from the 34th St/Herald Square subway station. Macy’s, the Empire State Building, Madison Square Garden, and Times Square are in walking distance – 10 minutes or less from our door. We’re two miles from Hudson Yards and the Javits Center. Enjoy our hot breakfast and light bites at our lobby bar.",
    },

    MottoByHilton: {
        name: "Motto by Hilton New York City Chelsea",
        website: "https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=NYCDLUA&arrivalDate=2023-10-02&departureDate=2023-10-03&room1NumAdults=2&inputModule=HOTEL_SEARCH&viewPackagesAndPromotionsRate=true&WT.mc_id=zLADA0US1UA2OLX3GGL4ADVMETA5LF6_NYCDLUA7_129231037_&adType=PD&gclid=CjwKCAjwu4WoBhBkEiwAojNdXg_u3ZjhFqQ1z_Z42Q4T1B1cVrsQ2dyUnJ7OjovppE2pb-Cn5q_X-hoCOZ8QAvD_BwE&dsclid=56218264956047360&dclid=CNqYxK__p4EDFWPP9gIdC_oBDA&hmGUID=b9fe38b8-4d89-466e-bf4b-8085419a4856",
        location: "113 W 24th St, New York, NY 10001",
        costCategory: "$$$",
        image: "https://www.hilton.com/im/en/NYCDLUA/16491333/mottochelsea-joethomas-22.jpg?impolicy=crop&cw=5000&ch=2097&gravity=NorthWest&xposition=0&yposition=1217&rw=1920&rh=806",
        description: "Towering 42 stories over Chelsea, our hotel is two blocks from Madison Square Park and the Flatiron Building. We’re about a mile from The High Line, Chelsea Market, Times Square, and Greenwich Village. Dozens of unique eateries, bars, museums, and shops are also a short walk from our doors. Or unwind with a drink and bite to eat at our bar and restaurant.",
    },

    theJames: {
        name: "The James New York - NoMad",
        website: "https://www.jameshotels.com/?_ga=2.252127562.2124375887.1694622248-310202715.1694622248&_gl=1%2A14tdp0n%2A_ga%2AMzEwMjAyNzE1LjE2OTQ2MjIyNDg.%2A_ga_6PNJBE2FNN%2AMTY5NDYyMjI0OC4xLjAuMTY5NDYyMjI0OC4wLjAuMA..%2A_ga_LNC8773JV4%2AMTY5NDYyMjI0OC4xLjAuMTY5NDYyMjI0OC42MC4wLjA.",
        location: "22 E 29th St, New York, NY 10016",
        costCategory: "$$",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/00/37/91/exterior-of-james.jpg?w=700&h=-1&s=1",
        description: "A Beaux Arts landmark in the beating heart of the city, The James NoMad offers a sophisticated refuge for the discerning urban explorer, inspired by the community we call home.",
    },

    ritzCarlton: {
        name: "The Ritz-Carlton New York, Central Park",
        website: "https://www.ritzcarlton.com/en/hotels/nyccp-the-ritz-carlton-new-york-central-park/overview/",
        location: "50 Central Park S, New York, NY 10019",
        costCategory: "$$$$",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/446598387.jpg?k=9870e791bd08baf5eacb485b653320a78d6557c59dc8c9f355e60ecf67940b00&o=&hp=1",
        description: "The Ritz-Carlton New York, Central Park reimagines luxury in Midtown Manhattan, drawing inspiration from the sights, sounds, and colors of Central Park and the chic residential style of a city penthouse. Steps from Manhattan’s finest attractions and renowned cultural attractions, the 253-room Ritz-Carlton New York, Central Park is a Forbes Five-Star and AAA Five Diamond Hotel. Featuring the all-day gastro lounge Contour, The Ritz-Carlton Club® Lounge, and a collection of wellness experiences including the first stateside La Prairie Spa and innovative Movement Studio, the iconic hotel creates inspiring guest memories with its legendary Ritz-Carlton service.",
    },
  }
  
  export default hotelData;