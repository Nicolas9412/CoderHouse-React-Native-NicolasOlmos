import { placeTypes } from "../types";
import Place from "../../models/place";

const { ADD_PLACE, LOAD_PLACES } = placeTypes;

const initialState = {
  place: null,
  places: [],
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      console.log(action);
      const newPlace = {
        id: action.id.toString(),
        address: action.address,
        coords: action.coords
      }
      return { ...state, place: newPlace };
    case LOAD_PLACES:
      return {
        ...state,
        places: action.places.map(
          (item) =>
            new Place(item.id.toString(), item.address, {
              lat: item.lat,
              lng: item.lng,
            })
        ),
      };
    default:
      return state;
  }
};

export default placeReducer;
