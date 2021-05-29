import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';

class ListModule extends React.Component {
    constructor(props) {
        super(props);
    }

    theadQuests() {
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                </tr>
            </thead>
        );
    }

    tbodyQuests() {
        let trs = this.props.quests.map((row) => {
            return this.trQuests(row);
        });
        return (
            <tbody>
                {trs}
            </tbody>
        );
    }

    trQuests(row) {
        return (
            <tr onClick={() => this.handle_click_tr(row.id)}>
                <td>{ row.id }</td>
                <td>{ row.title }</td>
            </tr>
        )
    }

    handle_click_button() {
        this.props.act_get_quests();
    }

    handle_click_tr(questId) {
        this.props.act_choice_quest(questId);
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
                        <Table striped bordered hover size="sm">
                            {this.theadQuests()}
                            {this.tbodyQuests()}
                        </Table>
                    }
                </Card.Body>
            </Card>
        );
    }
}

export default ListModule;