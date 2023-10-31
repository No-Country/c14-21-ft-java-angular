package Cohorte14Equipo21.back.modelos.registrodecompra;


import Cohorte14Equipo21.back.modelos.producto.Producto;
import Cohorte14Equipo21.back.modelos.usuarios.usuario.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "registro_de_compra")
public class RegistroDeCompra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToMany
    @JoinColumn(name = "productos_comprados", nullable = false, referencedColumnName = "id")
    private List<Producto> productosComprados = new ArrayList<>();
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente", nullable = false)
    private User usuario;
}
