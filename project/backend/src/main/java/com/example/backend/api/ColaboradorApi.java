package com.example.backend.api;

import com.example.backend.entity.Atividade;
import com.example.backend.entity.Colaborador;
import com.example.backend.service.AtividadeService;
import com.example.backend.service.ColaboradorService;
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
@RequestMapping("colaborador")
public class ColaboradorApi {

    @Autowired
    private ColaboradorService service;

    @PostMapping
    public String save(@RequestBody Colaborador colaborador) {
        service.save(colaborador);
        return "colaborador saved with success";
    }

    @GetMapping("/{colaboradorId}")
    public Optional<Colaborador> findtimeSheet(@PathVariable Long colaboradorId) {
        return service.findColaborador(colaboradorId);
    }


    @PutMapping
    public String update(@RequestBody Colaborador colaborador) {
        service.save(colaborador);
        return "colaborador updated with success";
    }

    @DeleteMapping("/{atividadeId}")
    public String deletecomanda(@PathVariable Long colaboradorId) {
        service.deleteById(colaboradorId);
        return "Colaborador " + colaboradorId + " Was deleted";
    }

}
