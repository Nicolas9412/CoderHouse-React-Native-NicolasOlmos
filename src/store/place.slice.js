import { createSlice } from "@reduxjs/toolkit";
import Place from "../models/places";
import * as FileSystem from "expo-file-system";
import { URL_GEOCODING } from "../constants/maps/index";

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        Date.now().toString(),
        action.payload.title,
        action.payload.image,
        action.payload.adress,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
  },
});

export const { addPlace } = placeSlice.actions;

export const savePlace = ({ title, image, coords }) => {
  return async (dispatch) => {
    //const fileName = image.split("/").pop();
    //const newPath = FileSystem.documentDirectory + fileName;
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
      if (!response.ok) throw new Error("el servicio no está funcionando correctamente");

      const data = await response.json();

      console.log("data", data);

      if (!data.results) throw new Error("no se encontró una dirección");

      const adress = data.results[0].formatted_address;
      dispatch(addPlace({ title, image, adress, coords }));
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

export default placeSlice.reducer;
