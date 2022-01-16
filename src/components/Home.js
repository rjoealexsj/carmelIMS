import React, { Component } from 'react'
import {Col, FormGroup, Input, Label, Row, ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem,} from 'reactstrap';
export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='text-center p-4 bg-primary'>
       <h1 style={{color: 'yellow'}}>  Application for Jesuit Residence  </h1>
            </div>
            <FormGroup style= {{overflow: "visible", paddingTop:'50px'}}>
              <Row style ={{marginBottom:'20px'}}>
                <Col xs={3} lg={2}> 
                <label for="username"> Name </label>
                </Col>
              
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Name' value =""/>
                </Col>
                <Col xs={3} lg={2}>
                <label for="username1"> Sur Name </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Name' value =""/>
                </Col>
              </Row>

              <Row style={{marginBottom:'20px'}}>
              <Col xs={3} lg={2}> 
                <label for="username"> Email </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Email' value =""/>
                </Col>
                <Col xs={3} lg={2}>
                <label for="username1"> Phone Number </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Phone Number' value =""/>
                </Col>
              </Row>

              <Row style={{marginBottom:'20px'}}>
              <Col xs={3} lg={2}> 
                <label for="province"> congregation/Diocese </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your congregation/diocese' value =""/>
                </Col>
                <Col xs={3} lg={2}>
                <label for="dob"> Date of Birth </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Date of Birth' value =""/>
                </Col>
              </Row>

              <Row style={{marginBottom:'20px'}}>
              <Col xs={3} lg={2}> 
                <label for="blood"> Blood Group </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Blood Group' value =""/>
                </Col>
                <Col xs={3} lg={2}>
                <label for="Degre"> B.Th/M.Th </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Degree' value =""/>
                </Col>
                
              </Row>
              <Row style={{marginBottom:'20px'}}>
              <Col xs={3} lg={2}> 
                <label for="Choice"> Your Choice </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= '1/2/3 Floor' value =""/>
                
                </Col>
               </Row>

            </FormGroup>
            <div className= 'text-center'>
              <button className= 'bth' style= {{border:'2px solid blue'}}> Submit </button>
            </div>
            
            </div>
        )
    }
}
