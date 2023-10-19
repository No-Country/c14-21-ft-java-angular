package Cohorte14Equipo21.back.service;

import Cohorte14Equipo21.back.config.jwt.JwtService;
import Cohorte14Equipo21.back.modelos.usuarios.auth.AuthResponse;
import Cohorte14Equipo21.back.modelos.usuarios.auth.LoginRequest;
import Cohorte14Equipo21.back.modelos.usuarios.auth.RegistroRequest;
import Cohorte14Equipo21.back.modelos.usuarios.usuario.Role;
import Cohorte14Equipo21.back.modelos.usuarios.usuario.User;
import Cohorte14Equipo21.back.repositorios.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtService jwtService;
    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    public AuthResponse login (LoginRequest request){
        return null;
    }

    public AuthResponse register(RegistroRequest request){
        User user = User.builder()
                .userName(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .email(request.getEmail())
                .role(Role.USUARIO)
                .build();
        usersRepository.save(user);

        return  AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build();
    }


}
