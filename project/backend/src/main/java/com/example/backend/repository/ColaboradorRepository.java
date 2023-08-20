package com.example.backend.repository;

import com.example.backend.entity.Atividade;
import com.example.backend.entity.Colaborador;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ColaboradorRepository extends JpaRepository<Colaborador, Long> {

    @Query("select c from Colaborador c where c.name ilike :searchTerm ")
    List<Colaborador> findByName(String searchTerm);

    @Query(value = "select c from Colaborador c where c.name ilike :searchTerm")
    Page<Colaborador> findByNamev2(@Param("searchTerm") String searchTerm, Pageable pageable);

}
