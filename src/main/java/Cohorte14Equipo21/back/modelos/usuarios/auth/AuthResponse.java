package Cohorte14Equipo21.back.modelos.usuarios.auth;

import Cohorte14Equipo21.back.modelos.usuarios.auth.DTO.AuthResponseDTO;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    String token;

    public AuthResponseDTO repuesta(){
        return new AuthResponseDTO(this);
    }
}
