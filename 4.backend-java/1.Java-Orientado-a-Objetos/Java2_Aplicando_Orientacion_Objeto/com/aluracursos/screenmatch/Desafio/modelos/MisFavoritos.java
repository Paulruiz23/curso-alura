package Java2_Aplicando_Orientacion_Objeto.com.aluracursos.screenmatch.Desafio.modelos;

public class MisFavoritos {
    public void adicione(Audio audio){
        if(audio.getClasificacion() >= 8){
            System.out.println(audio.getTitulo() + "Es uno de los favoritos del momento");
        } else {
            System.out.println(audio.getTitulo() + "También es uno de los favoritos");
        }
    }
}
