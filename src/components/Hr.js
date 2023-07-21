const { noPadding = false, ariaHidden = true } = {};

function Hr() {
  return (
    <div className={`max-w-4xl mx-auto ${noPadding ? "px-0" : "px-4"}`}>
      <hr className="border-orange-500" aria-hidden={ariaHidden} />
    </div>
  );
}

export default Hr;
