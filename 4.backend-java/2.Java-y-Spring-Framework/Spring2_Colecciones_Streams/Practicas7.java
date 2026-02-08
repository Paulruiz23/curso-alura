package Spring2_Colecciones_Streams;

import java.util.HashMap;
import java.util.Map;

public class Practicas7 {
    public static void main(String[] args) {
        Map<Integer, String> clientes = new HashMap<>();
        clientes.put(1, "María");
        clientes.put(2, "Marcos");
        clientes.put(3, "Ana");
        clientes.put(4, "Juana");
        clientes.put(5, "Karen");

        int buscarCliente = 9;
        if (clientes.containsKey(buscarCliente)){
            System.out.println("El cliente con el ID " + buscarCliente + " Si existe y su nombre es: " + clientes.get(buscarCliente) );
        }
        else {
            System.out.println("El cliente con el ID " + buscarCliente + " No existe");
        }
    }
}
