package Java1_Creando_Primera_Aplicacion;

public class catalogodepeliculas {
    public static void main(String[] args) {
        System.out.println("Bienvenido(a) Screen Match");
        System.out.println("Película: Matrix");

        int fechaDeLanzamiento = 1999;
        boolean inlcuidoEnElPlan = true;
        double notaDeLaPelicula= 8.5;

        double media = (8.2 + 7.8 + 9.0)/3;

        System.out.println("La nota es: "+ media);

        String sinopsis= """
                Matrix es una paradoja
                La mejor película de fin del milenio
                Fue lanzada en:
                """ + fechaDeLanzamiento;

        System.out.println(sinopsis);

        int clasificacion = (int)(media / 2);
        System.out.println(clasificacion);




    }
}
