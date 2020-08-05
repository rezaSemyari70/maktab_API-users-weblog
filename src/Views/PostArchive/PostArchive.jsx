import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PostCard from '../../DefaultLayout/PostCard/PostCard';
import { Row, Col } from 'reactstrap';
import { Spinner } from 'reactstrap';
import './PostArchive.css';

function PostArchive({users}) {

    const [posts , setPosts] = useState([]);
    const [pending , setPending] = useState(true);

    const getPosts = () => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data);
                setTimeout(()=> setPending(false) , 700)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div>
            {pending 
                ? <div>
                     <Row className="spinners">
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="primary"/>
                        <Spinner className="mx-2  largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="primary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="primary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="primary"/>
                        <Spinner className="mx-2 largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="primary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="primary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="primary"/>
                        <Spinner className="mx-2 largSpinner" style={{ width: '2rem', height: '2rem' }} type="grow" color="primary"/>
                        <Spinner className="mx-2 mt-2 smallSpinner" style={{ width: '1rem', height: '1rem' }} type="grow" color="primary"/>
                    </Row>
                </div> 
                : <div>
                    {posts.map(post => 
                <Row key={post.id}>
                    <Col>
                        <PostCard  post={post}/>
                    </Col>
                </Row>
            )}
                </div>
            }
        </div>
    )
}

export default PostArchive
