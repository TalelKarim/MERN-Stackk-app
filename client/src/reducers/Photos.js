
export default (photos = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_PHOTO':
            return action.payload;
  
        case 'CREATE_PHOTO':
            return [...photos.data, action.payload];
        
        case 'UPDATE_PHOTO': 
            return photos.map((photo) => photo._id === action.payload._id ? action.payload : photo)    

        case 'DELETE_PHOTO':
            return photos.filter((photo) =>photo._id !== action.payload)    
        default:
            return photos ;
    }
       
  
  }