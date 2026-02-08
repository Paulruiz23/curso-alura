package Spring2_Colecciones_Streams;

import java.util.List;
import java.util.stream.Collectors;

public class PracticasStream1 {
    public static void main(String[] args) {
        List<String> funcionarios = List.of("Ana", "Bruno", "Carlos", "Amanda", "Alice", "Daniel", "Caroline");

        List<String> nombres5caract = funcionarios.stream()
                .filter(n ->n.length() <= 5)
                .collect(Collectors.toList());
        System.out.println(nombres5caract);
    }
}
