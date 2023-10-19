package Cohorte14Equipo21.back.modelos.producto.DTO;

import Cohorte14Equipo21.back.modelos.imagen.DTO.ImagenDTO;
import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.util.List;

public record ProductoRecibido(@NotBlank @Size(min = 5,max = 20) String nombre,
                               @NotNull List<ImagenDTO> imagenes,
                               @NotBlank Integer precio,
                               @Nullable String detalles,
                               @NotBlank Integer stock,
                               @NotBlank List<String> talle,
                               @NotBlank String tipo,
                               @NotBlank String categoria,
                               @NotBlank Boolean oferta,
                               @Nullable String porcentajeOferta) {
}
