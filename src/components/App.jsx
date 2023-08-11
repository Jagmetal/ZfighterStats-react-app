import React, { Component } from "react";
import Characterslist from "./Characterslist";
import '../styles/index.css';
import HeroList from "./HeroList";
import FightersStats from "./FightersStats";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>Z Fighters</h2>
                <div className="col-md-4">
                    <Characterslist />
                </div>
                <div className="col-md-4">
                    <HeroList />
                </div>
                    <div className="col-md-4">
                        <FightersStats />
                    </div>
            </div>
        )
    }
}

export default App;