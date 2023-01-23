import { placeTypes } from "../types";
import Address from "../../models/adress";

const { ADD_PLACE, LOAD_PLACES } = placeTypes;

const initialState = {
  place: null,
  places: [],
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      console.log(action);
      const newPlace = new Address(
        action.id.toString(),
        action.address,
        action.coords
      );
      return { ...state, place: newPlace };
    case LOAD_PLACES:
      return {
        ...state,
        places: action.places.map(
          (item) =>
            new Address(item.id.toString(), item.address, {
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
