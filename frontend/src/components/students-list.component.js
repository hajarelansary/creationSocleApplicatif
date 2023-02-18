import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaTrash } from 'react-icons/fa';
import { Link } from "react-router-dom";




export default function StudentsList() {
    const[etudiants , setEtudiants] = useState([]);

    const{id} = useParams;

    useEffect(() => {loadEtudiants(); }, []);

    const loadEtudiants = async () => {
        const result = await axios.get("http://localhost:8181/etudiants");
        setEtudiants(result.data);
      };

    const deleteEtudiant = async (id) => {
    await axios.delete(`http://localhost:8181/etudiants/${id}`);
    loadEtudiants();
    };
    
return (
<>
<br/>
<br/>
<h4 className="title1">Bienvenue dans la plateforme de gestion des étudiants</h4> 
<div className="container">
 <div className="py-4">
 <Link className="btn btn-dark" to={"/add"}> 
          Ajouter Etudiant
</Link>

<br/><br/><br/>
  <table className="table">
  <thead className="thead-dark">
    <tr>
      <th className="table-primary" scope="col">#</th>
      <th className="table-primary" scope="col">Nom</th>
      <th className="table-primary" scope="col">Prénom</th>
      <th className="table-primary" scope="col">Adresse</th>
      <th className="table-primary" scope="col">Téléphone</th>
      <th className="table-primary" scope="col">Niveau</th>
      <th className="table-primary" scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {etudiants.map((etudiant, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{etudiant.nom}</td>
                <td>{etudiant.prenom}</td>
                <td>{etudiant.adresse}</td>
                <td>{etudiant.tel}</td>
                <td>{etudiant.niveau}</td>
                <td>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEtudiant(etudiant.id)}
                  > <FaTrash/>
                  </button>
                </td>
              </tr>
            ))}
  </tbody>
</table>
</div>
</div>
  </>
  );
}
