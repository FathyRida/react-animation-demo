import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import Card from "./components/Card";
import Loading from "./components/Loading/Loading";

class App extends Component {
  state = {
    toggleLogo: false,
    isLoading: true,
    Cards: [
      { id: 0, animation: "card" },
      { id: 1, animation: "card" },
      { id: 2, animation: "card" },
      { id: 3, animation: "card" },
      { id: 4, animation: "card" },
      { id: 5, animation: "card" }
    ]
  };

  onToggelLogoHandler = () => {
    this.setState({
      toggleLogo: !this.state.toggleLogo
    });
    console.log("onToggelLogoHandler function clicked");
  };
  onClickedCardHandler = card => {
    let newCards = this.state.Cards;
    newCards[card.id].animation = "card animated zoomOut ";
    this.setState({
      Cards: newCards
    });
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 3000);
    console.log("componentDidMount");
    console.log(this.state.isLoading);
  }

  render() {
    return (
      <div className="App">
        <header
          className="App-header"
          onMouseEnter={this.onToggelLogoHandler}
          onMouseLeave={this.onToggelLogoHandler}
        >
          <img
            src={logo}
            className={
              this.state.toggleLogo
                ? "static-logo animated zoomOut"
                : "static-logo"
            }
            alt="logo"
          />
        </header>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <div className="grid">
            {this.state.Cards.map(cardItem => {
              return (
                <Card
                  key={cardItem.id}
                  card={cardItem}
                  onClickCard={this.onClickedCardHandler}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
