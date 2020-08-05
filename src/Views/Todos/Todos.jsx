import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Row , Spinner , Card, CardHeader, CardBody} from 'reactstrap';

function Todos() {

    const [todos,
        setTodos] = useState([]);
    const [pending,
        setPending] = useState(true);

    const getTodos = () => {
        Axios
            .get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                setTodos(res.data);
                setTimeout(() => setPending(false), 600)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div>
            {pending
                ? <div>
                    <Row className="spinners">
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="dark"/>
                        <Spinner className="mx-2  largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="dark"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="dark"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="dark"/>
                        <Spinner className="mx-2 largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="dark"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="dark"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="dark"/>
                        <Spinner className="mx-2 largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="dark"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="dark"/>
                    </Row>
                </div>
                : <div>
                    {todos.map(todo => 
                        <Card className="mt-3" key={todo.id} outline color="dark">
                            <CardHeader className="bg-dark text-warning">User {todo.id}</CardHeader>
                            <CardBody>
                                <span className="font-weight-bold">Subject Todo :</span>
                                <p>{todo.title}</p>
                                {todo.completed
                                    ? <div>
                                            <span className="font-weight-bold">Status :</span>
                                            <p className="text-success">Completed</p>
                                        </div>
                                    : <div>
                                        <span className="font-weight-bold">Status :</span>
                                        <p className="text-danger">Not completed</p>
                                    </div>}
                            </CardBody>
                        </Card>)}
                </div>
}
        </div>
    )
}

export default Todos
