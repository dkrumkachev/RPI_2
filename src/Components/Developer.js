import React, {Component} from 'react';

class Developer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: props.src,
            link: props.link,
            mail: props.mail,
            name: props.name
        };
    }

    render() {
        return (
            <div className="d-flex align-items-center">
                <img
                    src={this.state.src}
                    alt="Developer's photo"
                    style={{width: "80px"}}
                    className="rounded-circle"/>
                <div className="ms-4">
                    <p className="fw-bold mb-1">{this.state.name}</p>
                    <p className="mb-0">{this.state.mail}</p>
                    <a style={{textDecoration: "none"}} href={this.state.link}>{this.state.link}</a>
                </div>
            </div>
        );
    }
}

export default Developer;