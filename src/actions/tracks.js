const mockApiDate = [
    {
        id: 1,
        name: 'Scatman'
    },
    {
        id: 2,
        name: 'Cypress Hill'
    },
    {
        id: 3,
        name: 'Batman'
    },
    {
        id: 4,
        name: 'Eminem'
    },
    {
        id: 5,
        name: 'Groove'
    },
]

export const getTracks = () => dispatch => {
    setTimeout(() => {
    console.log('Will you be?')
    dispatch({  type: 'FETCH_TRACKS_SUCCESS', payload:  mockApiDate })
    }, 2000)
}