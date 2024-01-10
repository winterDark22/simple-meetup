import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavouritesPage from "./pages/Favourite";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favourite" element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
