import { useState } from "react";

import ColorsList from "./components/ColorsList";
import Header from "./components/Header";
import Global from "./styles/global";
import Tour from "reactour";

import "react-notifications/lib/notifications.css";

const App = () => {
  const [isTourOpen, setIsTourOpen] = useState(true);

  const steps = [
    {
      selector: ".colors-list",
      content: "Esta é a lista de cores iniciais do site",
    },
    {
      selector: ".colors-list",
      content: "Você pode apertar a barra de espaço para gerar novas cores",
    },
    {
      selector: ".colors-list",
      content:
        "Você pode adicionar novos cartões de cores apertando a tecla enter, mas o limite é de 25 cartões de cores",
    },
    {
      selector: ".color-card",
      content:
        "Este é o cartão de cor, você verá a cor em RGB e um botão para bloquear esta cor, quando você apertar a barra de espaço, para gerar novas cores",
    },
    {
      selector: ".color-card",
      content:
        "Para desbloquear novamente, basta apertar no botão com cadeado e o cartão de cor poderá ser randomizado novamente",
    },
  ];

  return (
    <>
      <Global />
      <Header />
      <div id="main-container">
        <ColorsList />
        <Tour
          steps={steps}
          isOpen={isTourOpen}
          onRequestClose={() => setIsTourOpen(false)}
        />
      </div>
    </>
  );
};

export default App;
