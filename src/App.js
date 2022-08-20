//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm'
import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';


//let name="Keerthana";
function App() {
  const  [mode,setMode]=useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(3 32 55)';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark Mode";
     //setInterval(()=>{
      //document.title="TextUtils-Amazing Mode";
     //},2000)
     //setInterval(()=>{
      //document.title="Install TextUtils Mode";
     //},1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils-Light Mode";
    }

  }
  return (
    <>
  
<Navbar title="Textutils" aboutText="about" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container my-3">
  {/* <About/> */}
  
{/*<TextForm showAlert={showAlert}heading="Enter the text to analyse below" mode={mode}/>*/ }
 <About/>
</div>

    </>
  );
}

export default App;
