package Java3_Listas_y_Colecciones_Datos.desafio;

import java.util.ArrayList;
import java.util.List;

public class TarjetaNueva {

    //Atributos

    private double limite;
    private double saldo;
    private List<Compra> listaDeCompras;





    //Constructor
    public TarjetaNueva(double limite){
        this.limite = limite;
        this.saldo = limite;
        this.listaDeCompras = new ArrayList<>();
    }


    //Metodos

    public boolean lanzarCompra(Compra compra){
        if (this.saldo >= compra.getValor()) {
            this.saldo -= compra.getValor();
            this.listaDeCompras.add(compra);
            return true;
        }
        return false;
    }

    public double getLimite() {
        return limite;
    }

    public double getSaldo() {
        return saldo;
    }

    public List<Compra> getListaDeCompras() {
        return listaDeCompras;
    }


}
