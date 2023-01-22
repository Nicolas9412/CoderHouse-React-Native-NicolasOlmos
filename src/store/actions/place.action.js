import { URL_GEOCODING } from "../../constants/index";
import { placeTypes } from "../types";
import { insertAddress, fetchAddress } from "../../db";

const { ADD_PLACE, LOAD_PLACES } = placeTypes;

export const savePlace = ({ image, coords }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
      if (!response.ok)
        throw new Error("el servicio no está funcionando correctamente");

      const data = await response.json();

      if (!data.results) throw new Error("no se encontró una dirección");

      const address = data.results[0].formatted_address;

      const result = await insertAddress(address, coords?.lat, coords?.lng);
      console.log("resultado",result);

      dispatch({
        type: ADD_PLACE,
        id: result.insertId,
        address,
        coords,
      });
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
      dispatch({ type: LOAD_PLACES, places: result.rows._array });
    } catch (error) {
      throw error;
    }
  };
};
