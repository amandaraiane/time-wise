package com.example.backend.api;

import com.example.backend.entity.Atividade;
import com.example.backend.entity.Colaborador;
import com.example.backend.service.AtividadeService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Api
@RestController
@RequestMapping("atividade")
public class AtividadeApi {

    @Autowired
    private AtividadeService service;

    @PostMapping
    public String save(@RequestBody Atividade atividade) {
        service.save(atividade);
        return "Atividade saved with success";
    }
    @GetMapping
    public Page<Atividade> findByNamev2(@RequestParam String searchTerm,
                                          @RequestParam(name = "pageNumber", defaultValue = "0") Integer pageNumber,
                                          @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize) {
        return service.findByNamev2(pageNumber, pageSize, searchTerm);
    }


    @GetMapping("/{atividadeId}")
    public Optional<Atividade> findtimeSheet(@PathVariable Long atividadeId) {
        return service.findAtividade(atividadeId);
    }

    @PutMapping
    public String update(@RequestBody Atividade atividade) {
        service.save(atividade);
        return "Atividade updated with success";
    }

    @DeleteMapping("/{atividadeId}")
    public String deleteatividade(@PathVariable Long atividadeId) {
        service.deleteById(atividadeId);
        return "Atividade " + atividadeId + " Was deleted";
    }

}
