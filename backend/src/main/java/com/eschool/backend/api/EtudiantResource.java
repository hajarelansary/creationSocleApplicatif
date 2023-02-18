package com.eschool.backend.api;

import com.eschool.backend.entity.Etudiant;
import com.eschool.backend.service.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/etudiants")
@CrossOrigin(origins = {"*"}, maxAge = 4800, allowCredentials = "false")
public class EtudiantResource {

    @Autowired
    EtudiantService etudiantService;

    @GetMapping("")
    public List<Etudiant> getEtudiants(){
        return etudiantService.getAll();
    }

    @GetMapping("/{id}")
    public Etudiant getEtudiantById(@PathVariable Integer id) throws Exception {
        return etudiantService.findEtudiantById(id);
    }

    @PostMapping("/add")
    public Etudiant addEtudiant(@RequestBody Etudiant etudiant)throws Exception{
        return etudiantService.saveEtudiant(etudiant);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteEtudiant(@PathVariable Integer id){
        etudiantService.deleteEtudiant(id);
        return ResponseEntity.ok().build();
    }
}
