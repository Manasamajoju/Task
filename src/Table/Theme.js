import React, { Component } from 'react';
import "./header.css" ;
import {Row, Col, Button, Container} from 'react-bootstrap';
class Theme extends Component {
  render() {
    return (
            <div className="Theme">
               <div><header><h6> All Posts</h6></header>
               </div>
                 <Row>
                     <Container>
                        <Col className='user' sm={3}>
                           <h5>User-List</h5>
                           <div>
                             <center>
                                <Button className='buts'><a href="/Userlist">User-ID</a></Button><br />
                                <Button className='buts'><a href="/Person1">Dhanpathi Malik</a></Button><br />
                                <Button className='buts'><a href="/Person2">Prof. Esha Butt</a></Button><br />
                                <Button className='buts'><a href="/Person3">Chandran Aroras</a></Button><br />
                                <Button className='buts'><a href="/Person4">DakshayaniAgarwal</a></Button><br />
                                <Button className='buts'><a href="/Person5">Preity Ganaka</a></Button><br />
                                <Button className='buts'><a href="/Person6">Akshaj Bharadwaj</a></Button><br />
                             </center>
                           </div>
                        </Col>
                        <Col className='user1' sm={9}>
                          <div className='head'>
                            <h4>Posts</h4>
                          </div>
                          <div className='button'>
                            <Button  className='buts'><a href="/Userdetail1">ID-3780</a></Button>{' '}
                            <Button  className='buts'><a href="/Userdetail2">ID-3781</a></Button>{' '}
                            <Button  className='buts'><a href="/Userdetail3">ID-3782</a></Button>{' '}
                            <Button  className='buts'><a href="Userdetail4">ID-3783</a></Button>{' '}
                          </div>
                          <div className='button1'>
                            <Button  className='buts'><a href="/Ratione">ID-3785</a></Button>{' '}
                            <Button  className='buts'><a href="/Ullam">ID-3786</a></Button>{' '}
                            <Button  className='buts'><a href="/Tenuis">ID-3787</a></Button>{' '}
                            <Button  className='buts'><a href="/page">ID-3779</a></Button>{' '}
                          </div>
                          <div className='button2'>
                            <Button  className='buts'><a href="/Ratione">ID-3778</a></Button>{' '}
                            <Button  className='buts'><a href="/Tenuis">ID-3779</a></Button>{' '}
                            <Button  className='buts'><a href="/Ullam">ID-3776</a></Button>{' '}
                            <Button  className='buts'><a href="/Ratione">ID-3777</a></Button>{' '}
                            </div>
                          <div className='button2'>
                            <Button  className='buts'><a href="/Tenuis">ID-3600</a></Button>{' '}
                            <Button  className='buts'><a href="/Ratione">ID-3601</a></Button>{' '}
                            <Button  className='buts'><a href="/Ullam">ID-3602</a></Button>{' '}
                            <Button  className='buts'><a href="/Ratione">ID-3603</a></Button>{' '}
                          </div>
                        </Col> 
                     </Container>
                   </Row> 
            </div>
           );
  }
}
   
export default Theme