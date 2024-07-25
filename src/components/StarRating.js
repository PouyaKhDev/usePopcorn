import { useState } from "react";
import PropTypes from "prop-types";

StarRating.propTypes = {
  maxRating: PropTypes.number,
  fillColor: PropTypes.string,
  borderColor: PropTypes.string,
  size: PropTypes.string,
  messages: PropTypes.array,
  defaultRating: PropTypes.number,
  setRating: PropTypes.func,
};

function StarRating({
  maxRating = 5,
  fillColor = "#FFD819",
  borderColor = "#FFD819",
  size = "2rem",
  messages = [],
  defaultRating = 0,
  setRating,
}) {
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
    fontSize: size,
    color: fillColor,
  };

  const [curRating, setCurRating] = useState(
    defaultRating > maxRating ? maxRating : defaultRating
  );
  const [tmpRating, setTmpRating] = useState(curRating);

  const handleRating = function (e) {
    const element = e.target.closest("span");
    if (!element) return;

    const elIndex = [...element.parentNode.children].findIndex(
      (el) => el === element
    );

    setCurRating(elIndex + 1);
    setRating?.(elIndex + 1);
  };

  const handleHoverEnter = function (index) {
    setTmpRating(index);
  };

  const handleHoverLeave = function () {
    setTmpRating(curRating);
  };

  const handleMessage = function (messagesArr) {
    if (!tmpRating || !messagesArr.length) return "";

    const showMessageIndex = Math.ceil(
      tmpRating / Math.round(maxRating / messagesArr.length)
    );

    return messagesArr[showMessageIndex - 1];
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle} onClick={(e) => handleRating(e, false)}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            fillColor={i < tmpRating ? fillColor : "transparent"}
            borderColor={borderColor}
            size={size}
            onMouseEnter={() => handleHoverEnter(i + 1)}
            onMouseLeave={handleHoverLeave}
          />
        ))}
      </div>
      <p style={textStyle}>{tmpRating || ""}</p>
      <p style={textStyle}>{handleMessage(messages)}</p>
    </div>
  );
}

function Star({
  fillColor = "#FFD819",
  borderColor = "#FFD819",
  size = "2rem",
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onClick = () => {},
}) {
  const iconStyle = {
    size: size,
    height: size,
    fill: fillColor,
    stroke: borderColor,
    cursor: "pointer",
  };

  return (
    <span
      role="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onclick}
    >
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
