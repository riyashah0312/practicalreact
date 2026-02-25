const initialState = {
  students: [],
  isAuth: false
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case "LOGIN":
      return { ...state, isAuth: true };

    case "LOGOUT":
      return { ...state, isAuth: false };

    case "SET_STUDENTS":
      return { ...state, students: action.payload };

    case "ADD":
      return {
        ...state,
        students: [...state.students, action.payload]
      };

    case "DELETE":
      return {
        ...state,
        students: state.students.filter(
          s => s.id !== action.payload
        )
      };

    case "UPDATE":
      return {
        ...state,
        students: state.students.map(s =>
          s.id === action.payload.id
            ? action.payload
            : s
        )
      };

    default:
      return state;
  }
}

export default reducer;