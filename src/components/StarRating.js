import { useState } from "react";

function StarRating({ maxRating = 10 }) {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const starContainerStyle = {
    display: "flex",
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
  };

  const [curRating, setCurRating] = useState(0);
  const [tmpRating, setTmpRating] = useState(0);

  const handleRating = function (e) {
    const element = e.target.closest("span");
    if (!element) return;

    const elIndex = [...element.parentNode.children].findIndex(
      (el) => el === element
    );

    setCurRating(elIndex + 1);
  };

  const handleHoverEnter = function (index) {
    setTmpRating(index);
  };

  const handleHoverLeave = function () {
    setTmpRating(curRating);
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle} onClick={(e) => handleRating(e, false)}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            fillColor={i < tmpRating ? "#FFD819" : "transparent"}
            borderColor={"#FFD819"}
            onMouseEnter={() => handleHoverEnter(i + 1)}
            onMouseLeave={handleHoverLeave}
            width={"2.5rem"}
          />
        ))}
      </div>
      <p style={textStyle}>{tmpRating || ""}</p>
    </div>
  );
}

function Star({
  fillColor,
  borderColor,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  width,
}) {
  const iconStyle = {
    width: width,
    height: width,
    fill: fillColor,
    stroke: borderColor,
  };

  return (
    <span role="button" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={iconStyle}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </span>
  );
}

export default StarRating;
