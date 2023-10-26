package Cohorte14Equipo21.back.modelos.usuarios.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


public record RegistroRequest(String username,
        String password,
        String email,
        String direccion) {


}
