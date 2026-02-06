package Java3_Listas_y_Colecciones_Datos.modelos;

import Java3_Listas_y_Colecciones_Datos.calculos.Clasificable;

public class Pelicula extends Titulo implements Clasificable {
    private String director;

    public Pelicula(String nombre, int fechaDeLanzamiento){
        super(nombre,fechaDeLanzamiento);
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    @Override
    public int getClasificacion() {
        return (int) calculaMediaEvaluaciones() / 2;
    }

    @Override
    public String toString() {
        return "Película: " + this.getNombre() +"(" + this.getFechaDeLanzamiento() + ")";
    }
}
