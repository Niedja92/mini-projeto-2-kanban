import { ToastContainer } from "react-toastify";
import Router from "./routes";
import GlobalStyle from "./styles/global";

import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router />
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}

export default App
