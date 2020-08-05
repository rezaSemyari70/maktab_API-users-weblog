import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';
import {
    Card,
    Button,
    CardBody,
    CardTitle,
    CardText,
    CardHeader,
    Row,
    Col
} from 'reactstrap';

function PostSingle() {

    const [post,
        setPost] = useState({});
    const [comments,
        setComments] = useState([]);
    const {id} = useParams();
    const getPost = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }
    const getComments = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPost();
        getComments();
    }, [])

    return (
        <div>
            <Card className="mt-5"  color="light">
                <CardBody>
                    <CardTitle>
                        <strong>{post.title}</strong>
                    </CardTitle>
                    <CardText>{post.body}</CardText>
                    <Link to="/posts">
                        <Button outline color="secondary">Back To Posts</Button>
                    </Link>
                </CardBody>

            </Card>
            <Card className="mt-3" color="info">
                        <CardHeader><strong>Comments</strong></CardHeader>
            </Card>
                {comments.map(comment => 
                    <Card className="my-2" outline color="info">
                        <Row>
                            <Col>
                                <div className="m-3">
                                    <p><span className="font-weight-bold">Subject :</span>{comment.name}</p>
                                    <p><span className="font-weight-bold">Email :</span>{comment.name}</p>
                                    <p><span className="font-weight-bold">Text Comment :</span> {comment.body}</p>
                                </div>
                            </Col>
                        
                        </Row>
                    </Card>
                )}
        </div>
    )
}

export default PostSingle
