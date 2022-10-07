import { Route, Routes } from "react-router-dom";
import Cards from "./component/card/Cards";
import Home from "./component/Home";
import News from "./component/Home/News";
import NotFound from "./component/Home/NotFound";
import AppBar from "./component/AppBar/AppBar"
import NewsHome from "./component/Pages/News/NewsHome";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      header: '#ebfbff',
      body: '#fff',
      footer: '#003333',
    },
    mobile: '768px',
  }
  
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
     {/* <Home /> */}
     {/* <Routes>
      <Route path="/news" element={<Cards />} >

      </Route>
    </Routes> */}
     <Routes>
     <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<NewsHome />} />

          <Route path="*" element={<NotFound />} />
        </Route>

    </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
