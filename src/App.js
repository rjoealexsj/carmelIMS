import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IDNavbar from './components/IDNavbar';

import Home from './components/Home';
import Sidebar from './components/Sidebar';

function App() {
  return (
   <div className='container' style={{paddingTop:'50px'}}>
     <IDNavbar />
   <Home />
<Sidebar />



    </div>



  );
}

export default App;
