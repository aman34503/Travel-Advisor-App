import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';
const options = {
    params: {
      bl_latitude: '11.847676',
      bl_longitude: '108.473209',
      tr_longitude: '109.149359',
      tr_latitude: '12.838442',
     
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': 'c3fa91729dmshc660b43f508aa91p1f8df0jsn1b6534817dea'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

export const getPlacesData = async () => {
  try {
    const {
      data: { data }
    } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
  }
};
