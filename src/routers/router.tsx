import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import BoardPage from "../pages/BoardPage";
import NotFoundPage from "../pages/NotFoundPage";
import App from "../App";
import { PATH } from "../utils/constants";

const router = createBrowserRouter([
  {
    path: PATH.home,
    element: <App />,
  },
  {
    path: PATH.signIn,
    element: <LoginPage />,
  },
  {
    path: PATH.signUp,
    element: <SignUpPage />,
  },

  {
    path: PATH.board,
    element: <BoardPage />,
  },
  {
    path: "*",
    // eslint-disable-next-line react/jsx-no-undef
    element: <NotFoundPage />,
  },
]);

export default router;