package Cohorte14Equipo21.back.modelos.imagen;

import Cohorte14Equipo21.back.modelos.producto.Producto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "imagen_nombre", nullable = false)
    private String nombre;
    @Column(name = "imagen_url", nullable = false)
    private String imagenUrl;
    @Column(name = "imagen_id", nullable = false)
    private String imagenId;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "producto_id",nullable = false)
    private Producto producto;

}
