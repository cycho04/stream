import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '172960852300-d1iepttm2k8vuvbjbki9k6b31u8c713b.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }

    render(){
        return <div>Google Auth</div>
    }
};

export default GoogleAuth;