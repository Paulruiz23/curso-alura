package Java1_Creando_Primera_Aplicacion;

public class Decisiones {
    public static void main(String[] args) {

        int fechaDeLanzamiento = 1999;
        boolean inlcuidoEnElPlan = true;
        double notaDeLaPelicula= 8.5;
        String tipoPlan = "plus";

        if (fechaDeLanzamiento >= 2022){
            System.out.println("Películas más populares");
        }
        else {
            System.out.println("Película Retro que aún vale la pena ver");
        }

        if(inlcuidoEnElPlan || tipoPlan.equals("plus")){
            System.out.println("Disfrute de su película");
        }
        else {
            System.out.println("Película no disponible para su plan actual");
        }

    }
}
