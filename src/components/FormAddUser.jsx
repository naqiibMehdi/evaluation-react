import React, { useState } from "react"

function FormAddUser({ setDisplayFormAddUser, validateUser }) {
  const [addUser, setAddUser] = useState({})

  const handleChangeUser = (e) => {
    const { name, value } = e.target
    setAddUser((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="popup-overlay" onClick={() => setDisplayFormAddUser(false)}>
      <div className="w-25" onClick={(e) => e.stopPropagation()}>
        <form
          className="bg-white p-3 rounded h-100 d-flex flex-column gap-4"
          onSubmit={(e) => {
            e.preventDefault()
            validateUser(addUser)
            setDisplayFormAddUser(false)
          }}
        >
          <p className="fs-2">Ajouter un utilisateur</p>
          <div className="form-group">
            <label htmlFor="lastname" className="mb-2">
              Nom
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={addUser.lastname || ""}
              onChange={handleChangeUser}
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname" className="mb-2">
              Prénom
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
              value={addUser.firstname || ""}
              onChange={handleChangeUser}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age" className="mb-2">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={addUser.age || ""}
              onChange={handleChangeUser}
            />
          </div>
          <label htmlFor="genre">Genre</label>
          <select
            className="form-select"
            onChange={handleChangeUser}
            value={addUser.genre || ""}
            name="genre"
            id="genre"
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
            <button className="btn btn-primary" type="submit">
              Ajouter l'utilisateur
            </button>
            <button
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                setDisplayFormAddUser(false)
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

export default FormAddUser
