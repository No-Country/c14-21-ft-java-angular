package Cohorte14Equipo21.back.service;

import Cohorte14Equipo21.back.modelos.tipo.Tipo;
import Cohorte14Equipo21.back.repositorios.TipoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TipoService {

    @Autowired
    private TipoRepository tipoRepository;
    public List<Tipo> todosLosTipos(){
        return tipoRepository.findAll();
    }

    public Optional<Tipo> encontrarTipo(Long id){
        return tipoRepository.findById(id);
    }

    public void guardar(Tipo tipo){
        tipoRepository.save(tipo);
    }

    public void borrarPorId(Long id){
        tipoRepository.deleteById(id);
    }

    public Boolean existePorId(Long id){
        return tipoRepository.existsById(id);
    }
}
