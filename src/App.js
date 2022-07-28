//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
//let name="Keerthana";
function App() {
  return (
    <>
  
<Navbar title="Textutils" aboutText="about"/>
<div className="container my-3">
  
<TextForm heading="Enter the text to analyse below"/>
</div>

    </>
  );
}

export default App;
