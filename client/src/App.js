import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components";
import { Login, ApplicationPage, Error } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="posts"
          element={
            <PrivateRoute>
              <ApplicationPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
