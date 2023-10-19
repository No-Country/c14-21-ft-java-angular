package Cohorte14Equipo21.back.auth.controllers;

import Cohorte14Equipo21.back.service.cloudinary.CloudinaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/imagenes")
@CrossOrigin
public class ImagenController {

    @Autowired
    CloudinaryService cloudinaryService;

    @PostMapping("/upload")
    public ResponseEntity<Map> upload(@RequestParam MultipartFile multipartFile) throws IOException {
        BufferedImage entry = ImageIO.read(multipartFile.getInputStream());

        if (entry == null) return new ResponseEntity(new String("imagen no valida"), HttpStatus.BAD_REQUEST);

        Map resultado = cloudinaryService.upload(multipartFile);
        return new ResponseEntity(resultado, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map> delete(@PathVariable("id") String id) throws IOException {
        Map resultado = cloudinaryService.delete(id);
        return new ResponseEntity(resultado,HttpStatus.OK);
    }
}
