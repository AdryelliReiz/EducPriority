import Image from "next/image";

import { GrHomeRounded } from "react-icons/gr";
import { GoTasklist } from "react-icons/go";
import { MdOutlineInfo } from "react-icons/md";

import * as S from "./styles";
import Link from "next/link";

export default function Main() {
  return (
    <S.Section>
      <S.Thumb>
        <Image src="/imgs/thumb.svg" width="250" height="250" alt="Thumb" />
      </S.Thumb>

      <S.Main>
        <div className="card">
          <div className="header">
            <h3>Comece agora sua experiência em nossa plataforma</h3>
          </div>

          <Link href="/contents">
            <a>
              <button>Vamos-lá</button>
            </a>
          </Link>

          <div className="nav-bar">
            <div className="item">
              <Link href="/about">
                <a>
                  <MdOutlineInfo size={30} />
                  <p>About</p>
                </a>
              </Link>
            </div>
            <div className="item">
              <Link href="/">
                <a>
                  <GrHomeRounded size={30} />
                  <p>Home</p>
                </a>
              </Link>
            </div>
            <div className="item">
              <Link href="/quests">
                <a>
                  <GoTasklist size={30} />
                  <p>Quests</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </S.Main>
    </S.Section>
  );
}
