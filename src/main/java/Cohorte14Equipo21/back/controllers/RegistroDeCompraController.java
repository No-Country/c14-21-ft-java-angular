package Cohorte14Equipo21.back.controllers;

import Cohorte14Equipo21.back.modelos.registrodecompra.RegistroDeCompra;
import Cohorte14Equipo21.back.service.RegistroDeCompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/compras")
public class RegistroDeCompraController {

    @Autowired
    private RegistroDeCompraService registroDeCompraService;

    @GetMapping("/{id}")
    public ResponseEntity<RegistroDeCompra> retornarRegistroPorUsuario(@PathVariable Long id){
        Optional<RegistroDeCompra> registro = registroDeCompraService.buscarRegistro(id);
        return registro.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
