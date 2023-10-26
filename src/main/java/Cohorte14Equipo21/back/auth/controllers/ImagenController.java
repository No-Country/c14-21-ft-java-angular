package Cohorte14Equipo21.back.auth.controllers;

import Cohorte14Equipo21.back.modelos.imagen.Imagen;
import Cohorte14Equipo21.back.service.ImagenService;
import Cohorte14Equipo21.back.service.cloudinary.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/imagenes")
@CrossOrigin
public class ImagenController {

    @Autowired
    private CloudinaryService cloudinaryService;
    @Autowired
    private ImagenService imagenService;

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam MultipartFile multipartFile) throws IOException {
        BufferedImage entry = ImageIO.read(multipartFile.getInputStream());

        if (entry == null) return new ResponseEntity(new String("imagen no valida"), HttpStatus.BAD_REQUEST);

        Map resultado = cloudinaryService.upload(multipartFile);
        Imagen imagen =
                new Imagen((String)resultado.get("original_filename"),
                        (String)resultado.get("url"),
                        (String)resultado.get("public_id"));

        imagenService.guardar(imagen);
        return new ResponseEntity(new String ("imagen subida"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) throws IOException {
        if(!imagenService.existePorId(id))
            return ResponseEntity.notFound().build();
        Imagen imagen = imagenService.encontrarImagen(id).get();
        Map resultado = cloudinaryService.delete(imagen.getImagenId());
        imagenService.borraraPorId(id);
        return new ResponseEntity(new String ("imagen eliminada"),HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<Imagen>> list(){
        List<Imagen> list = imagenService.list();
        return new ResponseEntity<>(list,null, org.apache.http.HttpStatus.SC_ACCEPTED);
    }
}
