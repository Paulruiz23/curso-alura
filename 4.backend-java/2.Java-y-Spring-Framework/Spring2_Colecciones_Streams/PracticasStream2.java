package Spring2_Colecciones_Streams;

import java.util.List;
import java.util.stream.Collectors;

public class PracticasStream2 {
    public static void main(String[] args) {
        List<Integer> numeros = List.of(2, 3, 5, 7, 11);

        List<Integer> cuadrados = numeros.stream()
                .map(c -> c*c)
                .collect(Collectors.toList());
        System.out.println("Cuadrados de los numeros: "+cuadrados);
    }
}