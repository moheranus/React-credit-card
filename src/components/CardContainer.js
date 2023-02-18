import { useState } from "react";
import "./cardContainer.css";
function CardContainer() {
  const [number, SetNumber] = useState("0000 0000 0000 0000");
  const [name, SetName] = useState(" Daniel Shobe");
  const [date, SetDate] = useState("");
  const [cvc, SetCvc] = useState("");
  const [focus, SetFocus] = useState("");
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="cardFront">
            <div className="label">
              <div className="label1">
                <div className="name">
                  <h2>INVESTOR</h2>
                </div>
                <div className="logo">
                  <h2>D</h2>
                </div>
              </div>
              <div className="label2">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
              </div>
              <div className="label3">
                <div className="number">
                  <p>{number}</p>
                </div>
                <div className="name">
                  <p>{name}</p>
                </div>
                <div className="date">
                  <p>{date}</p>
                </div>
              </div>
            </div>
            <div className="layer"></div>
            <div className="layer2"></div>
          </div>
          <div className="cardBack">
            <div className="blackdiv"></div>
            <div className="blackdiv2">
              <div className="csv">
                <p>{cvc}</p>
              </div>
            </div>
          </div>
          <div className="skew"></div>
        </div>
        <div className="right">
          <div className="formContainer">
            <div className="form">
              <div className="formHolder">
                <div className="row">
                  <label for="name">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Card number"
                    name="number"
                    onChange={(e) => {
                      const spaced = e.target.value;
                      console.log(spaced);
                      if (spaced.length < 5) {
                        const prefix =
                          `${spaced}${"0".repeat(4 - spaced.length)}` +
                          `   ${"0".repeat(4)}`.repeat(3);
                        SetNumber(prefix);
                      } else if (spaced.length > 4 && spaced.length < 9) {
                        const prefix =
                          `${spaced.slice(0, 4)} ${spaced.slice(4)}${"0".repeat(
                            8 - spaced.length
                          )}` + `  ${"0".repeat(4)}`.repeat(2);
                        SetNumber(prefix);
                      } else if (spaced.length > 8 && spaced.length < 13) {
                        const prefix =
                          `${spaced.slice(0, 4)} ${spaced.slice(
                            4,
                            8
                          )} ${spaced.slice(8)}${"0".repeat(
                            12 - spaced.length
                          )}` + `   ${"0".repeat(4)} `.repeat(1);
                        SetNumber(prefix);
                      } else if (spaced.length > 12 && spaced.length < 17) {
                        const prefix = `${spaced.slice(0, 4)} ${spaced.slice(
                          4,
                          8
                        )} ${spaced.slice(8, 12)} ${spaced.slice(
                          12
                        )}${"0".repeat(16 - spaced.length)}`;
                        SetNumber(prefix);
                      }
                    }}
                  ></input>
                </div>
                <div className="row">
                  <label for="name">User Name</label>
                  <input
                    style={{
                      marginLeft: "35px",
                    }}
                    type="text"
                    className="form2"
                    name="name"
                    placeholder="User name"
                    onChange={(e) => {
                      SetName(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                  ></input>
                </div>
                <div className="row">
                  <label for="name">Expire Date</label>
                  <input
                    style={{
                      marginLeft: "35px",
                    }}
                    type="date"
                    className="form2"
                    name="name"
                    placeholder="User name"
                    onChange={(e) => {
                      SetDate(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                  ></input>
                </div>
                <div className="row">
                  <label for="name">CVV</label>

                  <input
                    type="tel"
                    style={{
                      marginLeft: "85px",
                    }}
                    name="cvc"
                    className="card"
                    value={cvc}
                    onChange={(e) => {
                      SetCvc(e.target.value);
                    }}
                    onFocus={(e) => SetFocus(e.target.name)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardContainer;
