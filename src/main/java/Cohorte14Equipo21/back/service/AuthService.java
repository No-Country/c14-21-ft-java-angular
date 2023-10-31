package Cohorte14Equipo21.back.service;

import Cohorte14Equipo21.back.config.jwt.JwtService;
import Cohorte14Equipo21.back.modelos.usuarios.auth.AuthResponse;
import Cohorte14Equipo21.back.modelos.usuarios.auth.DTO.AuthResponseDTO;
import Cohorte14Equipo21.back.modelos.usuarios.auth.DTO.LoginDTO;
import Cohorte14Equipo21.back.modelos.usuarios.auth.DTO.RegisterDTO;
import Cohorte14Equipo21.back.modelos.usuarios.usuario.Role;
import Cohorte14Equipo21.back.modelos.usuarios.usuario.User;
import Cohorte14Equipo21.back.repositorios.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtService jwtService;
    private final UsersRepository usersRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponseDTO login(LoginDTO request){
        var auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.email(),request.password()));
        UserDetails user = usersRepository.findByEmail(request.email()).orElseThrow();
        String token = jwtService.getToken(user);
        return AuthResponse.builder().token(token).build().repuesta();
    }

    public AuthResponseDTO register(RegisterDTO request){
        User user = User.builder()
                .userName(request.username())
                .password(passwordEncoder.encode(request.password()))
                .email(request.email())
                .role(Role.USUARIO)
                .build();
        usersRepository.save(user);

        return  AuthResponse.builder()
                .token(jwtService.getToken(user))
                .build().repuesta();
    }
}
