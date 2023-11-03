import React, { Component } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div className="card bg-dark text-light" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.body}.</p>
                    <a href="#" className="btn btn-primary">Follow</a>
                </div>
            </div>
        )
    }
}

export default Card