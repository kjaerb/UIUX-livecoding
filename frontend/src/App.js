import "./App.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./routes";
import MyTweets from "./routes/mytweets";

function App() {
  useEffect(() => {
    fetch("http://www.localhost:8080/tweets").then((res) =>
      res.json().then((data) => console.log(data))
    );
  }, []);

  return (
    <div className='App'>
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/mytweets'>Public</Link>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/mytweets' element={<MyTweets />} />
        </Routes>

        <footer>
          <p>Footer</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
