import React, { Component } from 'react'
import img1 from '../img/img1.jpg';
import slide1 from '../img/slide1.jpg';
export default class Belowbar extends Component {
    render() {
        return (
            <div>
                   <div className='container' style={{paddingtop:'10px'}}>
     <div className='textTop p-4 bg-info'>
       <h1 style={{color: 'yellow',backgroundColor:'red' }}> carmel </h1>
            </div>
</div>

<div className='container' style={{paddingLeft:'200px'}}>
     <div className='text-left p-4 bg-warning'>
       <h1 style={{color: 'black', backgroundColor:'violet'}}> carmel </h1>
            </div>
</div>
<div className='container' style={{paddingCenter:'50px'}}>
     <div className='text-center p-4 bg-success'>
       <h1 style={{color: 'black', backgroundColor:'white'}}> carmel </h1>
            </div>
</div>
<div className='border' style={{borderBlockStartColor:50}}>
  <h5 style={{color:'blak'}}> </h5>
   </div>
  
   <div>
   <center>
    <img src={img1} style={{width:'200px', borderRadius
    :'50%', borderBottomStyle:'dotted', borderTopStyle:'solid', borderLeftStyle:'double', borderRightStyle:'groove'}}/>
    </center>

   </div>

   <div>
   <center>
    <img src={slide1} style={{width:'400px', borderRadius
    :'50%'}}/>
        </center>

   </div>
            </div>
        )
    }
}


