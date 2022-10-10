import Image from "next/image";

import { GrHomeRounded } from "react-icons/gr";
import { GoTasklist } from "react-icons/go";
import { MdOutlineInfo } from "react-icons/md";

import * as S from "./styles";

export default function Main() {
  return (
    <S.Section>
      <S.Header>
        <h1>EducPriority</h1>
        <p>Seu aprendizado sempre em 1° lugar</p>
      </S.Header>

      <S.Thumb>
        <Image src="/imgs/thumb.svg" width="250" height="250" alt="Thumb" />
      </S.Thumb>

      <S.Main>
        <div className="card">
          <div className="header">
            <h3>Comece agora sua experiência em nossa plataforma</h3>
          </div>

          <button>Vamos-lá</button>

          <div className="nav-bar">
            <div className="item">
              <MdOutlineInfo size={24} />
              <p>About</p>
            </div>
            <div className="item">
              <GrHomeRounded size={24} />
              <p>Home</p>
            </div>
            <div className="item">
              <GoTasklist size={24} />
              <p>Quests</p>
            </div>
          </div>
        </div>
      </S.Main>
    </S.Section>
  );
}