import React from 'react';

import  "./header.css";

import {Container, Row, Col} from 'react-bootstrap';



function Ratione() {

  return (

    <div className="Theme">

    <Container className='container'>

      <header><h6>Posts</h6></header>

      <Row>

        <Col className='col' sm={3}>

          <h6>User List</h6>
          <div>
             id: 3650,
             name: Rajinder Malik,
             email: rajinder_malik@jacobson-bayer.info,
             gender: male,
             status: inactive
          </div>

         </Col>

         <Col className='col1' sm={9}>

             <div>

                 <h3>

                     Post title: Ratione verumtamen suasoria advoco suscipit timidus volup ver et nulla clementia atrocitas"

                 </h3>

                  <p>

                      body: Capio sum confero. Reiciendis amoveo vulariter. Attero capitulus adinventitias. Defetiscor sustineo eos. Fugit aeternus atrocitas. Nulla qui conspergo. Vero cognatus decet. Blandior suspendo vindico. Audacia comburo assumenda. Autem centum claustrum. Solio aegrus cetera. Desino alter culpo. Tener cupiditate inflammatio. Dolor inflammatio coruscus. Deficio occaecati taedium. Succedo magnam acsi. Est vis speculum. Textilis tamdiu aureus. Aestus ratione tenuis.

                  </p>

             </div>

         </Col>

      </Row>

    </Container>



   </div>



  );



}





export default Ratione;