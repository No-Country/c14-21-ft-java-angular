package Cohorte14Equipo21.back.modelos.tipo;

public record TipoDTO(Long id,
                      String nombre) {

    public TipoDTO(Tipo tipo){
        this(tipo.getId(), tipo.getNombre());
    }
}
