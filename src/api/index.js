import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data }
    } = await axios.get(URL,   { 
      params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
     
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'c3fa91729dmshc660b43f508aa91p1f8df0jsn1b6534817dea'
    }
  });
  

    return data;
  } catch (error) {
    console.log(error);
}
};
