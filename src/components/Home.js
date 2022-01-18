import React, { Component } from 'react'
import {Col, FormGroup, Input, Label, Row, ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem,} from 'reactstrap';
import New from './New';
export default class Home extends Component {
    render() {
        return (
            <div>
            
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
                <label for="Address"> Permanent Adresss </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Your Permanant Address' value =""/>
                </Col>
                <Col xs={3} lg={2}>
                <label for="Contact Number"> Contact Number </label>
                </Col>
                <Col xs={9} lg={4}>
                <input type= "text" placeholder= 'Enter Contact Number' value =""/>
                </Col>
                
              </Row>
              <Row style={{marginBottom:'20px'}}>
              <Col xs={3} lg={2}> 
                <label for="Choice"> Preference </label>
                </Col>
                
                <Col xs={3} lg={2}>
            <Input
      id="exampleSelect"
      name="select"
      type="select"
    >
      <option>
        First Floor
      </option>
      <option>
        Second Floor
      </option>
      <option>
        Third Floor
      </option>
     
    </Input>

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
