package com.example.backend.entity;

import com.example.backend.entity.enums.FuncaoEnum;
import com.example.backend.entity.enums.PerimissoesEnum;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "colaborador")
public class Colaborador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nome")
    private String nome;

    @Enumerated(EnumType.STRING)
    @Column(name = "funcao")
    private FuncaoEnum funcao;

    @OneToMany
    private List<Empresa> empresa;

    @Column(name = "login")
    private String login;

    @Column(name = "permissao")
    private PerimissoesEnum permissao;

}
