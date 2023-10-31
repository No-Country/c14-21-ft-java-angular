package Cohorte14Equipo21.back.modelos.usuarios.auth.DTO;

import Cohorte14Equipo21.back.modelos.usuarios.usuario.User;

public record LoginDTO (String email,
                        String password){

    public LoginDTO(User login){
        this(login.getEmail(), login.getPassword());
    }
}
