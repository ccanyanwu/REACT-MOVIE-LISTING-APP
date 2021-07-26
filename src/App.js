import GlobalStyle from "./GlobalStyle";

//Components
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
