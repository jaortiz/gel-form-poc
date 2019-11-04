import { formOne, formTwo, formThree } from "../data/form-data";
export const initialState = {
  form: formOne
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "FORM_ONE":
      return { form: formOne };
    case "FORM_TWO":
      return { form: formTwo };
    case "FORM_THREE":
      return { form: formThree };
    default:
      return state;
  }
};
