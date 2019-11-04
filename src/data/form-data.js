export const formOne = {
  submit: "Submit accessibility form",
  fields: [
    {
      name: "feedback",
      label: "Feedback",
      hint: "Maximum 500 characters",
      inputType: "textarea"
    },
    {
      name: "firstName",
      label: "First Name",
      inputType: "text"
    },
    {
      name: "lastName",
      label: "Last Name",
      inputType: "text"
    },
    {
      name: "contact",
      label: "Preferred method of contact",
      inputType: "buttonGroup",
      options: ["Email", "Phone", "Do not contact me"]
    }
  ]
};

export const formTwo = {
  submit: "Submit second form",
  fields: [
    {
      name: "userName",
      label: "User Name",
      inputType: "text"
    },
    {
      name: "firstName",
      label: "First Name",
      inputType: "text"
    },
    {
      name: "lastName",
      label: "Last Name",
      inputType: "text"
    },
    {
      name: "email",
      label: "Email",
      inputType: "text"
    },
    {
      name: "password",
      label: "Enter Password",
      hint: "Password must be of minimum 6 characters length",
      inputType: "text"
    },
    {
      name: "passwordConfirm",
      label: "Confirm Password",
      inputType: "text"
    }
  ]
};

export const formThree = {
  submit: "Submit third form",
  fields: [
    {
      name: "firstName",
      label: "First Name",
      inputType: "text"
    },
    {
      name: "lastName",
      label: "Last Name",
      inputType: "text"
    },
    {
      name: "number",
      label: "Contact Number",
      inputType: "text"
    },
    {
      name: "cool",
      label: "Are the Lakers the best NBA team?",
      error: "Your answer should be yes",
      inputType: "radio",
      options: ["Yes", "Yes"]
    }
  ]
};

export const formFour = {
  submit: "",
  fields: [
    {
      name: "age",
      label: "Age",
      inputType: "select",
      options: []
    },
    {
      name: "gender",
      label: "Gender",
      inputType: "select",
      option: []
    },
    {
      name: "occupation",
      label: "Occupation",
      inputType: "text"
    },
    {
      name: "purpose",
      label: `I'm here to`,
      inputType: "select",
      options: []
    },
    {
      name: "propertyNum",
      label: "Is iths my 1st property?",
      inputType: "buttonGroup",
      options: []
    },
    {
      name: "plans",
      label: "I plan to buy",
      inputType: "select",
      options: []
    }
  ],
  modal: {
    header: "Help us improve the experience"
  }
};
