package Cohorte14Equipo21.back.modelos.usuarios.auth.DTO;

import Cohorte14Equipo21.back.modelos.usuarios.auth.LoginRequest;

public record LoginDTO (String username,
                        String password){

    public LoginDTO(LoginRequest login){
        this(login.getUsername(), login.getPassword());
    }
}
