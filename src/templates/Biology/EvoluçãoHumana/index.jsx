import Header from "../../../components/Header";
import Main from "./Main";
import * as S from "./styles";

export default function EvoluçãoHumana() {
  return (
    <S.Wrapper>
      <Header
        subtitle={`Biologia > Evolução humana \n Atualizado: 22 de outubro de 2022 `}
      />

      <Main />
    </S.Wrapper>
  );
}
