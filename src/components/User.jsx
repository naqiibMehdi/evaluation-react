import React from "react"

function User({ user }) {
  return (
    <div>
      <img src={user.picture} alt="" />
      <div>
        <p>{user.firstname}</p>
        <p>{user.lastname}</p>
      </div>
      <p>Age: {user.age}</p>
      <p>Genre: {user.genre}</p>
    </div>
  )
}

export default User
