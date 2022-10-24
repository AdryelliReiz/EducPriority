import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BsFillCaretDownFill } from "react-icons/bs";

import * as S from "./styles";

export default function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <S.Section>
        <S.Main>
          <div className="list-section">
            <h3>Áreas do conhecimento</h3>

            <ul>
              <li onClick={() => setIsMenuOpen(true)}>
                <div className="content allow">
                  <Image
                    src="/imgs/biologia.svg"
                    width="56"
                    height="56"
                    alt="biologia"
                  />

                  <p>Biologia</p>
                </div>
              </li>
              <li>
                <div className="content not-allow">
                  <Image
                    src="/imgs/fisica.svg"
                    width="56"
                    height="56"
                    alt="fisica"
                  />

                  <p>Física</p>
                </div>
              </li>
              <li>
                <div className="content not-allow">
                  <Image
                    src="/imgs/quimica.svg"
                    width="56"
                    height="56"
                    alt="quimica"
                  />

                  <p>Química</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="list-section">
            <h3>Materiais complementares</h3>

            <ul>
              <li>
                <Link href="/quests">
                  <a>
                    <div className="content allow">
                      <Image
                        src="/imgs/tests.svg"
                        width="48"
                        height="48"
                        alt="tests"
                      />

                      <p>Provas e Gabaritos</p>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </S.Main>
      </S.Section>

      {isMenuOpen && (
        <S.Menu>
          <div className="topics">
            <div className="topic">
              <h3>1° Nível</h3>
              <ul>
                <li className="not-allow">Indisponível</li>
              </ul>
            </div>
            <div className="topic">
              <h3>2° Nível</h3>
              <ul>
                <li className="not-allow">Indisponível</li>
              </ul>
            </div>
            <div className="topic">
              <h3>3° Nível</h3>
              <ul>
                <li>
                  <Link href="/biology/evolucao-humana">
                    <a>Evolução humana</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(false)}>
            <BsFillCaretDownFill size={36} color={231e24} />
          </button>
        </S.Menu>
      )}
    </>
  );
}
