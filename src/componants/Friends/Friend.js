import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    const handleClick = (friendId) => {
            const url = `/friend/${friendId}`
            history.push(url);
    }

    const friendStyle = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px',

    }
    return (
        <div  style={friendStyle}>
            <h2>{name} </h2>
            <p>{email} </p>
            {/* <p>  <Link to={`/friend/${id}`}>Learn More: {id}</Link> </p> */}
            <button onClick={()=> handleClick(id)}>Click for More Information</button>
        </div>
    );
};

export default Friend;
