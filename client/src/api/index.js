import axios from 'axios';



/// card 
const url = 'http://localhost:5000/cards';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
    axios.post(url, newPost) 
} 
export const updatePost = (id, updatedPost) => {
    axios.patch(`${url}/${id}`, updatedPost);
}

export const deletePost = (id) => axios.delete(`${url}/${id}`);

/// photos
const photoUrl = 'http://localhost:5000/upload'
export const fetchPhotos =  () => axios.get(photoUrl)

export const createPhoto = (newPhoto) => {
    axios.post(photoUrl, newPhoto)
}

export const updatePhoto = (id, updatedPhoto) => {
    axios.patch(`${photoUrl}/${id}`, updatedPhoto)
}

export const deletePhoto = (id) => {
    axios.delete(`${photoUrl}/${id}`)
    .then(() => {console.log("photo deleted successefully")})
    .catch((err) => { console.log(err) })
} 
/// videos 

const videoUrl = 'http://localhost:5000/upload_video'
export const fetchVideos = () => axios.get(videoUrl);

export const createVideo = (newVideo) => {
    axios.post(videoUrl, newVideo)
}

export const updateVideo = (id, updatedVideo) => {
    axios.patch(`${videoUrl}/${id}`, updatedVideo)
}

export const deleteVideo = (id) => {
    axios.delete(`${videoUrl}/${id}`)
    .then(() => {console.log("deleted successefully")})
    .catch((err) => { console.log(err) })
}