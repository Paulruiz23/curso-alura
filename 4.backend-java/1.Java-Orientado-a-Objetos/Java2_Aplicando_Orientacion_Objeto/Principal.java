package Java2_Aplicando_Orientacion_Objeto;

import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.calculos.CalculadoraDeTiempo;
import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.calculos.FiltroRecomendacion;
import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.modelos.Episodios;
import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.modelos.Pelicula;
import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.modelos.Serie;

public class Principal {
    public static void main(String[] args) {
        //Peliculas
        Pelicula miPelicula = new Pelicula();
        miPelicula.setNombre("Encanto");
        miPelicula.setFechaDeLanzamiento(2021);
        miPelicula.setDuracionEnMinutos(120);
        miPelicula.setIncluidoEnElPlan(true);

        Pelicula otraPelicula = new Pelicula();
        otraPelicula.setNombre("Matrix");
        otraPelicula.setFechaDeLanzamiento(1998);
        otraPelicula.setDuracionEnMinutos(180);
//
//        miPelicula.muestraFichaTecnica();
//        miPelicula.evalua(8.6);
//        miPelicula.evalua(10);
//        miPelicula.evalua(7.6);
//
//        System.out.println(miPelicula.getTotalDeLasEvaluaciones());
//        System.out.println(miPelicula.calculaMedia());
//        System.out.println(miPelicula.getNombre());

        //SERIE
        Serie casaDragon = new Serie();
        casaDragon.setNombre("La casa del dragon");
        casaDragon.setFechaDeLanzamiento(2022);
        casaDragon.setTemporadas(1);
        casaDragon.setMinutosPorEpisodios(50);
        casaDragon.setEpisodiosPorTemporada(10);
        casaDragon.muestraFichaTecnica();
        //System.out.println(casaDragon.getDuracionEnMinutos());

        CalculadoraDeTiempo calculadora = new CalculadoraDeTiempo();
        calculadora.incluye(miPelicula);
        calculadora.incluye(casaDragon);
        calculadora.incluye(otraPelicula);

        System.out.println("Tiempo necesario para ver tus titulos favoritos estas vacaciones: " + calculadora.getTiempoTotal()+ " minutos")  ;

        FiltroRecomendacion filtroRecomendacion = new FiltroRecomendacion();
        filtroRecomendacion.filtra(miPelicula);

        Episodios episodio = new Episodios();
        episodio.setNumero(1);
        episodio.setNombre("La casa Targaryen");
        episodio.setSerie(casaDragon);
        episodio.setTotalVisualizaciones(50);

        filtroRecomendacion.filtra(episodio);




    }
}
