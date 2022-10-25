import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

export default function Footer() {
  return (
    <>
      <S.Footer>
        <div className="content">
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
        </div>

        <div className="info">
          <p>© 2022 | EducPriority</p>
        </div>
      </S.Footer>
    </>
  );
}
