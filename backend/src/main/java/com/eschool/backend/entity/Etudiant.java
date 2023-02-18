package com.eschool.backend.entity;


import jakarta.persistence.*;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Etudiant {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    @Column(name = "ID_ETU")
    private int id;

    @Column(name = "NOM")
    private String nom;

    @Column(name = "PRENOM")
    private String prenom;

    @Column(name = "ADRESSE")
    private String adresse;

    @Column(name = "TEL")
    private String tel;

    @Column(name = "NIVEAU")
    private String niveau;

}
