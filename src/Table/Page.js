import React, { Component } from 'react';
import "./header.css" ;
import {Row, Col, Button, Container} from 'react-bootstrap';
class Page extends Component {
  render() {
    return (
            <div className="Theme">
               <div><header><h6></h6></header>
               </div>
                 <Row>
                     <Container>
                        <Col className='user' sm={3}>
                           <h5>User-List</h5>
                           <div className='p1'>
                             <center>
                             id: 3650<br />
                              name: Rajinder Malik<br />
                              email: rajinder_malik@jacobson-bayer.info<br />
                              gender: male<br />
                              status: inactive
                             </center>
                           </div>
                        </Col>
                        <Col className='user1' sm={9}>
                          <div className='head'>
                            <h4>Posts</h4>
                          </div>
                          <div className='p1'>
                            <h3>
                               Post title: Tenuis ustilo celebrer vel claudeo curiositas modi."
                             </h3>
                             <p>
                               body: At demum cubicularis. Utor calcar bellicus. Confugo thymbra decimus. Tutis aspicio commemoro. Quisquam adopto demoror. Compello textilis trans. Quis adflicto vinum. Canonicus crustulum depereo. Aut appositus solum. Utilis uberrime terminatio. Crux credo strues. Ultra tero accusamus. Agnitio cultura atrox. Arbor iure considero. Venio adaugeo deputo.
                             </p>
                          </div>
                        </Col> 
                     </Container>
                   </Row> 
            </div>
           );
  }
}
   
export default Page
