import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    <Row>
                        <Col></Col>
                        <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                            <h1>Home</h1>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HomeContainer;