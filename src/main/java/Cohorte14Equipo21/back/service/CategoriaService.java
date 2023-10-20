package Cohorte14Equipo21.back.service;

import Cohorte14Equipo21.back.modelos.categoria.Categoria;
import Cohorte14Equipo21.back.repositorios.CategoriaRepository;
import jakarta.transaction.Transactional;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public Page<Categoria> findAllWithPagination(int page, int size, String sortBy, String sortOrder) {
        Pageable pageable = PageRequest.of(page - 1, size, Sort.by(Sort.Direction.fromString(sortOrder), sortBy));
        return categoriaRepository.findAll(pageable);
    }

    public List<Categoria> todosLasCategoria(){
        return categoriaRepository.findAll();
    }

    public Categoria findOneById(Long id){
        return categoriaRepository.findById(id).orElse(null);
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
}
