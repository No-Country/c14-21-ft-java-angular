package Cohorte14Equipo21.back.service;

import Cohorte14Equipo21.back.modelos.categoria.Categoria;
import Cohorte14Equipo21.back.repositorios.CategoriaRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;
    public List<Categoria> todosLasCategoria(){
        return categoriaRepository.findAll();
    }

    public Optional<Categoria> encontrarCategoria(Long id){
        return categoriaRepository.findById(id);
    }

    public void guardar(Categoria tipo){
        categoriaRepository.save(tipo);
    }

    public void borraraPorId(Long id){
        categoriaRepository.deleteById(id);
    }

    public Boolean existePorId(Long id){
        return categoriaRepository.existsById(id);
    }

    public Page<Categoria> getPages(int page, int size, String sortBy, String sortOrder) {
        Pageable pageable = PageRequest.of(page - 1, size, Sort.by(Sort.Direction.fromString(sortOrder), sortBy));
        return categoriaRepository.findAll(pageable);
    }
}
