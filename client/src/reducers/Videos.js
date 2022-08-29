
export default (videos = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_VIDEOS':
            return action.payload;
  
        case 'CREATE_VIDEO':
            return [...videos.data, action.payload];
        
        case 'UPDATE_VIDEO': 
            return videos.map((video) => video._id === action.payload._id ? action.payload : video)

        case 'DELETE_VIDEO':
            return videos.filter((video) =>video._id !== action.payload)    
            
        default:
            return videos ;
    }
       
  
  }