package Cohorte14Equipo21.back.service;

import Cohorte14Equipo21.back.modelos.imagen.Imagen;
import Cohorte14Equipo21.back.repositorios.ImagenRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ImagenService {

    @Autowired
    private ImagenRepository imagenRepository;
    public List<Imagen> todosLasImagenes(){
        return imagenRepository.findAll();
    }

    public Optional<Imagen> encontrarImagen(Long id){
        return imagenRepository.findById(id);
    }

    public void guardar(Imagen tipo){
        imagenRepository.save(tipo);
    }

    public void borraraPorId(Long id){
        imagenRepository.deleteById(id);
    }

    public Boolean existePorId(Long id){
        return imagenRepository.existsById(id);
    }
}
