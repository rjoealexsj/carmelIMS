import React, { Component } from 'react'
import {boderSolid} from 'reactstrap';
export default class Belowbar extends Component {
    render() {
        return (
            <div>
                   <div className='container' style={{paddingtop:'10px'}}>
     <div className='textTop p-4 bg-primary'>
       <h1 style={{color: 'yellow', }}> carmel </h1>
            </div>
</div>

<div className='container' style={{paddingLeft:'200px'}}>
     <div className='text-left p-4 bg-primary'>
       <h1 style={{color: 'red', backgroundColor:'yellow'}}> carmel </h1>
            </div>
</div>
<div className='container' style={{paddingCenter:'50px'}}>
     <div className='text-center p-4 bg-primary'>
       <h1 style={{color: 'black', backgroundColor:'white'}}> carmel </h1>
            </div>
</div>
<div className='border' style={{borderBlockStartColor:50}}>
  <h5 style={{color:'blak'}}> </h5>
   </div>
            </div>
        )
    }
}


