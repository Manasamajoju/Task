import React from 'react';
import  "./header.css";

import {Container, Row, Col, Button} from 'react-bootstrap';

function Theme() {

  return (

    <div className="Theme">

     <Container className='container'>

       <header><h6>All Post</h6></header>

       <Row>

         <Col className='col' sm={3}>

           <h6>User List</h6>

           </Col>

         <Col className='col1' sm={9}>

           <div className='button'>

           <Button variant="outline-primary">ID-2020</Button>{' '}

           <Button variant="outline-primary">ID-2021</Button>{' '}

           <Button variant="outline-primary">ID-2022</Button>{' '}

           <Button variant="outline-primary">ID-2023</Button>{' '}

           </div>
           <div className='button1'>

<Button variant="outline-primary">ID-2024</Button>{' '}

<Button variant="outline-primary">ID-2025</Button>{' '}

<Button variant="outline-primary">ID-2026</Button>{' '}

<Button variant="outline-primary">ID-2027</Button>{' '}

</div>

<div className='button2'>

<Button variant="outline-primary">ID-2028</Button>{' '}

<Button variant="outline-primary">ID-2029</Button>{' '}

<Button variant="outline-primary">ID-2030</Button>{' '}

<Button variant="outline-primary">ID-2031</Button>{' '}

</div>
<div className='button2'>

           <Button variant="outline-primary">ID-2032</Button>{' '}

           <Button variant="outline-primary">ID-2033</Button>{' '}

           <Button variant="outline-primary">ID-2034</Button>{' '}

           <Button variant="outline-primary">ID-2035</Button>{' '}

           </div>

         </Col>

       </Row>

     </Container>

    </div>

  );

}



export default Theme;
