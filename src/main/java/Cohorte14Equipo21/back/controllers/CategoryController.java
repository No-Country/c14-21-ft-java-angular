package Cohorte14Equipo21.back.controllers;

import Cohorte14Equipo21.back.modelos.categoria.Categoria;
import Cohorte14Equipo21.back.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/categories")
@RestController
public class CategoryController {
    @Autowired
    CategoriaService categoryService;

    @GetMapping
    public ResponseEntity<Page<Categoria>> getAllPaginated(@RequestParam(defaultValue = "1") int page,
                                                     @RequestParam(defaultValue = "10") int size,
                                                     @RequestParam(defaultValue = "id") String sortBy,
                                                     @RequestParam(defaultValue = "ASC") String sortOrder) {
        Page<Categoria> categories = categoryService.findAllWithPagination(page,size,sortBy,sortOrder);
        return ResponseEntity.ok(categories);
    }
}
