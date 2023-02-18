import http from "../http-common";

class StudentDataService{
    getAll(){
        return http.get("/students");
    }

    get(id){
        return http.get(`/students/${id}`);
    }

    create(data){
        return http.post("/create", data);
    }

    delete(id){
        return http.delete(`/delete/${id}`);
    }
}

export default new StudentDataService();