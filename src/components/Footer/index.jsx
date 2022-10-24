import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

export default function Footer() {
  return (
    <>
      <S.Wave>
        <Image src="/imgs/wave.svg" width={1200} height={300} />
      </S.Wave>

      <S.Footer>
        <div className="links">
          <Link href="/about">
            <a>Sobre nós</a>
          </Link>
          <Link href="/contents">
            <a>Conteúdos</a>
          </Link>
          <Link href="/quests">
            <a>Simulados</a>
          </Link>
          <Link href="https://github.com/AdryelliReiz">
            <a target="_blank">Desenvolvedor do Site</a>
          </Link>
        </div>

        <div className="info">
          <p>© 2022 | EducPriority</p>
        </div>
      </S.Footer>
    </>
  );
}
