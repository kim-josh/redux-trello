import React from 'react';
import {connect} from 'react-redux';

import List from './list';
import AddForm from './add-form';

import {addList} from '../actions';


export class Board extends React.Component {
    constructor(props) {
        super(props);

        this.addList = this.addList.bind(this);
    }

    addList(title) {
        this.props.dispatch(addList(title));
    }

    render() {
        const lists = this.props.lists.map((list, index) =>
            <List key={index} index={index} {...list} />
        );

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <div className="lists">
                    {lists}
                    <AddForm type="list" onAdd={this.addList} />
                </div>
            </div>
        );
    }
}

Board.defaultProps = {
    title: 'Board'
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(Board);

