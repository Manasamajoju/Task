import React, { Component } from 'react';
import "./header.css" ;
import {Row, Col, Container, Accordion} from 'react-bootstrap';
class Userdetail1 extends Component {
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
                             {/* id: 3650<br />
                              name: Rajinder Malik<br />
                              email: rajinder_malik@jacobson-bayer.info<br />
                              gender: male<br />
                              status: inactive */}
                             </center>
                           </div>
                        </Col>
                        <Col className='user1' sm={9}>
                          <div className='head'>
                            <h4>Posts</h4>
                          </div>
                          <div className='p1'>
                          <div className='p2'>
                                <Accordion defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                      <Accordion.Header>Comments</Accordion.Header>
                                        <Accordion.Body>
                                        
                                            <p>
                                              
                                            </p>
                        
                                                
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                                </div>
                            {/* <h3>
                               Post title: Dicta utique adficio colligo utrimque tamen dolores acsi brevis
                             </h3>
                             <p>
                               body: Solium quis non. Corrumpo abstergo tabernus. Delectus crinis basium. Usus beneficium centum. Creator acceptus crinis. Aurum accedo inventore. Repudiandae suffragium ars. Cibus vitium blandior. Adamo cometes acquiro. Vivo agnitio arbitro. Desolo convoco ulciscor. Undique depraedor tremo. Adultus confero vesper. Coerceo decerno debeo. Suscipio assentator totus. Caries quam minima. Acsi statim sit. Et tempore vita. Tantillus verus arguo
                             </p> */}
                          </div>
                        </Col> 
                     </Container>
                   </Row> 
            </div>
           );
  }
}
   
export default Userdetail1
