package com.example.backend.repository;

import com.example.backend.entity.Empresa;
import com.example.backend.entity.Grupo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Long> {

    @Query("select c from Grupo c where c.name ilike :searchTerm ")
    List<Grupo> findByName(String searchTerm);

    @Query(value = "select c from Grupo c where c.name ilike :searchTerm")
    Page<Grupo> findByNamev2(@Param("searchTerm") String searchTerm, Pageable pageable);

}
