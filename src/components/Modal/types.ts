import React from "react";

export interface ModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}
