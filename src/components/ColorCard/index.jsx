import { Container } from "./style";
import { GiPadlock, GiPadlockOpen } from "react-icons/gi";
import tinycolor from "tinycolor2";

const ColorCard = ({ color, blockColor, isBlocked }) => {
  const textColor = tinycolor(color);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Container
      className="color-card"
      color={color}
      textColor={textColor.isLight() ? "#000" : "#fff"}
      onClick={() => copyToClipboard(color)}
    >
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
