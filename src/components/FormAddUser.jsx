import React from "react"

function FormAddUser() {
  return (
    <div className="popup-overlay">
      <div className="w-25">
        <form className="bg-white p-3 rounded h-100 d-flex flex-column gap-4">
          <p className="fs-2">Ajouter un utilisateur</p>
          <div className="form-group">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              name="firstname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" id="age" name="age" />
          </div>
          <select className="form-select" name="genre">
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
          <div className="d-flex flex-column row-gap-3">
            <button className="btn btn-primary">Ajouter l'utilisateur</button>
            <button className="btn btn-secondary">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormAddUser
