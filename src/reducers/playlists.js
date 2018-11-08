const initialState = ['Smells  like spirit', 'Love yoyu']

export default function playlist(state = initialState, action) {
    if(action.type === 'ADD_PLAYLISTS') {
        return [...state, action.payload]
        
    }
    if(action.type === 'DELETE_PLAYLISTS') {
        return state;
    }
    return state;
}