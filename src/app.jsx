import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/button";
import Dialog from "./components/dialog";
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;
const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;
const palette = {
  blue: "#0066ff",
  gray: "#496057",
  pink: "#f06595",
};
function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    setDialog(false);
    console.log("확인스");
  };
  const onCancel = () => {
    setDialog(false);
    console.log("취소스");
  };
  return (
    <ThemeProvider theme={palette}>
      <>
        <AppBlock>
          <Button color="pink" size="large" onClick={onClick}>
            삭제
          </Button>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
