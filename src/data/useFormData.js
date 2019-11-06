import { useReducer } from "react";

import { formOne, formTwo, formThree, formFour } from "./form-data";
const initialState = {
  form: formOne
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "FORM_ONE":
      return { form: formOne };
    case "FORM_TWO":
      return { form: formTwo };
    case "FORM_THREE":
      return { form: formThree };
    case "FORM_FOUR":
      return { form: formFour };
    default:
      return state;
  }
};

export const useFormData = () => useReducer(formReducer, initialState);
