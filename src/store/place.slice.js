import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/places";
import * as FileSystem from "expo-file-system";
import { URL_GEOCODING } from "../constants/maps/index";
import { insertAddress, fetchAddress } from "../db";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        action.payload.id.toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
    loadPlaces: (state, action) => {
      return {
        ...state,
        places: action.payload.places.map(
          (item) =>
            new Place(item.id.toString(), item.title, item.image, item.address, {
              lat: item.lat,
              lng: item.lng,
            })
        ),
      };
    },
  },
});

export const { addPlace, loadPlaces } = placeSlice.actions;

export const savePlace = ({ title, image, coords }) => {
  return async (dispatch) => {
    //const fileName = image.split("/").pop();
    //const newPath = FileSystem.documentDirectory + fileName;
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
      if (!response.ok) throw new Error("el servicio no está funcionando correctamente");

      const data = await response.json();

      if (!data.results) throw new Error("no se encontró una dirección");

      const address = data.results[0].formatted_address;

      const result = await insertAddress(title, image, address, coords?.lat, coords?.lng);

      dispatch(addPlace({ id: result.insertId, title, image, address, coords }));
      /*await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });*/
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const loadAddress = () => {
  return async (dispatch) => {
    try {
      const result = await fetchAddress();
      dispatch(loadPlaces({ places: result.rows._array }));
    } catch (error) {
      throw error;
    }
  };
};

export default placeSlice.reducer;
