import React, { useState } from 'react'
import { Card } from 'react-bootstrap';

const Example = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLoginClick =() => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };



    let button;

    if (isLoggedIn) {
        button = <ChangeImg2 onClick={handleLogoutClick} />;
    } else {
        button = <ChangeImg1 onClick={handleLoginClick} />;
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );

}

function ShowImage1(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/20760/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
            <p>text1</p>
        </Card>
    )

}

function ShowImage2(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://images.pexels.com/photos/20771/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
            <p>text2</p>
        </Card>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <ShowImage1 />;
    }
    return <ShowImage2 />;
}

function ChangeImg1(props) {
    return (
        <button onClick={props.onClick}>
            Change Pic1
        </button>
    );
}

function ChangeImg2(props) {
    return (
        <button onClick={props.onClick}>
            Change Pic2
        </button>
    );
}

export default Example;

