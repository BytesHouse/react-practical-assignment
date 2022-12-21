import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components";
import { Login, ApplicationPage, Error } from "./pages";

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
    </BrowserRouter>
  );
}

export default App;
