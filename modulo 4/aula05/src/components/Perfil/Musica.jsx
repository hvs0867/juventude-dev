import PropTypes from 'prop-types';

function MusicaCard({ titulo, artista, duracao }) {
  return (
    <div className="card p-3">
      <h3>{titulo}</h3>
      <p>{artista} • {duracao}</p>
    </div>
  );
}

MusicaCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  artista: PropTypes.string,
  duracao: PropTypes.string.isRequired
};

export default MusicaCard;

const musicas = [
  { id: 3, titulo: "Sol de Domingo", artista: "Sanda maré", duracao: "3:20h" }
];

function Playlist() {
  return (
    <section>
      {musicas.map((musica) => (
        <MusicaCard
          key={musica.id}
          titulo={musica.titulo}
          artista={musica.artista}
          duracao={musica.duracao}
        />
      ))}
    </section>
  );
}