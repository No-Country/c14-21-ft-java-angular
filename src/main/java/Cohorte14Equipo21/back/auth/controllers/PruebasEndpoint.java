package Cohorte14Equipo21.back.auth.controllers;

import Cohorte14Equipo21.back.service.AuthService;
import Cohorte14Equipo21.back.modelos.usuarios.auth.AuthResponse;
import Cohorte14Equipo21.back.modelos.usuarios.auth.LoginRequest;
import Cohorte14Equipo21.back.modelos.usuarios.auth.RegistroRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@RestController
public class PruebasEndpoint {

    @Autowired
    private AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request){
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegistroRequest request){
        return ResponseEntity.ok(authService.register(request));
    }
}
