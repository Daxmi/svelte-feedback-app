import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "lorem hekkkog dgfgjfggfhfjdjf hfhdnfnd fdfbdbnnncncn"
    }, 
    {
        id: 2,
        rating: 8,
        text: "lorem hekkkog dgfgjfggfhfjdjf hfhdnfnd fdfbdbnnncncn"
    },
    {
        id: 3,
        rating: 9,
        text: "lorem hekkkog dgfgjfggfhfjdjf hfhdnfnd fdfbdbnnncncn"
    }
]);