package Cohorte14Equipo21.back.repositorios;

import Cohorte14Equipo21.back.modelos.imagen.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagenRepository extends JpaRepository<Imagen,Long> {

    List<Imagen> findByOrderById();
}
