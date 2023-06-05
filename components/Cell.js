import styled from "styled-components"

const StyledCell = styled.td`
    border: 1px solid gray;
    width: 100px;
    height: 100px;
    text-align: center;
`

export default function Cell({number, cells ,handleClick}){

    return <StyledCell onClick={()=>handleClick(number)}>{cells[number]}</StyledCell>
}