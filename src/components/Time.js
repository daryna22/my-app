import React, { Component } from 'react';

export class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(props.newData).getTime(),
        }
    }

    componentDidMount() {
        this.timeTick = setInterval(() => {
            const { time } = this.state
            this.setState( {
                time: time + 1000
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timeTick);
    }

    render() {
        return (
            <span>{new Date (this.state.time).toLocaleDateString()} {new Date (this.state.time).toLocaleTimeString()}</span>

        )
    }

}

