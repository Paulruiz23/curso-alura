package Spring2_Colecciones_Streams;

import java.util.*;

public class Practicas5 {
    public static void main(String[] args) {
        List<String> eventos = new ArrayList<>();

        eventos.add("IA Conference");

        eventos.add("AI Summit");

        eventos.add("DevFest");

        eventos.add("Cloud Expo");

        eventos.add("IA Conference");

        eventos.add("DevFest");

        System.out.println(eventos);

        Set<String> eventosUnicos = new HashSet<>(eventos);
        System.out.println(eventosUnicos);

    }
}
