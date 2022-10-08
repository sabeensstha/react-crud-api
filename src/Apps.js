import "./App.css";
import Create from "./component/create";
import Read from "./component/read";
import Update from "./component/update";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NewHome from "./NewHome";

const myAwesomeArray = [5, 4, 3, 2, 1]

console.log(myAwesomeArray.map(x => x * x ));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
