package Cohorte14Equipo21.back.repositorios;

import Cohorte14Equipo21.back.modelos.categoria.Categoria;
import Cohorte14Equipo21.back.modelos.producto.Producto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface ProductoRepository extends JpaRepository<Producto,Long> {

    Page<Producto> findByCategoria(Categoria categoria, Pageable pageable);

}
