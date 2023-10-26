package Cohorte14Equipo21.back.repositorios;

import Cohorte14Equipo21.back.modelos.producto.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProductoRepository extends JpaRepository<Producto,Long> {

}
