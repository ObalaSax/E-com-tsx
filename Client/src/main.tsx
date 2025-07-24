import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { myApi } from "./Features/Redux/myApi.ts";
import { Provider } from "react-redux";
import { myStore } from "./Features/Redux/myStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={myApi}>
      <Provider store={myStore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);
