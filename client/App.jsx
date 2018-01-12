import React from 'react';
import UserInfo from './UserInfo.jsx';
import Header from './Header.jsx';
import Navigator from './Navigator.jsx';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Navigator />
                <Header />
                <UserInfo />
            </div>
        )
    }
}
