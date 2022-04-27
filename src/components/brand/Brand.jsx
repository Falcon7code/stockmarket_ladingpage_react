import React from 'react';
import './brand.css';
import { dubai, cola, salon, doordash, paypal} from './import';


const Brand = () => {
  return (

    <div className='gpt_brand section-padding'>
      <div>
        <img src={dubai} alt="dubai" />
      </div>
      <div>
        <img src={doordash} alt="doordash" />
      </div>
      <div>
        <img src={cola} alt="cola" />
      </div>
      <div>
        <img src={salon} alt="salon" />
      </div>
      <div>
        <img src={paypal} alt="paypal" />
      </div>
    </div>
  )
  
}

export default Brand