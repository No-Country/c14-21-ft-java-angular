package Cohorte14Equipo21.back.modelos.usuarios.auth.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RegisterDTO (@NotBlank @Size(min = 5, max = 15) String username,
                           @NotBlank @Size(min = 8, max = 20) String password,
                           @NotBlank @Email String email,
                           @NotNull String direccion){

}
