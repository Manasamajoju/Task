import React from 'react';
import  "./header.css";

import {Container, Row, Col, Button} from 'react-bootstrap';


function Theme() {

  return (

    <div className="Theme">

     <Container className='container'>
       
         <div className='button'>
           <Button variant="outline-primary"><a href="/Post">All-Post</a></Button>
           </div>
        
            

       <Row>

         <Col className='col' sm={3}>

           <div className='button'>
           <Button variant="outline-primary"><a href="/User">User-ID</a></Button>{' '}
           </div>

           </Col>

         <Col className='col1' sm={9}>

         <div className='button'>

<Button variant="outline-primary"><a href="/Post1">ID-2020</a></Button>{' '}

<Button variant="outline-primary"><a href="/Post2">ID-2025</a></Button>{' '}

<Button variant="outline-primary"><a href="/Post3">ID-2028</a></Button>{' '}

<Button variant="outline-primary"><a href="/Post4">ID-2023</a></Button>{' '}

</div>


<div className='button2'>

<Button variant="outline-primary"><a href="/Post1">ID-2028</a></Button>{' '}

<Button variant="outline-primary"><a href="/Post2">ID-2029</a></Button>{' '}

<Button variant="outline-primary"><a href="/Post3">ID-2030</a></Button>{' '}

<Button variant="outline-primary"><a href="/Post4">ID-2031</a></Button>{' '}

</div>
<div className='button2'>

           <Button variant="outline-primary"><a href="/Post1">ID-2032</a></Button>{' '}

           <Button variant="outline-primary"><a href="/Post2">ID-2033</a></Button>{' '}

           <Button variant="outline-primary"><a href="/Post3">ID-2034</a></Button>{' '}

           <Button variant="outline-primary"><a href="/Post4">ID-2035</a></Button>{' '}

           </div>

         </Col>

       </Row>

     </Container>

    </div>

  );

}



export default Theme;
