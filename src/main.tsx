// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { myApi } from "./redux/api.ts";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ApiProvider api={myApi}>
//       <App />
//     </ApiProvider>
//   </React.StrictMode>
// );


// USING REDUX --->

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
