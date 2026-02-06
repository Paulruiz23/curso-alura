package Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.calculos;

import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.modelos.Pelicula;
import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.modelos.Serie;
import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.modelos.Titulo;

public class CalculadoraDeTiempo {

    private int tiempoTotal;

    public int getTiempoTotal() {
        return tiempoTotal;
    }

    public void incluye(Titulo titulo){
       this.tiempoTotal += titulo.getDuracionEnMinutos();

    }
}
