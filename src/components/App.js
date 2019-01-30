import React from 'react'
import Cell from "./Cell";

class App extends React.Component {

    state = {
        field: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        player: 'X'
    };

    onClickHandler = (index) => {
        const {field, player} = this.state;
        if (field[index] === ' ') {
            field[index] = player;
            const newPlayer = player === 'X' ? 'Y' : 'X';
            this.setState({
                field: field,
                player: newPlayer
            })
        }

    };

    render() {

        const field = this.state.field.map((field, index) => {
            return <Cell key={index}
                         field={this.state.field}
                         player={this.state.player}
                         index={index}
                         onClickHandler={this.onClickHandler}
            />
        });

        return (
            <div>
                {field}
            </div>
        );
    }
}

export default App