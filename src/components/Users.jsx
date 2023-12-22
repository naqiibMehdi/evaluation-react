import React, { useEffect, useState } from "react"

function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers[
      ({
        id: 1,
        firstname: "mehdi",
        lastname: "benamar",
        picture: "",
        age: 35,
        genre: "homme",
      },
      {
        id: 2,
        firstname: "Juliette",
        lastname: "petite",
        picture: "",
        age: 30,
        genre: "femme",
      },
      {
        id: 3,
        firstname: "slimane",
        lastname: "metahri",
        picture: "",
        age: 34,
        genre: "homme",
      },
      {
        id: 4,
        firstname: "carine",
        lastname: "carre",
        picture: "",
        age: 45,
        genre: "femme",
      })
    ]
  })

  return (
    <>
      <div className="w-100"></div>
    </>
  )
}

export default Users
