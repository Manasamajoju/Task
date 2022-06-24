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
             id: 3649,
             name: Miss Ekadant Pandey,
             email: pandey_miss_ekadant@torp-halvorson.com,
             gender: female,
             status: active
          </div>

         </Col>

         <Col className='col1' sm={9}>

             <div>

                 <h3>

                     Post title: Turba atrocitas tego trado trepide cinis crastinus quae cena conscendo patrocinor.

                 </h3>

                  <p>

                      body: "Currus antea arceo. Solio aliqua defetiscor. Officiis enim ab. Fugit aut aspicio. Capitulus admiratio aranea. Patrocinor ait cicuta. Dignissimos cui arceo. Inflammatio tum censura. Tenuis amplexus thymum. Blandior vero basium. Ait a despecto. Amissio thorax dedecor. Voveo crustulum arca. Suppono tonsor somniculosus. Eos validus coepi. Vado tepidus thymum. Voluptatibus comparo ultio. Dedecor amor exercitationem. Somnus deserunt beatae. Molestias qui ambitus. Temptatio curo earum."

                  </p>

             </div>

         </Col>

      </Row>

    </Container>



   </div>



  );



}





export default Ratione;