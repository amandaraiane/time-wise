package com.example.backend.api;

import com.example.backend.entity.Empresa;
import com.example.backend.service.ColaboradorService;
import com.example.backend.service.EmpresaService;
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
@RequestMapping("empresa")
public class EmpresaApi {

    @Autowired
    private EmpresaService service;

    @PostMapping
    public String save(@RequestBody Empresa empresa) {
        service.save(empresa);
        return "Empresa saved with success";
    }

    @GetMapping("/{colaboradorId}")
    public Optional<Empresa> findtimeSheet(@PathVariable Long empresaId) {
        return service.findEmpresa(empresaId);
    }


    @PutMapping
    public String update(@RequestBody Empresa empresa) {
        service.save(empresa);
        return "Empresa updated with success";
    }

    @DeleteMapping("/{empresaId}")
    public String deleteempresa(@PathVariable Long empresaId) {
        service.deleteById(empresaId);
        return "Empresa " + empresaId + " Was deleted";
    }

}
