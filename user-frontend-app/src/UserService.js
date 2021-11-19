const USERS_REST_API = 'http://localhost:8080/store-app/users/all';
class UserService {    
    getUsers(){
        return fetch(USERS_REST_API,{ 
            method: 'get',
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
                'credentials': 'same-origin'
        })
        .then(res => res.json());        
    }

}
export default new UserService();
