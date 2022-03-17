import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import CountryDetails from "./pages/CountryDetails";
import PageNotFound from "./pages/PageNotFound";
import SearchCountry from "./pages/SearchCountry";


function App(): JSX.Element {
  return <div className="App">
    <NavigationBar />
   <Routes>
     <Route path="/" element={<SearchCountry />}></Route>
     <Route path="/:name" element={<CountryDetails />} ></Route>
     <Route path="*" element={<PageNotFound />}></Route>
   </Routes>
    </div>;
}

export default App;
