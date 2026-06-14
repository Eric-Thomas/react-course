import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, handleReset },
  ref,
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal" onClose={handleReset}>
      <h2>You {timeRemaining > 0 ? "Won!" : "Lost :("}</h2>
      <p>
        Target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{(timeRemaining / 1000).toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={handleReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
