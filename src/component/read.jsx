import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import Navbarrr from './Navbar';



// import { db } from '../firebas-config';
// import { collection, getDocs } from 'firebase/firestore/lite';

const Read = () => {
    const [student, setStudent] = useState([]);
    // const usersCollection = collection(db, "student")
    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollection);

    //         setStudent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //     };
    //     getUsers();
    // })
    useEffect(() => {
        axios.get(`https://62da3c449eedb6996369254e.mockapi.io/student/v1/students`)
            .then((response) => {
                setStudent(response.data);
            })
    }, [])

    const setData = (student) => {

        let { id, firstName, lastName, checkbox } = student;


        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', JSON.stringify(checkbox))
    }

    const getData = () => {
        axios.get(`https://62da3c449eedb6996369254e.mockapi.io/student/v1/students`)
            .then((response) => {
                setStudent(response.data);
            })
    }
    const onDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://62da3c449eedb6996369254e.mockapi.io/student/v1/students/${id}`)
                    .then(() => {
                        toast.success("Successfully Deleted");
                        getData();
                    });
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });

    }
    return (
        <div>
            <Navbarrr />
            <Table singleLine>
                <Table.Header>
                    <Table.Row>

                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {student.map((students) => {
                        return (
                            <Table.Row key={students.id}>
                                <Table.Cell>{students.firstName}</Table.Cell>
                                <Table.Cell>{students.lastName}</Table.Cell>
                                <Table.Cell>{students.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>

                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button onClick={() => setData(students)} > Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(students.id)}>Delete</Button>
                                </Table.Cell>

                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            <ToastContainer />
        </div >

    )
}

export default Read