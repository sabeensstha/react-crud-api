import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbarrr from './Navbar';
import Footer from './Footer';

// import { db } from '../firebas-config';
// import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration

export default function Create() {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = (e) => {
        e.preventDefault();
        axios.post(`https://62da3c449eedb6996369254e.mockapi.io/student/v1/students`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/read')
        })

        toast.success("Student Created");


    }

    // const usersCollection = collection(db, "student")

    // const createStudent = async () => {
    //     await addDoc(usersCollection, { firstName: firstName, lastName: lastName, checkbox: checkbox })
    // }
    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollection);
    //         console.log(data);
    //     }
    //     getUsers();
    // })

    return (
        <div >
            <Navbarrr />
            <Form className="create-form" style={{paddingLeft:"500px"}}>
                <p style={{paddingLeft:"70px"}}>First Name</p>
                <input onChange={(e) => { setFirstName(e.target.value) }} placeholder='First Name' />
                <p style={{paddingLeft:"70px"}}>Last Name</p>
                <input
                    onChange={(e) => { setLastName(e.target.value) }}
                    placeholder='Last Name' />
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} /><p>I agree to the Terms and Conditions</p>

                <Button onClick={postData} type='submit'>Submit</Button>
                <ToastContainer />
            </Form>
            
            <Footer />
        </div>
    )
}