import Doctor1 from "../../assets/Doctor1.png";

const Records = [
  {
    id: "1",
    name: "Ahmed",
    phone: "0660818412",
    Speciality: "Cardiologist - Bouira",
    pic: Doctor1,
    hasAccess: false,
    date: "03/03/2022",

  },
  {
    id: "2",
    name: "Farida",
    phone: "0555987897",
    Speciality: "psychiatrist - Bejaia",
    pic: Doctor1,
    hasAccess: false,
    date: "04/04/2022",

  },
  {
    id: "3",
    name: "Asmahan",
    phone: "0770968546",
    Speciality: "Dermatologist - Algiers",
    pic: Doctor1,
    hasAccess: false,
    date: "08/05/2022",

  },
  {
    id: "4",
    name: "Islam",
    phone: "0625159789",
    Speciality: "Gastroenterologist - Adrar",
    pic: Doctor1,
    hasAccess: false,
    date: "02/09/2022",

  },

];

export default RecordsReducer = (state = Records, action) => {
  switch (action.type) {
    case "showFamilies":
      return state;
    default:
      return state;
  }
};
