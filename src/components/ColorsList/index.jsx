import { useState, useEffect } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";

import ColorCard from "../ColorCard";

import { Container } from "./style";

const generateColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
};

const ColorsCard = () => {
  const [colors, setColors] = useState([]);

  const randomColors = (key) => {
    if (key === "enter") {
      if (colors.length >= 10) {
        alert("Não é possível adicionar mais cores");

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

  useEffect(() => {
    const firstColor = {
      color: generateColor(),
      isBlocked: false,
    };

    const secondColor = {
      color: generateColor(),
      isBlocked: false,
    };

    const thirdColor = {
      color: generateColor(),
      isBlocked: false,
    };

    const fourthyColor = {
      color: generateColor(),
      isBlocked: false,
    };

    const fivethyColor = {
      color: generateColor(),
      isBlocked: false,
    };

    setColors([
      firstColor,
      secondColor,
      thirdColor,
      fourthyColor,
      fivethyColor,
    ]);
  }, []);

  return (
    <>
      <h1>Pressione Enter para adicionar uma cor</h1>
      <h1>Pressione Espaço para gerar novas cores</h1>
      <KeyboardEventHandler
        handleKeys={["space", "enter"]}
        onKeyEvent={randomColors}
      />
      <Container>
        {colors.map(({ color, isBlocked }, index) => (
          <ColorCard
            key={index}
            isBlocked={isBlocked}
            color={color}
            blockColor={() => blockColor(color)}
          />
        ))}
      </Container>
    </>
  );
};

export default ColorsCard;
