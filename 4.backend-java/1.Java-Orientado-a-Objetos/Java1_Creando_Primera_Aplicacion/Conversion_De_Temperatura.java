package Java1_Creando_Primera_Aplicacion;

public class Conversion_De_Temperatura {
    public static void main(String[] args) {
        double gradosF = 368;//(gradosC*1.8)+32;  //formula F = (gradosC*1.8)+32
        double gradosC = (gradosF-32) / 1.8;//25.9; // Formula C = (gradosF-32)/1.8


        //System.out.println("La conversion a Grados Fahrenheit es: " +gradosF);
        System.out.println("La conversion a Grados Celsius es: " +gradosC);

    }
}
