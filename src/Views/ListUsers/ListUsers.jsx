import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Table, Card, CardTitle, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Spinner} from 'reactstrap';
import './ListUsers.css';




function ListUsers(props) {

    const [users, setUsers] = useState([]);
    const [pending , setPending] = useState(true);

    const getData = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data);
                setTimeout(() => setPending(false) , 900);
                // console.log(res.data)
            })
            .catch(err => console.warn(err))
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {pending 
                ? <div >
                    <Row className="spinners">
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="secondary"/>
                        <Spinner className="mx-2  largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="secondary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="secondary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="secondary"/>
                        <Spinner className="mx-2 largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="secondary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="secondary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="secondary"/>
                        <Spinner className="mx-2 largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="secondary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="secondary"/>
                    </Row>
                   
                </div> :
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
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                            </td>
                            <td>{user.username}</td>
                            <td><a href={`http://${user.website}`} target="blank">{user.website}</a></td>
                        </tr>
                       
                    )}
                </tbody>
            </Table>
            </Card> }
        </div>
    )
}

export default ListUsers
