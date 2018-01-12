import React from 'react';
import UserInfo from './UserInfo.jsx';
import Header from './Header.jsx';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <UserInfo />
            </div>
        )
    }
}
