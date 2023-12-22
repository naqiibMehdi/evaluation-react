import React, { useEffect, useState } from "react"
import man from "../assets/man.png"
import woman from "../assets/woman.png"
import User from "./User"
import FormAddUser from "./FormAddUser"
import { v4 as uuidv4 } from "uuid"

function Users() {
  const [users, setUsers] = useState([])
  const [displayFormAddUser, setDisplayFormAddUser] = useState(false)

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

  const validateUser = (user) => {
    setUsers([
      ...users,
      { id: uuidv4(), picture: user.genre === "homme" ? man : woman, ...user },
    ])
  }
  return (
    <>
      {displayFormAddUser && (
        <FormAddUser
          setDisplayFormAddUser={setDisplayFormAddUser}
          validateUser={validateUser}
        />
      )}
      <h1 className="text-center my-5">Liste des utilisateurs</h1>
      <div className="row w-25 mx-auto mb-5">
        <button
          className="btn btn-primary"
          onClick={() => setDisplayFormAddUser(true)}
        >
          Ajouter un utilisateur
        </button>
      </div>
      <div className="d-flex justify-content-center gap-5 flex-wrap">
        {users.map((user, key) => {
          return <User user={user} key={key} />
        })}
      </div>
    </>
  )
}

export default Users
