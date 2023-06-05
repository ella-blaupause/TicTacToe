import styled from "styled-components";
import TicTacToe from "@/components/TicTacToe";

const Title  = styled.h1`
  text-align: center;
`

export default function HomePage() {
  return (
    <div>
      <Title>Tic Tac Toe</Title>
      <TicTacToe />
    </div>
  );
}
