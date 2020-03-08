import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import data from './User.json';
import SingleUser from './SingleUser';
import { getUsers,logout } from './action';

function Dashboard(props) {
    const { isAuthenticated, allUsers } = props.auth;
    useEffect(() => {
        if (!isAuthenticated) {
            props.history.replace('/login');
        }
        else {
            props.getUsers(data);
        }
    }, [isAuthenticated]);

    return (
        <div className="container">
            <div className="card-custom user-list">
                <div className="headers">
                    <h2>User List</h2>
                    <h2><a href="" onClick={()=>props.logout()} >Logout</a></h2>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>E-Mail</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map(user => <SingleUser key={user.id} user={user} />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { getUsers,logout })(Dashboard);

