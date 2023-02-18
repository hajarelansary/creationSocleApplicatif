import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8181/etudiants",
  headers: {
    "Content-type": "application/json"
  }
});
