import './App.css';
import './css/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import IDNavbar from './components/IDNavbar';
import Belowbar from './components/Belowbar'
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import New from './components/New';
import SliderCorousel from './components/SliderCorousel';
import Footer from './components/Footer';

function App() {
  return (
   <div className='container' style={{paddingTop:'50px'}}>
       <Belowbar />
   <IDNavbar />
 <Home /> 
<Sidebar />
<New />
<SliderCorousel />
<Footer />
    </div>



  );
}

export default App;
