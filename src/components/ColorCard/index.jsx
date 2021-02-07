import { Container } from "./style";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import tinycolor from "tinycolor2";

const ColorCard = ({ color, blockColor, isBlocked, copyToClipBoard }) => {
  const textColor = tinycolor(color);

  return (
    <Container
      className="color-card"
      color={color}
      textColor={textColor.isLight() ? "#000" : "#fff"}
    >
      <div
        onClick={copyToClipBoard}
        title="Copiar para a área de transferência"
      >
        {color}
      </div>
      <div onClick={blockColor}>
        {isBlocked ? (
          <GiPadlock title="Clique para desbloquear" />
        ) : (
          <GiPadlockOpen title="Clique para bloquear" />
        )}
      </div>
    </Container>
  );
};

export default ColorCard;
