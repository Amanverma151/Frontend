import "./Components/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookList from './Components/FrontPage_BookList';
import CreateBook from "./Components/CreateBook";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/create-book" element={<CreateBook />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
