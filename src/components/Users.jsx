import React, { useEffect, useState } from "react"
import man from "../assets/man.png"
import woman from "../assets/woman.png"
import User from "./User"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers([
      {
        id: 1,
        firstname: "mehdi",
        lastname: "benamar",
        picture: man,
        age: 35,
        genre: "homme",
      },
      {
        id: 2,
        firstname: "Juliette",
        lastname: "petite",
        picture: woman,
        age: 30,
        genre: "femme",
      },
      {
        id: 3,
        firstname: "slimane",
        lastname: "metahri",
        picture: man,
        age: 34,
        genre: "homme",
      },
      {
        id: 4,
        firstname: "carine",
        lastname: "carre",
        picture: woman,
        age: 45,
        genre: "femme",
      },
    ])
  }, [])

  return (
    <div className="w-100 d-flex">
      {users.map((user, key) => {
        return <User user={user} key={key} />
      })}
    </div>
  )
}

export default Users
