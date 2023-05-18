import { showToast } from "./ShowToast";

export const showFirebaseError = errorOBJ => {
  const errorMessage = errorOBJ.message
    .split("/")[1]
    .split(")")[0]
    .toUpperCase();
  showToast("error", errorMessage);
};
