package Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.modelos;

import Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.calculos.Clasificacion;

public class Episodios implements Clasificacion {
    private int numero;
    private String nombre;
    private Serie serie;

    public int getTotalVisualizaciones() {
        return totalVisualizaciones;
    }

    public void setTotalVisualizaciones(int totalVisualizaciones) {
        this.totalVisualizaciones = totalVisualizaciones;
    }

    private int totalVisualizaciones;

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Serie getSerie() {
        return serie;
    }

    public void setSerie(Serie serie) {
        this.serie = serie;
    }

    @Override
    public int getClasificacion() {
        if(totalVisualizaciones > 100){
            return 4;
        }
        else {
            return 2;
        }

    }
}
