package Cohorte14Equipo21.back.auth.controllers;

import Cohorte14Equipo21.back.modelos.categoria.Categoria;
import Cohorte14Equipo21.back.modelos.producto.DTO.ProductoDTO;
import Cohorte14Equipo21.back.modelos.producto.Producto;
import Cohorte14Equipo21.back.service.CategoriaService;
import Cohorte14Equipo21.back.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductoController {

    @Autowired
    ProductoService productoService;
    @Autowired
    CategoriaService categoriaService;

    @GetMapping
    public ResponseEntity<List<ProductoDTO>> todosLosProductos(){
        List<Producto> var = productoService.todosLasProducto();
        if(var.isEmpty()){
            return ResponseEntity.badRequest().build();
        }else {
            return ResponseEntity.ok(productoService.todosLasProducto()
                    .stream()
                    .map(ProductoDTO::new)
                    .toList());
        }
    }

    @GetMapping("/by-category/{categoryId}")
    public ResponseEntity<Page<Producto>> findByCategory(@PathVariable Long categoryId, @RequestParam(defaultValue = "1") int page,
                                                         @RequestParam(defaultValue = "10") int size,
                                                         @RequestParam(defaultValue = "id") String sortBy,
                                                         @RequestParam(defaultValue = "ASC") String sortOrder) {
        Categoria category = categoriaService.findOneById(categoryId);
        if(category == null) {
            return ResponseEntity.notFound().build();
        }
        Pageable pageable = PageRequest.of(page - 1, size, Sort.by(Sort.Direction.fromString(sortOrder), sortBy));
        return ResponseEntity.ok(productoService.findByCategory(pageable, category));
    }


    @GetMapping("/{id}")
    public ResponseEntity<Producto> findOneById(@PathVariable Long id) {
        Producto product = productoService.findOneById(id);
        if(product == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(product);
    }

   // @GetMapping("/{productoRecibido}")
    //public ResponseEntity<ProductoDTO> agregarProducto(@RequestBody ProductoRecibido productoRecibido){
      //  return null;
    //}
}
