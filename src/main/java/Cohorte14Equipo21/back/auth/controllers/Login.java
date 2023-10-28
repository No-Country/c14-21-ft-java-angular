package Cohorte14Equipo21.back.auth.controllers;

import Cohorte14Equipo21.back.modelos.usuarios.auth.DTO.AuthResponseDTO;
import Cohorte14Equipo21.back.modelos.usuarios.auth.DTO.LoginDTO;
import Cohorte14Equipo21.back.modelos.usuarios.auth.DTO.RegisterDTO;
import Cohorte14Equipo21.back.repositorios.UsersRepository;
import Cohorte14Equipo21.back.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/login")
@RestController
public class Login {

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private AuthService authService;
    @PostMapping("/entry")
    public ResponseEntity<AuthResponseDTO> login(@RequestBody @Valid LoginDTO loginDTO){
        return ResponseEntity.ok(authService.login(loginDTO));
    }
    @PostMapping("/registro")
    public ResponseEntity<AuthResponseDTO> resgitro(@RequestBody @Valid RegisterDTO registerDTO){
        return ResponseEntity.ok(authService.register(registerDTO));
    }
}
