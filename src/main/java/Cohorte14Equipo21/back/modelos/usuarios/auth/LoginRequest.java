package Cohorte14Equipo21.back.modelos.usuarios.auth;

import Cohorte14Equipo21.back.modelos.usuarios.auth.DTO.LoginDTO;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    String username;
    String password;

    public LoginDTO respuesta(){
        return new LoginDTO(this);
    }
}
