package com.example.backend.entity;


import com.example.backend.entity.enums.*;
import jakarta.persistence.*;
import jdk.jshell.Snippet;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;

@Getter
@Setter
@Entity
@Table(name = "atividade")
public class Atividade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Enumerated(EnumType.STRING)
    @Column(name = "classificacao")
    private ClassificacaoEnum classificacaoEnum;

    @Column(name = "controle_tempo")
    private Time controleTempo;

    @Column(name = "estimativa_tempo")
    private Time estimativaTempo;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "empresa")
    private Empresa empresa;

    @Column(name = "demandante")
    private Colaborador demandante;

    @Column(name = "colaborador")
    private Colaborador colaborador;

    @Column(name = "data")
    private Date data;

    @Enumerated(EnumType.STRING)
    @Column(name = "prioridade")
    private PrioridadeEnum prioridadeEnum;

    @Column(name = "relator")
    private Colaborador relator;

    @Column(name = "sprint")
    private String sprint;

    @Enumerated(EnumType.STRING)
    @Column(name = "categoria")
    private CategoriaEnum categoriaEnum;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private StatusEnum statusEnum;

    @Column(name = "comentario")
    private String comentario;

    @Enumerated(EnumType.STRING)
    @Column(name = "situacao")
    private SituacaoEnum situacaoEnum;

}
