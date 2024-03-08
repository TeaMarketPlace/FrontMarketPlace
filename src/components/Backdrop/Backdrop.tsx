/**This component renders a semi-transparent backdrop that covers the entire viewport.
 * It also includes event listeners for clicks and keyboard events,
 * invoking provided handlers.
 * */
import React, { useEffect } from "react";

interface BackdropProps {
  handleBackdrop: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleKeyboard: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<BackdropProps> = ({
  handleBackdrop,
  handleKeyboard,
}) => {
  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (handleBackdrop) {
        handleBackdrop((e as unknown) as React.MouseEvent<HTMLDivElement>);
      }
    };
    const keyboardHandler = (e: KeyboardEvent) => {
      if (handleKeyboard) {
        handleKeyboard((e as unknown) as React.KeyboardEvent<HTMLDivElement>);
      }
    };
    window.addEventListener("click", clickHandler);
    window.addEventListener("keydown", keyboardHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
      window.removeEventListener("keydown", keyboardHandler);
    };
  }, [handleBackdrop, handleKeyboard]);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black/[.01] z-0"
      onClick={handleBackdrop}
      id="backdrop"
    ></div>
  );
};

export default Backdrop;
