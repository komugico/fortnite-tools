import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';

import TableBlock from '../blocks/TableBlock';

class ListModule extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_click_button() {
        this.props.act_get_quests();
    }

    render() {
        return (
            <Card>
                <Card.Header><b>Quests</b></Card.Header>
                <Card.Body>
                    <Button
                        onClick={() => this.handle_click_button()}
                        variant="outline-success"
                        size="sm"
                        block
                    >
                        UPDATE
                    </Button>
                    <hr />
                    {this.props.quests.length > 0 &&
                        <TableBlock
                            quests={this.props.quests}
                            act_choice_quest={this.props.act_choice_quest}
                        />
                    }
                </Card.Body>
            </Card>
        );
    }
}

export default ListModule;