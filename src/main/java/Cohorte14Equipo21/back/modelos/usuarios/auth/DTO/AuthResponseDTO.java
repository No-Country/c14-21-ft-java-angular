package Cohorte14Equipo21.back.modelos.usuarios.auth.DTO;

import Cohorte14Equipo21.back.modelos.usuarios.auth.AuthResponse;

public record AuthResponseDTO (String token){

    public AuthResponseDTO(AuthResponse auth){
        this(auth.getToken());
    }
}
