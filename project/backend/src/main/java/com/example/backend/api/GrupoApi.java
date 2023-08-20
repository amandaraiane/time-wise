package com.example.backend.api;

import com.example.backend.entity.Colaborador;
import com.example.backend.entity.Empresa;
import com.example.backend.entity.Grupo;
import com.example.backend.service.EmpresaService;
import com.example.backend.service.GrupoService;
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
@RequestMapping("grupo")
public class GrupoApi {

    @Autowired
    private GrupoService service;

    @PostMapping
    public String save(@RequestBody Grupo grupo) {
        service.save(grupo);
        return "Grupo saved with success";
    }

    @GetMapping("/{grupoId}")
    public Optional<Grupo> findtimeSheet(@PathVariable Long grupoId) {
        return service.findGrupo(grupoId);
    }

    @PutMapping
    public String update(@RequestBody Grupo grupo) {
        service.save(grupo);
        return "Grupo updated with success";
    }

    @DeleteMapping("/{grupoId}")
    public String deleteempresa(@PathVariable Long grupoId) {
        service.deleteById(grupoId);
        return "Grupo " + grupoId + " Was deleted";
    }

}
