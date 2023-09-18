import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const FooterComponents = () => {
  return (
   <footer>
     <Container style={{backgroundColor: 'gray', color: 'b'}} fluid>
      <Row className='mt-5'>
      <Col  className='text-center py-5'>copyright &copy; Best Online Shop </Col>
    </Row>
    </Container>
   </footer>
  )
}
