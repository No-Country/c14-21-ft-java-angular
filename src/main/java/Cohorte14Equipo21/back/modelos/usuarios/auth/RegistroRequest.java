package Cohorte14Equipo21.back.modelos.usuarios.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegistroRequest {

    String username;
    String password;
    String email;
    String direccion;
}
