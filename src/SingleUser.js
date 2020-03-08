import React from 'react';

function SingleUser(props) {
    const { user } = props;
    return (
        <tr>
            {Object.keys(user).map(key => <td key={user.id}>{user[key]}</td>)}
        </tr>
    )
}

export default SingleUser;
