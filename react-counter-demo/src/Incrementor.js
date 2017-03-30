import React, { Component } from 'react';

class Incrementor extends Component {
    handleClick() {
        this.props.callback();
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Click me!</button>
            </div>
        )
    }
}

export default Incrementor;