import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostCard from '../../DefaultLayout/PostCard/PostCard';
import { Row, Col } from 'reactstrap';

function PostArchive({users}) {

    const [posts,
        setPosts] = useState([]);
 

    const getPosts = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            {posts.map(post => 
                <Row key={post.id}>
                    <Col>
                        <PostCard  post={post}/>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default PostArchive
