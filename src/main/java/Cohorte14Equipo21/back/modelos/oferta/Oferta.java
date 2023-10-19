package Cohorte14Equipo21.back.modelos.oferta;

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
@Table(name = "ofertas")
public class Oferta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "porcentaje", nullable = false)
    private Integer porcentaje;
    @Column(name = "esta_en_oferta", nullable = false)
    private Boolean estaEnOferta;
}
