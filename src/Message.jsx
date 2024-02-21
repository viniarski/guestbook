import React from 'react';

export default function Message({ message }) {
  // TODO: message del
  const handleDelete = async () => {};

  // TODO: message like
  const handleLike = async () => {};

  return (
    <div className="message-div">
      <h3 className="username">{message.username}</h3>
      <p className="username-message">{message.message}</p>
      <div className="button-div">
        <p className="like-count">Likes: {message.likes}</p>
        <div className="like-button" onClick={handleLike}>
          <button>Like</button>
        </div>
        <div className="del-button" onClick={handleDelete}>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
