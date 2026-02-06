package Java1_Creando_Primera_Aplicacion;

import java.util.Random;
import java.util.Scanner;

public class JuegoDeAdivinacion {
    public static void main(String[] args) {
        int numeroUsuario = 0;
        int numeroAzar = new Random().nextInt(100);
        Scanner teclado = new Scanner(System.in);
        System.out.println(numeroAzar);



        for (int i = 0; i< 5; i++) {
            numeroUsuario = teclado.nextInt();

            if (numeroUsuario > numeroAzar) {
                System.out.println("El numero es menor");
            } else if (numeroUsuario < numeroAzar) {
                System.out.println("El numero es mayor");

            } else if (numeroUsuario == numeroAzar) {
                System.out.println("Felicidades, Adivinaste el número");
               break;
            }
            //numeroUsuario = teclado.nextInt();
        }


    }
}
