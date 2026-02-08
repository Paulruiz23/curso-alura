package Spring2_Colecciones_Streams;

import java.util.ArrayList;
import java.util.List;

public class Practicas4 {
    public static void main(String[] args) {
        List<String> empleados = new ArrayList<>();
        empleados.add("Juan");
        empleados.add("María");
        empleados.add("Ana");
        empleados.add("Pedro");
        empleados.add("Antonio");
        System.out.println("La cantidad de empleados registrados es: " + empleados.size());
        System.out.println("El segundo empleado es: "+empleados.get(1));

    }
}
