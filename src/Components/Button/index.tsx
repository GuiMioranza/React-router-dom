import React from "react";

interface ButonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Button ({ children, onClick, ...rest }: ButonProps) {
  function onClickInterno() {
    console.log("fui clicado.");
    onClick && onClick();
  }

  return (
    <button type="button" onClick={onClickInterno} {...rest}>
      {children}
    </button>
  )
}