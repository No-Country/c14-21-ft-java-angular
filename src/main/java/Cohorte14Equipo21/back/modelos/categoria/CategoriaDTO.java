package Cohorte14Equipo21.back.modelos.categoria;

public record CategoriaDTO(Long id,
                           String nombre) {

    public CategoriaDTO(Categoria categoria){
        this(categoria.getId(),categoria.getNombre());
    }
}
