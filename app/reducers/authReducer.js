
const LoggedUser = {}

export default AuthReducer = (state = LoggedUser, action) => {
  switch (action.type) {
    case "getLoggedUser":
      return state;
    case "updateLoggedUser":
      return {...action.data};
    default:
      return state;
  }
};
