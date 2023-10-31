package Cohorte14Equipo21.back.repositorios;

import Cohorte14Equipo21.back.modelos.registrodecompra.RegistroDeCompra;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistroDeCompraRepository extends JpaRepository<RegistroDeCompra, Long> {
}
