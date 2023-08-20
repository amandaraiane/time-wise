package com.example.backend.service;

import com.example.backend.entity.Colaborador;
import com.example.backend.repository.ColaboradorRepository;
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
public class ColaboradorService {

    @Autowired
    private ColaboradorRepository repository;

    public void save(Colaborador colaborador) {
        repository.save(colaborador);

    }

    public Optional<Colaborador> findColaborador(Long colaboradorId) {
        return repository.findById(colaboradorId);
    }

    public void deleteById(Long colaboradorId) {
        repository.deleteById(colaboradorId);
    }


    public Page<Colaborador> findByNamev2(Integer pageNumber, Integer pageSize, String searchTerm){
        searchTerm = Objects.nonNull(searchTerm) ? searchTerm : "";
        return repository.findByNamev2("%"+searchTerm+"%", PageRequest.of(pageNumber, pageSize));
    }

}
