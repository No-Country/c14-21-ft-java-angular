package Cohorte14Equipo21.back.modelos.producto;

import Cohorte14Equipo21.back.modelos.categoria.Categoria;
import Cohorte14Equipo21.back.modelos.imagen.Imagen;
import Cohorte14Equipo21.back.modelos.oferta.Oferta;
import Cohorte14Equipo21.back.modelos.producto.DTO.ProductoDTO;
import Cohorte14Equipo21.back.modelos.tipo.Tipo;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "nombre", nullable = false)
    private String nombre;
    @Column(name = "precio", nullable = false, scale = 2)
    private Double precio;
    @Column(name = "detalles")
    private String detalles;
    @Column(name = "stock", columnDefinition = "int default 0")
    private Integer stock;
    @Column(name = "talle", nullable = false)
    private String talle;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tipos_id", nullable = false)
    private Tipo tipo;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "categorias_id", nullable = false)
    private Categoria categoria;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "ofertas")
    private Oferta oferta;


    public Producto(ProductoDTO productoDTO){
        this.nombre=productoDTO.nombre();
        this.categoria=new Categoria(productoDTO.categoria());
    }
}
