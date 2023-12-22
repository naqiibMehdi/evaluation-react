import React from "react"

function FormAddUser() {
  return (
    <form>
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
      <select className="custom-select" name="genre">
        <option value="homme">Homme</option>
        <option value="femme">Femme</option>
      </select>
      <div>
        <button className="btn btn-primary">Ajouter l'utilisateur</button>
        <button className="btn btn-secondary">Annuler</button>
      </div>
    </form>
  )
}

export default FormAddUser
