package Cohorte14Equipo21.back.service.cloudinary;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@Service
public class CloudinaryService {

    Cloudinary cloudinary;
    private Map<String, String> valoresMapa = new HashMap<>();

    public CloudinaryService(){
        valoresMapa.put("cloud_name", "deuesxnd0");
        valoresMapa.put("api_key", "714892488354463");
        valoresMapa.put("api_secret", "qzGt_AzupIQTidX6tVgAaCJwhgI");
        cloudinary = new Cloudinary(valoresMapa);
    }

    public Map upload(MultipartFile multipartFile) throws IOException {
        File archivo = convert(multipartFile);
        Map resultado = cloudinary.uploader().upload(archivo, ObjectUtils.emptyMap());
        archivo.delete();
        return resultado;
    }

    public Map delete(String id) throws IOException {
        Map resultado = cloudinary.uploader().destroy(id,ObjectUtils.emptyMap());
        return null;
    }

    private File convert(MultipartFile multipartFile) throws IOException {
        File archivo = new File(Objects.requireNonNull(multipartFile.getOriginalFilename()));
        FileOutputStream fo = new FileOutputStream(archivo);
        fo.write(multipartFile.getBytes());
        fo.close();
        return archivo;
    }
}
