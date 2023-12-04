import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useState } from "react";

const Calculator = styled(Box)`
  height: 80%;
  width: 25%;
  background-color: #191c1e;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

const Body = styled(Box)`
  background-color: #28343c;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const StyledButton = styled("button")`
  border: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  font-size: 20px;
  color: #c3e7ff;
  background-color: #1e2529;
`;
const StyledButtonWrapper = styled(Box)`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;
const inputStyle = {
  outline: "none",
  width: "98%",
  height: "45%",
  backgroundColor: "#28343C",
  marginTop: "2px",
  fontSize: "60px",
  border: "none",
  borderRadius: "5px",
  color: "white",
  padding: "0 10px",
  boxSizing: "border-box",
};
const buttonColor1 = {
  backgroundColor: "#374955",
};
function App() {
  const [expression, setExpression] = useState("");
  const handleClick = (e) => {
    const newString = expression.concat(e.target.id);
    setExpression(newString);
    console.log(newString);
  };
  const handleClickAC = () => {
    setExpression("");
  };
  const handleClickX = () => {
    const newString = expression.slice(0, -1);
    setExpression(newString);
    console.log(newString);
  };
  const handleClickEqual = () => {
    try {
      const result = `${eval(expression)}`;
      setExpression(result);
      console.log(result);
    } catch (error) {
      setExpression("Error");
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    setExpression(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Body>
      <Calculator>
        <input
          style={inputStyle}
          value={expression}
          onChange={handleInputChange}
        ></input>
        <StyledButtonWrapper>
          <StyledButton
            style={{ backgroundColor: "#4A3F6F" }}
            onClick={handleClickAC}
          >
            AC
          </StyledButton>
          <StyledButton onClick={handleClick} id="(" style={buttonColor1}>
            (
          </StyledButton>
          <StyledButton onClick={handleClick} id=")" style={buttonColor1}>
            )
          </StyledButton>
          <StyledButton onClick={handleClick} id="/" style={buttonColor1}>
            /
          </StyledButton>
        </StyledButtonWrapper>
        <StyledButtonWrapper>
          <StyledButton onClick={handleClick} id="7">
            7
          </StyledButton>
          <StyledButton onClick={handleClick} id="8">
            8
          </StyledButton>
          <StyledButton onClick={handleClick} id="9">
            9
          </StyledButton>
          <StyledButton onClick={handleClick} id="*" style={buttonColor1}>
            *
          </StyledButton>
        </StyledButtonWrapper>
        <StyledButtonWrapper>
          <StyledButton onClick={handleClick} id="4">
            4
          </StyledButton>
          <StyledButton onClick={handleClick} id="5">
            5
          </StyledButton>
          <StyledButton onClick={handleClick} id="6">
            6
          </StyledButton>
          <StyledButton onClick={handleClick} id="-" style={buttonColor1}>
            -
          </StyledButton>
        </StyledButtonWrapper>
        <StyledButtonWrapper>
          <StyledButton onClick={handleClick} id="1">
            1
          </StyledButton>
          <StyledButton onClick={handleClick} id="2">
            2
          </StyledButton>
          <StyledButton onClick={handleClick} id="3">
            3
          </StyledButton>
          <StyledButton onClick={handleClick} id="+" style={buttonColor1}>
            +
          </StyledButton>
        </StyledButtonWrapper>
        <StyledButtonWrapper>
          <StyledButton onClick={handleClick} id="0">
            0
          </StyledButton>
          <StyledButton onClick={handleClick} id=".">
            .
          </StyledButton>
          <StyledButton onClick={handleClickX}>X</StyledButton>
          <StyledButton
            style={{ backgroundColor: "#004C6C" }}
            onClick={handleClickEqual}
          >
            =
          </StyledButton>
        </StyledButtonWrapper>
      </Calculator>
    </Body>
  );
}

export default App;
