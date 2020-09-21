import React from 'react';
import './style.css';

function User(props) {
  return(
      <>
        <a href={ props.url }>
            <div className="user-wrapper">
                <div className="user-photo-wrapper">
                    <img className="image" src={ props.img } />
                </div>
                <div className="user-info-wrapper">
                    <div className="name">{ props.name }</div>
                    <div className="username">{ props.username }</div>
                </div>
            </div>
        </a>
      </>
  );
}

export default User;