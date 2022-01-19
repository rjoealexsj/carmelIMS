import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IDNavbar from './components/IDNavbar';
import Belowbar from './components/Belowbar'
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import New from './components/New';

function App() {
  return (
   <div className='container' style={{paddingTop:'50px'}}>
     <Belowbar />
      {/*<IDNavbar />
 <Home /> 
<Sidebar />*/}

    </div>



  );
}

export default App;
