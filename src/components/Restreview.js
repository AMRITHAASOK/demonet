
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreview({review}) {
    const [open, setOpen] = useState(false);
    console.log(review);
  return (
    <> <Button variant="dark"
    onClick={() => setOpen(!open)}
    aria-controls="example-collapse-text"
    aria-expanded={open}
  >
    Reviews
  </Button>
  <Collapse in={open}>
    
    <div className='my-3' id="example-collapse-text">
     {
      review.map(item=>(
        <div>
<h5>{item.name}:<span>{item.date}</span></h5>
<p>Rating:{item.rating}</p>
<p>Comments:{item.comments}</p>
        </div>
      ))
     
     }
    </div>
  </Collapse></>
  )
}

export default Restreview