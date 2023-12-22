import React from "react"

function User({ user }) {
  return (
    <div
      className="border border-dark d-flex flex-column align-items-center justify-content-center"
      style={{ width: "200px", height: "300px" }}
    >
      <img src={user.picture} alt="" />
      <div className="d-flex gap-1">
        <p>{user.firstname}</p>
        <p>{user.lastname}</p>
      </div>
      <p>Age: {user.age}</p>
      <p>Genre: {user.genre}</p>
    </div>
  )
}

export default User
