package Java1_Creando_Primera_Aplicacion;

import java.util.Scanner;

public class Lectura {
    public static void main(String[] args) {
        String pelicula;
        int fechaDeLanzamiento;
        double nota;

        Scanner teclado = new Scanner(System.in);
        System.out.println("Escribe el nombre de tu pelicula favorita");
        pelicula = teclado.nextLine();
        System.out.println("Ahora escribe el año de lanzamiento");
        fechaDeLanzamiento = teclado.nextInt();
        System.out.println("Por último dinos que nota le das a esta película");
        nota = teclado.nextDouble();

        System.out.println(pelicula);
        System.out.println(fechaDeLanzamiento);
        System.out.println(nota);

    }
}
