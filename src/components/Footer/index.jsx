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
          <Link href="">
            <a>Sobre nós</a>
          </Link>
          <Link href="">
            <a>Conteúdos</a>
          </Link>
          <Link href="">
            <a>Simulados</a>
          </Link>
          <Link href="">
            <a>Desenvolvedor do Site</a>
          </Link>
        </div>

        <div className="info">
          <p>© 2022 | EducPriority</p>
        </div>
      </S.Footer>
    </>
  );
}