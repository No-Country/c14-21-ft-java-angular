package Cohorte14Equipo21.back.repositorios;

import Cohorte14Equipo21.back.modelos.tipo.Tipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoRepository extends JpaRepository<Tipo,Long> {
}
