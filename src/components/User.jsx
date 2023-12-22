import React from "react"

function User({ user, setDisplayEditUser, getCurrentUser }) {
  return (
    <div
      className="border border-dark d-flex flex-column align-items-center justify-content-center"
      style={{ width: "200px", height: "300px", cursor: "pointer" }}
      onClick={() => {
        getCurrentUser(user.id)
        setDisplayEditUser(true)
      }}
    >
      <img src={user.picture} alt="" />
      <div className="d-flex gap-1">
        <p className="text-capitalize">{user.firstname}</p>
        <p className="text-uppercase">{user.lastname}</p>
      </div>
      <p>Age: {user.age}</p>
      <p>Genre: {user.genre}</p>
    </div>
  )
}

export default User
