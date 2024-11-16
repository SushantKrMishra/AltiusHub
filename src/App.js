import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom";
import { Login, Register } from "./auth";
import { ImageUploader } from "./imageUploader";
import { UserProfile } from "./userProfile";
import { TaskManager } from "./taskManagement";
function App() {
  const isTokenAvailable = localStorage.getItem("loggedInUser");

  return (
    <Router>
      <Routes>
        {!isTokenAvailable && (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
        {isTokenAvailable && (
          <>
            <Route path="/upload" index element={<ImageUploader />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/" element={<TaskManager />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
