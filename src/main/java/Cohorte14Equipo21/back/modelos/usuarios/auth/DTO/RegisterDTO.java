package Cohorte14Equipo21.back.modelos.usuarios.auth.DTO;

import Cohorte14Equipo21.back.modelos.usuarios.auth.RegistroRequest;

public record RegisterDTO (String username,
                           String password,
                           String email,
                           String direccion){

    public RegisterDTO(RegistroRequest request){
        this(request.getUsername(),request.getPassword(),request.getEmail(),request.getDireccion());
    }

}
