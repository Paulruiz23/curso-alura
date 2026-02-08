package Spring2_Colecciones_Streams;

import java.util.List;
import java.util.Optional;

public class PracticasStream4 {
    public static void main(String[] args) {
        List<Double> notas = List.of(7.5, 8.0, 6.5, 9.0, 10.0);
        Double totalNotas = notas.stream()
                .reduce(0.0 , Double::sum);
        //System.out.println(totalNotas);
        Double media = totalNotas/notas.size();
        System.out.println("La media de las notas es: " + media);

        Optional<Double> notaBaja = notas.stream()
                .min(Double::compareTo);
        System.out.println("La nota más baja es: " + notaBaja.get());

        Optional<Double> notaAlta = notas.stream()
                .max(Double::compareTo);
        System.out.println("La nota más alta es: " + notaAlta.get());


    }
}
