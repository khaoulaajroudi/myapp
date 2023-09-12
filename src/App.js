
import './App.css';
import Card from './Components/Cards/Card';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import SignIN from './Components/sign in/SignIN';

function App() {
  return (
    <div className="App">
      <Navbar     />
      {/* <Home   /> */}
      {/* <SignIN /> */}
      <Card />

    </div>
  );
}

export default App;
