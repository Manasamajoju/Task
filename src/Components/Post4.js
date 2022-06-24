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
               id:3647,
               name: The Hon. Udit Gandhi,
               email: udit_the_gandhi_hon@jacobson.co,
               gender: male,
               status: inactive
          </div>

         </Col>

         <Col className='col1' sm={9}>

             <div>

                 <h3>

                     Post title: Textor pectus patrocinor casso varius spoliatio arcesso aggero totam totus cruentus verumtamen temporibus doloremque taceo.

                 </h3>

                  <p>

                      body: "Admoneo cotidie tenuis. Tracto cohibeo surgo. Voluptatibus sol utroque. Utilis solum deficio. Annus quis a. Culpo atrocitas trado. Clam administratio decumbo. Coniecto brevis ascit. Temeritas termes id. Nulla vulticulus curvus. Celo conturbo turbo. Suppono temporibus vulticulus. Uter tenuis adficio. Accusamus contabesco cras. Nobis patruus subvenio. Caelestis tego voluptatem. Testimonium venia sponte. Harum adhuc voluptatibus. Confugo brevis cogito."

                  </p>

             </div>

         </Col>

      </Row>

    </Container>



   </div>



  );



}





export default Ratione;