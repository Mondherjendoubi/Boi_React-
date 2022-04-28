import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";

function App() {
  return (
    <div className="m-3">
        <Counter title="profil" value={1} image="images/profile.png"/>
        <Counter title="cat" value={2} image="images/cat.png"/>
    </div>
  );
}

export default App;
