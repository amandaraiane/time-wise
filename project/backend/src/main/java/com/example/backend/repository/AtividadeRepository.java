package com.example.backend.repository;

import com.example.backend.entity.Atividade;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AtividadeRepository extends JpaRepository<Atividade, Long> {



    @Query(value = "select c from Atividade c where c.titulo ilike :searchTerm")
    Page<Atividade> findByNamev2(@Param("searchTerm") String searchTerm, Pageable pageable);

}
