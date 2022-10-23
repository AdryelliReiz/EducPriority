import equipe from "../../../../public/jsons/equipe.json";
import * as S from "./styles";

export default function Main() {
  return (
    <S.Section>
      <div className="about">
        <h3>Quem somos?</h3>

        <p>
          Olá, somos estudantes do 3° ano A-M do{" "}
          <strong>
            Colégio Estadual Marquês de Abrantes (CEMA) | Rio Real -BA.
          </strong>
        </p>
        <p>
          Esta plataforma é um projeto que foi construído pelos próprios alunos
          e coordenado pelo professor Idalecio Santos com o objetivo de aplicar
          os conhecimentos adquiridos ao longo da unidade.
        </p>
        <p>
          O projeto não possui fins lucrativos e está liberado para uso livre do
          conteúdo.
        </p>
        <p>
          Possuímos direitos de imagens dos participantes que estão enexadas ao
          website. <strong>Por favor, não fazer uso das mesmas.</strong>
        </p>
      </div>

      <div className="equipe">
        <h3>Contribuidores</h3>

        <div className="contributors">
          {equipe.squad.map((member) => (
            <div id={member.id} className="contributor-perfil">
              <div className="photo">
                <img src={member.photo} />
              </div>

              <div className="details">
                <p>{member.name}</p>
                <span>{member.task}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </S.Section>
  );
}
