import * as api from '../api/index.js';


export const getVideos = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchVideos();
    dispatch({ type: "FETCH_ALL_VIDEOS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createVideo = (video) => async (dispatch) => {
  try {
    const { data } =  await api.createVideo(video);
    dispatch({ type: "CREATE_VIDEO", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updateVideo = (id, video) => async(dispatch) => {
  try{
      const  {data} =  await api.updatePhoto(id,video);
      dispatch({type: 'UPDATE_VIDEO', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deleteVideo = (id) => async (dispatch) => {
  try{
        await api.deleteVideo(id);

        dispatch({type:'DELETE_VIDEO', payload:id})
  }

  catch(error){
     console.log(error);
  }
}