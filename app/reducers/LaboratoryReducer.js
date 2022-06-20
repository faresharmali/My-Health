
const Laboratories = [

];
const giveAccess=(state,action)=>{
    console.log(action)
  return  state.map((doctor)=>({...doctor , hasAccess:doctor.id==action.data.id ? true: doctor.hasAccess}))
}
const removeAccess=(state,action)=>{
    console.log(action)

  return  state.map((doctor)=>({...doctor , hasAccess:doctor.id==action.data.id ? false: doctor.hasAccess}))
}

export default LaboratoryReducer = (state = Laboratories, action) => {
  switch (action.type) {
    case "showFamilies":
      return state;
    case "giveAccess":
      return giveAccess(state,action);
    case "removeAccess":
      return removeAccess(state,action);
    default:
      return state;
  }
};
