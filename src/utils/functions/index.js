import { Platform } from "react-native";

export const isAndroid = Platform.OS == "android";
export const isIOS = Platform.OS == "ios";

export const formatDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

export const sumTotal = (items) =>
  items?.map((item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0);
