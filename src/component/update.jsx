import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbarrr from './Navbar';


export default function Update() {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(true);
    const [id, setID] = useState(null);
    const updateAPIData = (e) => {
        e.preventDefault();

        axios.put(`https://62da3c449eedb6996369254e.mockapi.io/student/v1/students/${id}`, {
            firstName,
            lastName,
            checkbox
        });
        navigate('/');
    }
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(JSON.parse(localStorage.getItem('Checkbox Value')))
    }, []);

    return (
        <div>
        <Navbarrr />
            <Form className="create-form">
                <Form.Field>
                    <p>First Name</p>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <p>Last Name</p>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
                    <p>I agree to the Terms and Conditions</p>
                </Form.Field>
                <Button onClick={updateAPIData} type='submit'>Update</Button>
            </Form>
        </div>
    )
}