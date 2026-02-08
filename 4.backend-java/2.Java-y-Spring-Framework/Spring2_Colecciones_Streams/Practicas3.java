package Spring2_Colecciones_Streams;

import java.util.ArrayList;
import java.util.List;

public class Practicas3 {
    public static void main(String[] args) {
        List<String> estudiantes = new ArrayList<>();
        estudiantes.add("Juana");
        estudiantes.add("Lucas");
        estudiantes.add("Pedro");
        estudiantes.add("Antonio");
        System.out.println("La lista de estudiantes es: "+estudiantes);

        estudiantes.remove("Pedro");

        System.out.println("La lista de estudiantes corregida es: " + estudiantes);
    }
}
