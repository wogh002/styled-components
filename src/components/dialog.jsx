import React from "react";
import styled from "styled-components";
import Button from "./button";
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;
const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 5px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;
const ButtonGroup = styled.div`
  margin-top: 2rem;
  text-align: right;
`;
const ShortMarginBtn = styled(Button)`
  margin-right: 0.5rem;
`;
const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) => {
  if (!visible) return null;
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginBtn color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginBtn>
          <ShortMarginBtn color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginBtn>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};
Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};
export default Dialog;
