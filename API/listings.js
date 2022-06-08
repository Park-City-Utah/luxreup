import apiClient from "./Client";
import ListingEditScreen from "../Screens/ListingEditScreen";

const endpoint = "/listings"

const getListings = () => apiClient.get(endpoint);

//Pass listing object with all field data
//const addListing(listing) {
//      form data then = listing.whatever
//      Send to endpoint
//      return response;
//}
const addListing = (listing, onUploadProgress) => {    //Sending in listing
    //Cointent-type is set by apiSauce
    const data = new FormData();    //Auto sets to multip part
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);
    //data.append('images', listing.images);  //array
    listing.images.forEach((image, index) => data.append('images', {
        name: 'image' + index,  //iteration will prodive id
        type: 'image/jpeg',
        uri: image             //Image name
    }));
    if(listing.location) {
        data.append('location', JSON.stringify(listing.location));
};
    
    //Parent needs to have event raised from child, see listing
    //Edit Screen, we will raise even here.

    //Return response
    return apiClient.post(endpoint, data, {
        //=> onUploadProgress is send in from listingEditScreen.hs
        onUploadProgress: (progress) => onUploadProgress(progress.loaded/progress.total),
    });
}

export default {
    addListing,
    getListings,
}