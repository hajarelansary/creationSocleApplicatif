import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {
   let navigate = useNavigate();

   const [etudiant,setEtudiant] = useState({
      id:"",
      nom:"",
      prenom:"",
      adresse:"",
      tel:"",
      niveau:""
    });

    const{ id , nom , prenom , adresse , tel , niveau} = etudiant;
    
    const onInputChange = (e) => {
      setEtudiant({ ...etudiant, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8181/etudiants/add", etudiant);
      navigate("/");
    };

    return(
      <div className="container">
      <div className="row">
          <h2 className="text-center m-4">Ajouter un étudiant</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Identifiant ENT
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Identifiant ENT"
                name="id"
                value={id}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Nom"
                name="nom"
                value={nom}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
                Prénom
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Prénom"
                name="prenom"
                value={prenom}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="adresse" className="form-label">
                Adresse
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Adresse"
                name="adresse"
                value={adresse}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tel" className="form-label">
                Téléphone
              </label>
              <input
                type={"tel"}
                className="form-control"
                placeholder="Téléphone"
                name="tel"
                value={tel}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="niveau" className="form-label">
                Niveau
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="niveau"
                name="niveau"
                value={niveau}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block">
              Enregistrer
            </button>
            <Link className="btn btn-outline-danger btn-lg btn-block" to="/">
              Return
            </Link>
          </form>
        </div>
      </div>

    ); 
}


