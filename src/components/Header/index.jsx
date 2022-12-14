import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

export default function Header({ subtitle }) {
  return (
    <S.Header>
      <div className="content">
        <h1>EducPriority</h1>
        <p>{subtitle}</p>
      </div>
    </S.Header>
  );
}
