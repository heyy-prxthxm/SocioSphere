import React from "react";
import { BrowserRouter ,Navigate ,Routes ,Route } from "react-router-dom";
import HomePage from "scenes/homePage/index.jsx";
import LoginPage from "scenes/loginPage/index.jsx";
import ProfilePage from "scenes/profilePage/index.jsx";
import { CssBaseline , ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import Navbar from "scenes/navbar";


function App() {

  const mode = useSelector((state)=> state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)) , [mode]);
  const isAuth= Boolean(useSelector((state) => state.token ));
  return (
    <div className="app">
     <BrowserRouter>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={isAuth ?<HomePage /> : <Navigate to="/" />} />
        <Route path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
     </ThemeProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
