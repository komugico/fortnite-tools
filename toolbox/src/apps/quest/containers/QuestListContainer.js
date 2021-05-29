import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import HeaderModule from '../../shared/components/modules/HeaderModule';

import * as actions from '../stores/questlist/actions';
import ListModule from '../components/modules/ListModule';
import MapModule from '../components/modules/MapModule';

class QuestListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.act_init_state();
    }

    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    <Row>
                        <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                            <ListModule
                                user={this.props.user}
                                quests={this.props.quests}
                                act_get_quests={this.props.act_get_quests}
                                act_choice_quest={this.props.act_choice_quest}
                            />
                        </Col>
                        <Col xl={9} lg={9} md={9} sm={12} xs={12}>
                            <MapModule />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(QuestListContainer);