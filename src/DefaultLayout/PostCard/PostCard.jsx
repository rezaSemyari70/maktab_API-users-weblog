import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
} from 'reactstrap';
import {Link} from 'react-router-dom';



function PostCard({user , post}) {
    return (
        <div>
            <Card className="my-2" outline color="primary">
                    {/* <CardHeader>{user ? user.username : post.id}</CardHeader> */}
                <CardBody>
                <CardTitle><i className="fas fa-circle"></i><strong>{post.title}</strong></CardTitle>
                    <CardText>{post.body.substr(0,40)} ...</CardText>
                    <Link to={`/posts/${post.id}`}><Button outline color="primary">More...</Button></Link>
                </CardBody>
                {/* <CardFooter></CardFooter> */}
            </Card>
        </div>
    )
}

export default PostCard
