package Cohorte14Equipo21.back.modelos.imagen.DTO;

import Cohorte14Equipo21.back.modelos.imagen.Imagen;

public record ImagenUrlDTO(String url) {

    public ImagenUrlDTO(Imagen imagen){
        this(imagen.getImagenUrl());
    }
}
