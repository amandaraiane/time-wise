package com.example.backend.service;

import com.example.backend.entity.Empresa;
import com.example.backend.entity.Grupo;
import com.example.backend.repository.EmpresaRepository;
import com.example.backend.repository.GrupoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
public class GrupoService {

    @Autowired
    private GrupoRepository repository;

    public void save(Grupo grupo) {
        repository.save(grupo);

    }

    public Optional<Grupo> findGrupo(Long grupoId) {
        return repository.findById(grupoId);
    }

    public void deleteById(Long grupoId) {
        repository.deleteById(grupoId);
    }


    public Page<Grupo> findByNamev2(Integer pageNumber, Integer pageSize, String searchTerm){
        searchTerm = Objects.nonNull(searchTerm) ? searchTerm : "";
        return repository.findByNamev2("%"+searchTerm+"%", PageRequest.of(pageNumber, pageSize));
    }

}
