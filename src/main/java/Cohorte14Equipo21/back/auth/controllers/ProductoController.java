package Cohorte14Equipo21.back.auth.controllers;

import Cohorte14Equipo21.back.modelos.producto.DTO.ProductoDTO;
import Cohorte14Equipo21.back.modelos.producto.DTO.ProductoRecibido;
import Cohorte14Equipo21.back.modelos.producto.Producto;
import Cohorte14Equipo21.back.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
public class ProductoController {

    @Autowired
    ProductoService productoService;

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


    @GetMapping("/{productoRecibido}")
    public ResponseEntity<ProductoDTO> agregarProducto(@RequestBody ProductoRecibido productoRecibido){
        return null;
    }
}
