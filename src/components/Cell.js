function Cell({ filled, onClick,isDisabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={filled ? "cell cell-activated" : "cell"}
      disabled={isDisabled}
    />
  );
}

export default Cell;
