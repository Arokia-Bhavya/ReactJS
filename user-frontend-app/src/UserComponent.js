import React from 'react'
import UserService from './UserService'

export default class UserComponent extends React.Component {

    constructor(props) {
        super(props)    
        this.state = {
             users: []
        }
    }
    
    componentDidMount(){
        UserService.getUsers().then((data) => {
            this.setState({ users: data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    render() {
        return (
            <div>
                <h2 className="text-center">User Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user =>
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.middleName}</td>
                                        <td>{user.lastLogin}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}