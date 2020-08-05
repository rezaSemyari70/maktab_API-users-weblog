import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Table, Card, CardTitle} from 'reactstrap';

import './ListUsers.css';




function ListUsers() {

    const [users,
        setUsers] = useState([]);

    const getData = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data);
                console.log(res.data)
            })
            .catch(err => console.warn(err))
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Card className="bg-light mt-4">
            <CardTitle className="ml-5 my-4 " ><h3>List Of Users</h3></CardTitle>
            <Table size="sm" hover responsive>
                <thead>
                    <tr className="text-left">
                        <th>Name</th>
                        <th>Username</th>
                        <th>WebSite</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => 

                        <tr key={user.id} className="text-left">
                            <td >
                                {user.name}
                            </td>
                            <td>{user.username}</td>
                            <td><a href={`http://${user.website}`} target="blank">{user.website}</a></td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </Card>
        </div>
    )
}

export default ListUsers
