import { OPTIONS_IMAGES } from "../constants/optionsImages";

const selectedImage = (selectedOption) => {
  if (selectedOption == "rock") {
    return OPTIONS_IMAGES.rock.uri;
  } else if (selectedOption == "paper") {
    return OPTIONS_IMAGES.paper.uri;
  } else {
    return OPTIONS_IMAGES.scissors.uri;
  }
};

export default selectedImage;
