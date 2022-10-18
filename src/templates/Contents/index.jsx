import Header from "../../components/Header";
import Main from "./Main";
import * as S from "./styles";

export default function Contents() {
  return (
    <S.Wrapper>
      <Header subtitle="O que você está procurando?" />

      <Main />
    </S.Wrapper>
  );
}
