export const formOne = {
  header: [
    {
      p:
        "Can you please help us improve the experience by answering these quick questions about you."
    },
    { h4: "About Me" }
  ],
  sections: [
    {
      groups: [
        {
          name: "age",
          label: "Age",
          inputType: "select",
          options: [
            { label: "Select", value: "" },
            { label: "18-24", value: "" },
            { label: "25-34", value: "" },
            { label: "35-45", value: "" }
          ]
        },
        {
          name: "gender",
          label: "Gender",
          inputType: "select",
          options: [
            { label: "Select", value: "" },
            { label: "Male", value: "" },
            { label: "Female", value: "" }
          ]
        },
        {
          name: "occupation",
          label: "Occupation",
          inputType: "select",
          options: [
            { label: "Select", value: "" },
            { label: "Front End Developer", value: "" },
            { label: "NBA Player", value: "" },
            { label: "Iron Man", value: "" }
          ]
        },
        {
          name: "purpose",
          label: `I'm here to`,
          inputType: "select",
          options: [
            { label: "Select", value: "" },
            { label: "Compare costs", value: "" },
            { label: "Get a loan", value: "" },
            { label: "Buy a house", value: "" }
          ]
        },
        {
          name: "propertyNum",
          label: "Is this my 1st property?",
          inputType: "buttonGroup",
          options: ["Yes", "No"]
        },
        {
          name: "plans",
          label: "I plan to buy",
          inputType: "select",
          options: [
            { label: "Select", value: "" },
            { label: "Not sure yet", value: "" },
            { label: "A mansion", value: "" },
            { label: "An island", value: "" }
          ]
        }
      ]
    }
  ],
  submit: {
    text: "Submit"
  },
  modal: {
    header: "Help us improve the experience"
  }
};

export const formTwo = {
  sections: [
    {
      groups: [
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
    }
  ],
  submit: { text: "Submit" }
};

export const formThree = {
  sections: [
    {
      groups: [
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
    }
  ],
  submit: { text: "Submit" }
};

export const formFour = {
  sections: [
    {
      groups: [
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
    }
  ],
  submit: { text: "Submit" }
};
