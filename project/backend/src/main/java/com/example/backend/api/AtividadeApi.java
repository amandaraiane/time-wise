package com.example.backend.api;

import com.example.backend.entity.Atividade;
import com.example.backend.service.AtividadeService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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

    @GetMapping("/{atividadeId}")
    public Optional<Atividade> findtimeSheet(@PathVariable Long comandaId) {
        return service.findAtividade(atividadeId);
    }

    @GetMapping
    public Page<Atividade> findAllByOrderByIdDesc(@RequestParam(value = "pageNumber", defaultValue = "0", required = false) int pageNumber,
                                                @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize){
        return service.findAllByOrderByIdDesc(pageNumber, pageSize);
    }

    @PutMapping
    public String update(@RequestBody Atividade atividade) {
        service.save(comanda);
        return "Atividade updated with success";
    }

    @DeleteMapping("/{comandaId}")
    public String deletecomanda(@PathVariable Long atividadeId) {
        service.deleteById(atividadeId);
        return "Atividade " + atividadeId + " Was deleted";
    }



}
