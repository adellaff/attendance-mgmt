export function getEmployee(){
    return fetch(process.env.REACT_APP_WS_URL + '/employee', {
        method: 'GET'
        
    })
}