package Cohorte14Equipo21.back.repositorios;

import Cohorte14Equipo21.back.modelos.oferta.Oferta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfertaRepository extends JpaRepository<Oferta,Long> {
}
