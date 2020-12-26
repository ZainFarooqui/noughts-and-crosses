import React from 'react';

class Square extends React.Component{
    render() {
        return <button onClick={this.props.clickEvent}> {this.props.value}</button>;
    }
}

export default Square