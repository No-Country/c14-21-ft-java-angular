package Cohorte14Equipo21.back.auth.controllers;

import Cohorte14Equipo21.back.modelos.producto.DTO.ProductoDTO;
import Cohorte14Equipo21.back.modelos.producto.DTO.ProductoRecibido;
import Cohorte14Equipo21.back.modelos.producto.Producto;
import Cohorte14Equipo21.back.service.ProductoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/producto")
public class ProductoController {

    @Autowired
    ProductoService productoService;

    @GetMapping
    public ResponseEntity<Page<Producto>> todosLosProductos(@RequestParam(defaultValue = "1") int page,
                                                            @RequestParam(defaultValue = "10") int size,
                                                            @RequestParam(defaultValue = "id") String sortBy,
                                                            @RequestParam(defaultValue = "ASC") String sortOrder){
        Page<Producto> productos = productoService.getPages(page,size,sortBy,sortOrder);
        return ResponseEntity.ok(productos);
        }

    @PostMapping("/{productoRecibido}")
    public ResponseEntity<ProductoDTO> agregarProducto(@RequestBody @Valid ProductoRecibido productoRecibido){
        return ResponseEntity.badRequest().build();
    }

}
