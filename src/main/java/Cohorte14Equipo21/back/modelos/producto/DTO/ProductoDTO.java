package Cohorte14Equipo21.back.modelos.producto.DTO;

import Cohorte14Equipo21.back.modelos.categoria.CategoriaDTO;
import Cohorte14Equipo21.back.modelos.imagen.DTO.ImagenDTO;
import Cohorte14Equipo21.back.modelos.producto.Producto;
import Cohorte14Equipo21.back.modelos.tipo.TipoDTO;

import java.util.List;

public record ProductoDTO (String nombre,
                           String precio,
                           String detalles,
                           Integer stock,
                           String talle,
                           TipoDTO tipo,
                           CategoriaDTO categoria,
                           Boolean oferta,
                           String porcentajeOferta){


    public ProductoDTO(Producto producto){
        this(producto.getNombre(),
                producto.getPrecio().toString(),
                producto.getDetalles(),
                producto.getStock(),
                producto.getTalle(),
                new TipoDTO(producto.getTipo()),
                new CategoriaDTO(producto.getCategoria().getId(),producto.getCategoria().getNombre()),
                producto.getOferta().getEstaEnOferta(),
                producto.getOferta().getPorcentaje().toString());
    }
}