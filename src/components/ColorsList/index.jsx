import { useState, useEffect } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import KeyboardEventHandler from "react-keyboard-event-handler";
import tinycolor from "tinycolor2";

import ColorCard from "../ColorCard";

import { Container } from "./style";

const generateColor = () => {
  return tinycolor.random().toRgbString();
};

const ColorsCard = () => {
  const [colors, setColors] = useState([]);

  const randomColors = (key) => {
    if (key === "enter") {
      if (colors.length >= 10) {
        NotificationManager.warning("Não é possível adicionar mais cores");

        return;
      }
      const randomColor = {
        color: generateColor(),
        isBlocked: false,
      };

      setColors([...colors, randomColor]);
    } else {
      const newColors = colors.map((color) => {
        if (!color.isBlocked) {
          return { color: generateColor(), isBlocked: color.isBlocked };
        }

        return color;
      });

      setColors(newColors);
    }
  };

  const blockColor = (color) => {
    const foundColor = colors.find((fromColors) => fromColors.color === color);
    const indexColor = colors.findIndex(
      (fromColors) => fromColors.color === color
    );

    const newColor = {
      ...foundColor,
      isBlocked: !foundColor.isBlocked,
    };

    const filterArray = colors.filter(
      (fromColors) => fromColors.color !== color
    );
    filterArray.splice(indexColor, 0, newColor);

    setColors(filterArray);
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);

    NotificationManager.success("Copiado para a área de transferência");
  };

  useEffect(() => {
    const colors = Array.from({ length: 6 }, () => ({
      color: generateColor(),
      isBlocked: false,
    }));

    setColors(colors);
  }, []);

  return (
    <>
      <KeyboardEventHandler
        handleKeys={["space", "enter"]}
        onKeyEvent={randomColors}
      />
      <Container className="colors-list">
        {colors.map(({ color, isBlocked }, index) => (
          <ColorCard
            key={index}
            isBlocked={isBlocked}
            color={color}
            blockColor={() => blockColor(color)}
            copyToClipBoard={() => copyToClipboard(color)}
          />
        ))}
      </Container>

      <NotificationContainer />
    </>
  );
};

export default ColorsCard;
