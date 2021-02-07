import { Container } from "./style";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import tinycolor from "tinycolor2";

const ColorCard = ({ color, blockColor, isBlocked }) => {
  const textColor = tinycolor(color);

  return (
    <Container color={color} textColor={textColor.isLight() ? "#000" : "#fff"}>
      {color}
      <div onClick={blockColor}>
        {isBlocked ? (
          <GiPadlock title="Bloqueado" />
        ) : (
          <GiPadlockOpen title="Livre" />
        )}
      </div>
    </Container>
  );
};

export default ColorCard;
