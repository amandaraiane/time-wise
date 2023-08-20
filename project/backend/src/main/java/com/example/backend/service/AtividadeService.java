package com.example.backend.service;

import com.example.backend.entity.Atividade;
import com.example.backend.repository.AtividadeRepository;
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
public class AtividadeService {

    @Autowired
    private AtividadeRepository repository;

    public void save(Atividade atividade) {
        repository.save(atividade);

    }

    public Optional<Atividade> findAtividade(Long atividadeId) {
        return repository.findById(atividadeId);
    }

    public void deleteById(Long atividadeId) {
        repository.deleteById(atividadeId);
    }


    public Page<Atividade> findByNamev2(Integer pageNumber, Integer pageSize, String searchTerm){
        searchTerm = Objects.nonNull(searchTerm) ? searchTerm : "";
        return repository.findByNamev2("%"+searchTerm+"%", PageRequest.of(pageNumber, pageSize));
    }

}
