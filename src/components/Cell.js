import React from 'react'

class Cell extends React.Component {

    state = {
        data: ' '
    };

    submitData = (player, index) => {
        const {onClickHandler} = this.props;
        if (this.state.data === ' ') {
            this.setState({
                data: player
            })
        }
        onClickHandler(index)
    };

    render() {
        const {player, index} = this.props;

        return (
            <div>
                <button onClick={() => this.submitData(player, index)}>
                    {this.state.data}
                </button>
            </div>
        );
    }

}

export default Cell