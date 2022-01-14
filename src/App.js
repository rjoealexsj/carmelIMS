import './app.css';
import './css/bootstrapp.min.css';
import IDNavbar from './components/home';
import {Col, FormGroup, Input, label, Row} from 'reactstrap';

function App() {
  return (
   <div className='container' style={{paddingtop:'50px'}}>
     <div className='text-center p-4 bg-primary'>
       <h1 style={{color: 'white'}}> Vidyajyoti Jesuit Residence </h1>
            </div>
            <FormGroup style= {{overflow: "visible", paddingtop: '50px'}}>
              <Row style ={{marginBottom: '20px'}}>
                <col xs={3} lg={2}> 
                <label for="username"> Name </label>
                </col>
                <col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Name' value =""/>
                </col>
                <col xs={3} lg={2}>
                <label for="username1"> Name </label>
                </col>
                <col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Name' value =""/>
                </col>
              </Row>

              <Row style={{marginBottom:'20px'}}>
              <col xs={3} lg={2}> 
                <label for="username"> Email </label>
                </col>
                <col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Email' value =""/>
                </col>
                <col xs={3} lg={2}>
                <label for="username1"> Phone Number </label>
                </col>
                <col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Phone Number' value =""/>
                </col>
              </Row>

              <Row style={{marginBottom:'20px'}}>
              <col xs={3} lg={2}> 
                <label for="province"> province </label>
                </col>
                <col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your province' value =""/>
                </col>
                <col xs={3} lg={2}>
                <label for="dob"> Date of Birth </label>
                </col>
                <col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Date of Birth' value =""/>
                </col>
              </Row>

              <Row style={{marginBottom:'20px'}}>
              <col xs={3} lg={2}> 
                <label for="blood"> Blood Group </label>
                </col>
                <col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Blood Group' value =""/>
                </col>
                <col xs={3} lg={2}>
                <label for="roomno"> Room No </label>
                </col>
                <col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Room No' value =""/>
                </col>
                
              </Row>
            </FormGroup>
            <div className= 'text-center'>
              <button className= 'bth' style= {{border:'2px solid blue'}}> Submit </button>
            </div>
  
  
}
    </div>



  );
}

export default App;
