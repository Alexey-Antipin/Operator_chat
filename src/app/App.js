import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "../components/auth/Auth";
import { ForgotPass } from "../components/ForgotPass/ForgotPass";
import { Login } from "../components/formik/Login";
import { Navbar } from "../components/navbar/Navbar";
import { Page } from "../components/Page/Page";
import { NotFound } from "../components/pagenotFound/NotFound";
import { UpdatePass } from "../components/UpdatePass/UpdatePass";
import "./App.scss";

function App() {

  const Account = useSelector((state) => state.reducer)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/UpdatePass" element={<UpdatePass />} />
          {
            Account.hasAccount ?
              <Route path="/" element={<Page />} />
              :
              <Route path="/" element={<Navigate to="/Auth" replace />} />
          }
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
