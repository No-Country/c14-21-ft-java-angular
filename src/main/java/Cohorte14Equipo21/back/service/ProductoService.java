package Cohorte14Equipo21.back.service;

import Cohorte14Equipo21.back.modelos.producto.Producto;
import Cohorte14Equipo21.back.repositorios.ProductoRepository;
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
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    public Page<Producto> getPages(int page, int size, String sortBy, String sortOrder){
        Pageable pageable = PageRequest.of(page - 1, size, Sort.by(Sort.Direction.fromString(sortOrder), sortBy));
        return productoRepository.findAll(pageable);
    }
    public List<Producto> todosLasProducto(){
        return productoRepository.findAll();
    }

    public Optional<Producto> encontrarProducto(Long id){
        return productoRepository.findById(id);
    }

    public Optional<Producto> encontrarProductoEntero(Producto producto){
        return null;
    }
    public void guardar(Producto tipo){
        productoRepository.save(tipo);
    }

    public void borraraPorId(Long id){
        productoRepository.deleteById(id);
    }

    public Boolean existePorId(Long id){
        return productoRepository.existsById(id);
    }
}
