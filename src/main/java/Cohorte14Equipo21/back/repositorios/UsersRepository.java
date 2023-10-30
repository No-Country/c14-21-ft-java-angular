package Cohorte14Equipo21.back.repositorios;

import Cohorte14Equipo21.back.modelos.usuarios.usuario.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<User, Long> {

    
}
