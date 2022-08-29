import * as api from '../api/index.js';


export const getPhotos = () => async (dispatch) => {
  try {
    const  {data}  = await api.fetchPhotos();
    dispatch({ type: "FETCH_ALL_PHOTO", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const createPhoto = (photo) => async (dispatch) => {
  try {
    const { data } =  await api.createPhoto(photo);
    dispatch({ type: "CREATE_PHOTO", payload: data });
  } catch (error) {
    console.log(error)
  }
};



export const updatePhoto = (id, photo) => async(dispatch) => {
  try{
      const  {data} =  await api.updatePhoto(id,photo);
      dispatch({type: 'UPDATE_PHOTO', payload: data});
  }

  catch(error){
    console.log(error)

  }
}


export const deletePhoto = (id) => async (dispatch) => {
  try{
        await api.deletePhoto(id);

        dispatch({type:'DELETE_PHOTO', payload:id})
  }

  catch(error){
     console.log(error);
  }
}