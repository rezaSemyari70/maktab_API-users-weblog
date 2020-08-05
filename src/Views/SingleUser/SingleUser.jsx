import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Button, Collapse, Card, CardBody, CardHeader} from 'reactstrap';

import './SingleUser.css'

function SingleUser() {

    const [user,
        setUser] = useState({});
    const [pending,
        setPending] = useState(true);
    const {id} = useParams();
    const getUser = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setUser(res.data);
                setPending(false)
                console.log(res.data)
            })
            .catch(err => console.warn(err))
    }

    useEffect(() => {
        getUser();
    }, [])

    const [isOpen,
        setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {pending
                ? <div></div>
                : <Card className="mt-4">

                    <CardHeader >
                        <h3>Information of
                            <span className='ml-2'>{user.name}</span>
                        </h3>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.website}</p>
                            <p>{user.address.street}</p>
                            <div>
                                <Button
                                    color="info"
                                    onClick={toggle}
                                    style={{
                                    marginBottom: '1rem' 
                                }}>About Company</Button>
                                <Collapse isOpen={isOpen}>
                                    <Card>
                                        <CardBody className="bg-info">
                                            <p><span className="font-weight-bold">Company Name :</span> {user.company.name}</p>
                                            <p><span className="font-weight-bold">CatchPhrase :</span> {user.company.catchPhrase}</p>
                                            <p><span className="font-weight-bold">Bs :</span> {user.company.bs}</p>
                                        </CardBody>
                                    </Card>
                                </Collapse>
                            </div>
                        </div>
                    </CardBody>
                </Card>
}
        </div>
    )
}

export default SingleUser
