package Spring2_Colecciones_Streams;

import java.util.List;

public class PracticasStream3 {
    public static void main(String[] args) {

        List<Double> preciosProductos = List.of(29.99, 49.50, 15.75, 99.99);
        Double totalGastado = preciosProductos.stream()
                .reduce( 0.0, Double::sum);
        Double impuesto = totalGastado * 0.08;
        Double totalConImpuestos = totalGastado + impuesto;


        System.out.println("Valor total antes del impuesto: " + String.format("%.2f", totalGastado));
        System.out.println("Valor total con impuesto de 8%: " + String.format("%.2f", totalConImpuestos));


    }
}
