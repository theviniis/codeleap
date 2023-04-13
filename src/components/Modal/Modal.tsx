import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import * as T from "./types";
import * as S from "./styles";

export const Modal = ({
  isOpen,
  onClose,
  children,
  ...props
}: T.ModalProps) => {
  const handleEscKey = useCallback(
    ({ key }: KeyboardEvent): void => {
      if (key === "Escape") {
        onClose && onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("keydown", handleEscKey);
    return (): void => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [handleEscKey]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.Wrapper {...props}>
      <S.Modal>{children}</S.Modal>
      <S.Backdrop onClick={() => onClose()}></S.Backdrop>
    </S.Wrapper>,
    document.body
  );
};
