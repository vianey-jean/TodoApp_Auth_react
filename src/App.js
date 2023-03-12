import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from './composant/Navbar'
import SignUpModal from "./composant/SignUpModal";
import SignInModal from "./composant/SignInModal"
import Private from "./pages/Private/Private"
import Tasks from "./pages/Tasks";

function App() {
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/todo" element={<Tasks />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
