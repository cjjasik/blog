import featureData from "./featureData";
import restaurantData from "./restaurantData";
import activitiesData from "./activitiesData";

let searchOptions = [
    { label: "Restaurants", url: "/restaurants"},
    { label: "Activities", url: "/activities"},
    { label: "Hotels", url: "/hotels"},
    { label: "Flights", url: "/flights"}
];

Object.keys(featureData).forEach((d) => searchOptions.push({label: featureData[d].name, url: `/featured/${d}`}));
Object.keys(restaurantData).forEach((d) => searchOptions.push({label: restaurantData[d].name, url: `/restaurants/${d}`}));
Object.keys(activitiesData).forEach((d) => searchOptions.push({label: activitiesData[d].name, url: `/activities/${d}`}));


export default searchOptions;