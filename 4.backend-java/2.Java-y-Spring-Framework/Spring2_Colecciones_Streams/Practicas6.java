package Spring2_Colecciones_Streams;

import java.util.HashMap;
import java.util.Map;

public class Practicas6 {
    public static void main(String[] args) {
        Map<Integer, String> clientes = new HashMap<>();
        clientes.put(1, "Paul");
        clientes.put(2, "Juan");
        clientes.put(3, "Marcos");

        System.out.println("El nombre del cliente con ID 2 es: "+ clientes.get(2));
    }
}
