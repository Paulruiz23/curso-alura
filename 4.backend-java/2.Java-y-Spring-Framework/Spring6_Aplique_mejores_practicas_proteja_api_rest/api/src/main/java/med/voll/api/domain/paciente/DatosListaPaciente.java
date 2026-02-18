package med.voll.api.domain.paciente;

public record DatosListaPaciente(
        Long id,
        String email,
        String nombre,
        String documentoIdentidad
) {
    public DatosListaPaciente(Paciente paciente) {
        this(paciente.getId(),paciente.getEmail(), paciente.getNombre(), paciente.getDocumentoIdentidad());
    }

}
