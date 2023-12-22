import React, { useState } from "react"

function FormEditUser({ setDisplayEditUser, currentUser }) {
  const [addUser, setAddUser] = useState({})

  const handleChangeUser = (e) => {
    const { name, value } = e.target
    setAddUser((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="popup-overlay">
      <div className="w-25">
        <form
          className="bg-white p-3 rounded h-100 d-flex flex-column gap-4"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <p className="fs-2">Ajouter un utilisateur</p>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={addUser.lastname || currentUser.lastname}
              onChange={handleChangeUser}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={addUser.firstname || currentUser.firstname}
              onChange={handleChangeUser}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={addUser.age || currentUser.age}
              onChange={handleChangeUser}
            />
          </div>
          <select
            className="form-select"
            onChange={handleChangeUser}
            value={addUser.genre || currentUser.genre}
            name="genre"
          >
            <option value="">-</option>
            <option value="homme" name="genre">
              Homme
            </option>
            <option value="femme" name="genre">
              Femme
            </option>
          </select>
          <div className="d-flex flex-column row-gap-3">
            <button className="btn btn-danger" type="submit">
              Supprimer l'utilisateur
            </button>
            <button className="btn btn-success" type="submit">
              Mettre à jour l'utilisateur
            </button>
            <button
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                setDisplayEditUser(false)
              }}
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormEditUser
