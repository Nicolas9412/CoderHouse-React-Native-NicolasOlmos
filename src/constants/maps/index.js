export const API_KEY = "AIzaSyAnkIzem0cIVDKZ0bVMnW9FRoXme_DQLyM";

export const URL_MAPS = (lat, lng, zoom = 14) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`;
};
