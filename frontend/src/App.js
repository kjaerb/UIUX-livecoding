import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./routes";
import Header from "./components/Header";
import MyTweets from "./routes/mytweets";
import UserTweets from "./routes/usertweets";
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    fetch("http://www.localhost:8080/tweets").then((res) =>
      res.json().then((data) => console.log(data))
    );
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/mytweets' element={<MyTweets />} />
          <Route path='/user/:user' element={<UserTweets />} />
        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
