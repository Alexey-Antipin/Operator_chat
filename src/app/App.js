import { Auth } from "../components/auth/Auth";
import { Login } from "../components/formik/Login";
import { Navbar } from "../components/navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Auth />
    </div>
  );
}

export default App;
