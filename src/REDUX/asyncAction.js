//Middle Ware with asynchronous actions with redux-thunk and axios
const redux = require("redux");
const thunkMiddleWare = require("redux-thunk").default;
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCEED = "FETCH_USERS_SUCCEED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const FETCHUSERSREQUEST = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const FETCHUSERSSUCCEED = (users) => {
  return {
    type: FETCH_USERS_SUCCEED,
    payload: users,
  };
};
const FETCHUSERSFAILED = () => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEED:
      return {
        loading: false,
        user: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        user: [],
        error: action.payload,
      };
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(FETCHUSERSREQUEST());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = repsonse.data.map((user) => user.id);
        dispatch(FETCHUSERSSUCCEED(users));
      })
      .catch((error) => {
        dispatch(FETCHUSERSFAILED(error.message));
      });
  };
};
const store = createStore(reducer, applyMiddleware(thunkMiddleWare));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
