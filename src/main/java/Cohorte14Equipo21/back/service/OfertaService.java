package Cohorte14Equipo21.back.service;

import Cohorte14Equipo21.back.modelos.oferta.Oferta;
import Cohorte14Equipo21.back.repositorios.OfertaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class OfertaService {

    @Autowired
    private OfertaRepository ofertaRepository;

    public List<Oferta> todasLasOfertas(){
        return ofertaRepository.findAll();
    }

    public Optional<Oferta> encontrarOferta(Long id){
        return ofertaRepository.findById(id);
    }

    public void guardar(Oferta oferta){
        ofertaRepository.save(oferta);
    }

    public void borrarPorId(Long id){
        ofertaRepository.deleteById(id);
    }

    public Boolean existePorId(Long id){
        return ofertaRepository.existsById(id);
    }
}
