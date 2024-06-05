import "./styles/style.scss";
import Layout from "./components/layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MinecraftJavaBedrockEdition from "./pages/minecraft-java-bedrock-edition";
import MinecraftDungeons from "./pages/minecraft-dungeons";
import MinecraftLegends from "./pages/minecraft-legends";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            index
            path="/minecraft-java-and-bedrock"
            element={<MinecraftJavaBedrockEdition />}
          />
          <Route
            index
            path="/minecraft-dungeons"
            element={<MinecraftDungeons />}
          />
          <Route
            index
            path="/minecraft-legends"
            element={<MinecraftLegends />}
          />
          {/* <Route path="phones">
            <Route index element={<Phones />} />
            <Route path="new" element={<PhonesCreate isEdit={false} />} />
            <Route path=":id" element={<PhonesCreate isEdit={true} />} />
          </Route>
          <Route path="games">
            <Route index element={<Games />} />
            <Route path=":gameName" element={<GameInfo />} />
          </Route>
          </Route>
          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
