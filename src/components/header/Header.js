import React, { Component } from 'react';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { openPopup: false };
    }

    openModal() {
        this.setState({ openPopup: true });
    }

    closeModal() {
        this.setState({ openPopup: false });
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="w3layouts_logo">
                            <Link to="/"><h1>One<span>Movies</span></h1></Link>
                        </div>
                        <div className="w3_search">
                            <form action="#" method="post">
                                <input type="text" name="Search" placeholder="Search" required="" />
                                <input type="submit" value="Go" />
                            </form>
                        </div>
                        <div className="w3l_sign_in_register">
                            <ul>
                                <li><i className="fa fa-phone" aria-hidden="true"></i> (+000) 123 345 653</li>
                                <li><a href="#" data-toggle="modal" data-target="#myModal" onClick={this.openModal.bind(this)}>Login</a></li>
                            </ul>

                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
                <LoginModal openPopup={this.state.openPopup} closePopup={this.closeModal.bind(this)} />
            </div>
        );
    }
}
export default Header;