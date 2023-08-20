package com.example.backend.repository;

import com.example.backend.entity.Colaborador;
import com.example.backend.entity.Empresa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

    @Query("select c from Empresa c where c.name ilike :searchTerm ")
    List<Empresa> findByName(String searchTerm);

    @Query(value = "select c from Empresa c where c.name ilike :searchTerm")
    Page<Empresa> findByNamev2(@Param("searchTerm") String searchTerm, Pageable pageable);

}
