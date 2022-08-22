import axios from 'axios';

const url = 'http://localhost:5000/cards';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
    axios.post(url, newPost) 
    console.log('hello from api')
} 
export const updatePost = (id, updatedPost) => {
    axios.patch(`${url}/${id}`, updatedPost);
}

export const deletePost = (id) => axios.delete(`${url}/${id}`);

