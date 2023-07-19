const initialState = {
  IsLoggedIn: sessionStorage.getItem("teamid") !== null,
  Teamname:
    sessionStorage.getItem("teamname") === null
      ? ""
      : sessionStorage.getItem("teamname"),
  Role:
    sessionStorage.getItem("role") === null
      ? ""
      : sessionStorage.getItem("role"),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "IsLoggedIn":
      return {
        ...state,
        IsLoggedIn: true,
        Teamname: sessionStorage.getItem("teamname"),
        Role: sessionStorage.getItem("role"),
      };
    case "LogOut":
      sessionStorage.clear();
      return { ...state, IsLoggedIn: false, Teamname: "", Role: "" };
    default:
      return state;
  }
};

export default reducer;
