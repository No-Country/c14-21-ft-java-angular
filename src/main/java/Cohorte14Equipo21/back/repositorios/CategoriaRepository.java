package Cohorte14Equipo21.back.repositorios;

import Cohorte14Equipo21.back.modelos.categoria.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria,Long> {
}
