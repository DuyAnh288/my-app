import React, { Component } from 'react';

class LoginModal extends Component {

    constructor(props) {
        super(props);
        this.state = { showLogin: true, showCreate: false };
    }

    onClickMe() {
        this.setState({ showLogin: !this.state.showLogin, showCreate: !this.state.showCreate })
    }

    render() {
        return (
            <div className={`modal video-modal fade ${this.props.openPopup === true ? "in" : ""}`}
                style={{ display: this.props.openPopup === true ? 'block' : "none", paddingRight: 17 }}
                id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            Sign In & Sign Up
                        <button onClick={this.props.closePopup} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        </div>
                        <section>
                            <div className="modal-body">
                                <div className="w3_login_module">
                                    <div className="module form-module">
                                        <div onClick={this.onClickMe.bind(this)} className="toggle"><i className={`fa fa-times ${this.state.showLogin === true ? "fa-pencil" : ""}`}></i>
                                            <div className="tooltip">Click Me</div>
                                        </div>
                                        <div className="form" style={{ display: this.state.showLogin === true ? "block" : "none" }}>
                                            <h3>Login to your account</h3>
                                            <form action="#" method="post">
                                                <input type="text" name="Username" placeholder="Username" required="" />
                                                <input type="password" name="Password" placeholder="Password" required="" />
                                                <input type="submit" value="Login" />
                                            </form>
                                        </div>
                                        <div className="form" style={{ display: this.state.showCreate === true ? "block" : "none" }}>
                                            <h3>Create an account</h3>
                                            <form action="#" method="post">
                                                <input type="text" name="Username" placeholder="Username" required="" />
                                                <input type="password" name="Password" placeholder="Password" required="" />
                                                <input type="email" name="Email" placeholder="Email Address" required="" />
                                                <input type="text" name="Phone" placeholder="Phone Number" required="" />
                                                <input type="submit" value="Register" />
                                            </form>
                                        </div>
                                        <div className="cta"><a href="#">Forgot your password?</a></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginModal;