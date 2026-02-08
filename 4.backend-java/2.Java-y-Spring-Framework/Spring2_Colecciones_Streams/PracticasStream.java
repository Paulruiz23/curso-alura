package Spring2_Colecciones_Streams;

import java.util.List;
import java.util.stream.Collectors;

public class PracticasStream {
    public static void main(String[] args) {
//        List<String> empleados = List.of("Ana", "Juan", "Alberto", "Maria");
//
//        List<String> empleadosLetraA = empleados.stream()
//                .filter(e -> e.startsWith("A"))
//                .collect(Collectors.toList());
//        System.out.println(empleados);
//        System.out.println(empleadosLetraA);


        List<Double> valorDeVentas = List.of(200.0, 4000.0, 50.0);

        List<Double> comision = valorDeVentas.stream()
                .map(v -> v * 0.05)
                .collect(Collectors.toList());
        System.out.println(valorDeVentas);
        System.out.println(comision);

        List<Double> comisionFilter = valorDeVentas.stream()
                .map(v -> v * 0.05)
                .filter(v -> v > 12.0)
                .collect(Collectors.toList());
        System.out.println(comisionFilter);

        Double valorTotalDeVentas = valorDeVentas.stream()
                .reduce(0.0, Double::sum);
        System.out.println(valorTotalDeVentas);
    }
}
