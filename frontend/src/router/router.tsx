import { HomePage } from "pages/HomePage";
import { PlaylistPage } from "pages/PlaylistPage";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const routes = (isLoggedIn: boolean) => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route
        path="playlist"
        element={
          isLoggedIn ? (
            <PlaylistPage />
          ) : (
            <Navigate replace to="/home" state={{ from: location }} />
          )
        }
      />
      <Route path="" element={<Navigate replace to="/home" />} />
      <Route path="*" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default routes;
