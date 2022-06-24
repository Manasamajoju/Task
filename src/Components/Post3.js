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
              id: 3648,
               name: Gatik Somayaji,
               email: gatik_somayaji@johnson-kulas.biz,
              gender: female,
              status: active
          </div>

         </Col>

         <Col className='col1' sm={9}>

             <div>

                 <h3>

                     Post title: Conculco adfero socius umbra celer acies solitudo super consectetur et unus victoria antea sollers vulgus color illo doloremque cui.

                 </h3>

                  <p>

                      body: "Compello pecco tondeo. Omnis odit iure. Caecus angustus synagoga. Enim clarus ipsam. Stips voluntarius hic. Sursum ducimus xiphias. Nisi verbera creptio. Attollo vergo id. Curto titulus dolor. Rem sub arto. Apparatus talis neque. Civis desparatus audeo. Uterque delego aeneus. Defungo textus perspiciatis. Arto conduco acidus. Strues tabernus dedecor. Eum compono verecundia. Acsi illo vacuus. Accusamus totidem patrocinor."

                  </p>

             </div>

         </Col>

      </Row>

    </Container>



   </div>



  );



}





export default Ratione;