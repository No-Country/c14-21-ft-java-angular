package Cohorte14Equipo21.back.modelos.imagen.DTO;

import Cohorte14Equipo21.back.modelos.imagen.Imagen;

public record ImagenDTO(String url,
                        String id,
                        String nombre) {

    public ImagenDTO(Imagen imagen){
        this(imagen.getImagenUrl(),
                imagen.getImagenId(),
                imagen.getNombre());
    }
}
