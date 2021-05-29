import React from 'react';
import { Table } from 'react-bootstrap';

class TableBlock extends React.Component {
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

    handle_click_tr(questId) {
        this.props.act_choice_quest(questId);
    }

    render() {
        return (
            <Table striped bordered hover size="sm">
                {this.theadQuests()}
                {this.tbodyQuests()}
            </Table>
        );
    }
}

export default TableBlock;