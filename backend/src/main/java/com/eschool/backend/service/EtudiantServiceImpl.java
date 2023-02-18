package com.eschool.backend.service;

import com.eschool.backend.entity.Etudiant;
import com.eschool.backend.repository.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class EtudiantServiceImpl implements  EtudiantService{

    @Autowired
    EtudiantRepository etudiantRepository;


    @Override
    public List<Etudiant> getAll() {
        return etudiantRepository.findAll();
    }

    @Override
    public Etudiant saveEtudiant(Etudiant etudiant, Integer... idcmps) throws Exception {
        return etudiantRepository.save(etudiant);
    }

    @Override
    public void deleteEtudiant(int id) {

        Etudiant toDelete = etudiantRepository.findEtudiantById(id);

        if(toDelete == null){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,String.format(
                    "Student with id %d does not exist",id
            ));
        }
        etudiantRepository.delete(toDelete);
    }

    @Override
    public Etudiant findEtudiantById(Integer id) throws Exception {
        Optional<Etudiant> byId = etudiantRepository.findById(id);
        if(byId.isEmpty()){
            throw new Exception(
                    String.format("Student with id %d not found", id )
            );
        }else
        return byId.get();
    }
}
