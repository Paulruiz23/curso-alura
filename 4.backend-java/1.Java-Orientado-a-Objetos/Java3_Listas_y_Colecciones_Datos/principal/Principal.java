package Java3_Listas_y_Colecciones_Datos.principal;

import Java3_Listas_y_Colecciones_Datos.calculos.CalculadoraDeTiempo;
import Java3_Listas_y_Colecciones_Datos.calculos.FiltroRecomendacion;
import Java3_Listas_y_Colecciones_Datos.modelos.Episodio;
import Java3_Listas_y_Colecciones_Datos.modelos.Pelicula;
import Java3_Listas_y_Colecciones_Datos.modelos.Serie;

import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {
        Pelicula miPelicula = new Pelicula("Encanto",2021);
        miPelicula.setDuracionEnMinutos(180);
        System.out.println("Duración de la película: " + miPelicula.getDuracionEnMinutos());

        miPelicula.muestraFichaTecnica();
        miPelicula.evalua(8);
        miPelicula.evalua(5);
        miPelicula.evalua(10);
        System.out.println("Total de evaluaciones: " + miPelicula.getTotalDeEvaluaciones());
        System.out.println(miPelicula.calculaMediaEvaluaciones());


        Serie lost = new Serie("Lost",2000);
        lost.muestraFichaTecnica();
        lost.setTemporadas(10);
        lost.setEpisodiosPorTemporada(10);
        lost.setMinutosPorEpisodio(50);
        System.out.println("Duracion de la série: " + lost.getDuracionEnMinutos());

        Pelicula otraPelicula = new Pelicula("Avatar",2023);
        otraPelicula.setDuracionEnMinutos(200);

        CalculadoraDeTiempo calculadora = new CalculadoraDeTiempo();
        calculadora.incluido(miPelicula);
        calculadora.incluido(otraPelicula);
        calculadora.incluido(lost);
        System.out.println(calculadora.getTiempoTotal());

        FiltroRecomendacion filtro = new FiltroRecomendacion();
        filtro.filtra(miPelicula);

        Episodio episodio = new Episodio();
        episodio.setNumero(1);
        episodio.setSerie(lost);
        episodio.setTotalVisualizaciones(300);
        filtro.filtra(episodio);

        ///////// Nuevo
        var peliculaDeBruno = new Pelicula("El señor de los anillos",2001);
        peliculaDeBruno.setDuracionEnMinutos(180);


        ArrayList<Pelicula> listaDePelículas = new ArrayList<>();
        listaDePelículas.add(peliculaDeBruno);
        listaDePelículas.add(miPelicula);
        listaDePelículas.add(otraPelicula);

        System.out.println("Tamaño de la lista: " + listaDePelículas.size());
        System.out.println("La primera pelicula es " + listaDePelículas.get(0).getNombre());
        System.out.println(listaDePelículas);
        System.out.println("ToString de la pelicula: " + listaDePelículas.get(0).toString());




    }
}