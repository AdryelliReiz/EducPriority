import quests from "../../../../public/jsons/quests/evolucao-humana.json";

import * as S from "./styles";

export default function Main() {
  return (
    <S.Section>
      <div className="header">
        <h2>Resolva as questões dos simulados</h2>
      </div>

      <div className="quests-container">
        {quests.perguntas.map((quest) => (
          <div className="quest">
            <div className="quest-header">
              <h3>
                {quest.id} | {quest.tema}
              </h3>
            </div>

            <div className="quest-content">
              <p>{quest.enunciado}</p>
            </div>

            <div className="quest-alternatives">
              {quest.alternativas.map((alternative) => (
                <div className="alternative">
                  {alternative.letra}) {alternative.resposta}
                </div>
              ))}
            </div>
            <div className="quest-response">
              <a href="#respostas">Ver resposta</a>
            </div>
          </div>
        ))}
      </div>

      <div id="respostas" className="response-container">
        <h2>Respostas</h2>

        {quests.respostas.map((resposta) => (
          <div className="response">
            <p>
              <span>Pergunta:</span> {resposta.id} <span>Resposta:</span>{" "}
              {resposta.resposta}
            </p>
          </div>
        ))}
      </div>
    </S.Section>
  );
}
