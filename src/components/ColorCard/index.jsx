import { Container } from "./style";

const ColorCard = ({ color, blockColor, isBlocked }) => {
  return (
    <Container color={color}>
      {color}
      <button onClick={blockColor}>
        {isBlocked ? "Desbloquear" : "Bloquear"}
      </button>
    </Container>
  );
};

export default ColorCard;
