// import React from "react";
// import "./App.css";
// import ReduxActions from "./Redux_container/Book Actions/ReduxActions";
// import { Provider } from "react-redux";
// import store from "./Redux_container/Book Store/BookStore";
// import BookContainer from "./Redux_container/BookContainer";
// import REDUXTOOLKIT from "./REDUXTOOLKIT";

// function App() {
//   return (
//     // // <Provider store={store}>
//     // //   <div className="App">
//     // //     <BookContainer />
//     // //   </div>
//     // // </Provider>
//     <></>
//   );
// }

// export default App;

import "./App.css";
import CakeView from "./TOOLKIT/features/CAKE/CakeView";
import UserView from "./TOOLKIT/features/users/UserView";
import IceCreamView from "./TOOLKIT/features/ICE CREAM/IceCreamView";

function App() {
  return (
    <div>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
