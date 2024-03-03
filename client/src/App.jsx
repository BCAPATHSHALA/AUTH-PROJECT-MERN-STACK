import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header.jsx";
import Home from "./components/Home/Home";
import Footer from "./components/Layout/Footer/Footer.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import ForgetPassword from "./components/Auth/ForgetPassword.jsx";
import ResetPassword from "./components/Auth/ResetPassword.jsx";
import Profile from "./components/Profile/Profile.jsx";
import ChangePassword from "./components/Profile/ChangePassword.jsx";
import UpdateProfile from "./components/Profile/UpdateProfile.jsx";
import { ProtectedRoute } from "protected-route-react";
import NotFound from "./components/Layout/NotFound/NotFound";
import { loadUser } from "./redux/actions/user";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { clearError, clearMessage } from "./redux/reducers/userReducer.js";

const App = () => {
  const { isAuthenticated, user, message, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect={"/profile"}
              >
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect={"/profile"}
              >
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgetpassword"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <ForgetPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/resetpassword/:token"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/profile"
              >
                <ResetPassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/changepassword"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ChangePassword />
              </ProtectedRoute>
            }
          />
          <Route
            path="/updateprofile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <UpdateProfile user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
};

export default App;
