import React from 'react';

class GoogleAuth extends React.Component{
    state = { isSignedIn: null };

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '172960852300-0m8ocb0rgs55isarnsvqq8o7thvc5iv3.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();;
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
        });
    }

    renderAuth = () => {
        if(this.state.isSignedIn === null) {
            return <div>I dont know</div>;
        } else if(this.state.isSignedIn){
            return <div>signed in</div>
        } else{
            return <div>Not signed in</div>
        }
    }

    render(){
        return <div>{this.renderAuth()}</div>
    }
};

export default GoogleAuth;