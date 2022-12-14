import Header from "../../components/Header";
import Main from "./Main";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Wrapper>
      <Header subtitle="Seu aprendizado sempre em 1° lugar" />
      <S.Section>
        <Main />
      </S.Section>
    </S.Wrapper>
  );
}
