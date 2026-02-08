package Spring2_Colecciones_Streams;

import java.util.*;

public class Practicas1 {
    public static void main(String[] args) {
//        List<String> empleados = new ArrayList<>();
//        empleados.add("Maria");
//        empleados.add("Juan");
//        empleados.add("Marco");
//        System.out.println(empleados.get(0));

//        Set<String> productos = new HashSet<>();
//        productos.add("agua");
//        productos.add("gaseosa");
//        productos.add("boligrafo");
//        productos.add("television");
//        productos.add("agua2");
//        System.out.println(productos);

        Map<Integer, String> empleados = new HashMap<>();
        empleados.put(1, "Maria");
        empleados.put(2, "Juan");
        empleados.put(3, "Maria");
        empleados.put(1, "Flavia");
        System.out.println(empleados);

        System.out.println(empleados.get(1));

        empleados.put(7, "Alberto");
        System.out.println(empleados);
        System.out.println(empleados.get(4));
        System.out.println(empleados.get(7));

    }
}
