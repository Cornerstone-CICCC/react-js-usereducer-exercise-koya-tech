import { useReducer } from "react";
import { reducer, initialState } from "./reducer";
import "./App.css";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const divStyle = {
        backgroundColor: state.isDark ? "#111" : "#fff",
        color: state.isDark ? "#fff" : "#111",
        fontSize: `${state.fSize}px`,
        padding: "2rem",
        borderRadius: "8px",
        marginTop: "2rem",
        transition: "all 0.2s",
        minHeight: "200px",
    };

    return (
        <div style={divStyle}>
            <h2>useReducer Demo</h2>
            <p>
                This is some dummy text. The background and font size are
                controlled by the reducer.
            </p>
            <div style={{ marginTop: "1rem" }}>
                <button onClick={() => dispatch({ type: "TOGGLE_DARK" })}>
                    Toggle Dark Mode
                </button>
                <button
                    onClick={() => dispatch({ type: "INCREASE_FONT" })}
                    style={{ marginLeft: "0.5rem" }}
                >
                    Increase Font Size
                </button>
                <button
                    onClick={() => dispatch({ type: "DECREASE_FONT" })}
                    style={{ marginLeft: "0.5rem" }}
                >
                    Decrease Font Size
                </button>
            </div>
        </div>
    );
}

export default App;
