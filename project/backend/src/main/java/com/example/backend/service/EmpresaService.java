package com.example.backend.service;

import com.example.backend.entity.Colaborador;
import com.example.backend.entity.Empresa;
import com.example.backend.repository.ColaboradorRepository;
import com.example.backend.repository.EmpresaRepository;
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
public class EmpresaService {

    @Autowired
    private EmpresaRepository repository;

    public void save(Empresa empresa) {
        repository.save(empresa);

    }

    public Optional<Empresa> findEmpresa(Long empresaId) {
        return repository.findById(empresaId);
    }

    public void deleteById(Long empresaId) {
        repository.deleteById(empresaId);
    }

    public List<Empresa> findByName(String searchTerm){
        return repository.findByName(searchTerm);
    }

    public Page<Empresa> findByNamev2(Integer pageNumber, Integer pageSize, String searchTerm){
        searchTerm = Objects.nonNull(searchTerm) ? searchTerm : "";
        return repository.findByNamev2("%"+searchTerm+"%", PageRequest.of(pageNumber, pageSize));
    }

}
