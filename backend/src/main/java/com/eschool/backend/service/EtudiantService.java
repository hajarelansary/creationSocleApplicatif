package com.eschool.backend.service;

import com.eschool.backend.entity.Etudiant;

import java.util.List;

public interface EtudiantService {

    List<Etudiant> getAll();

    Etudiant saveEtudiant(Etudiant etudiant,Integer...idcmps) throws Exception;

    void deleteEtudiant(int id);

    Etudiant findEtudiantById(Integer id) throws Exception;

}
