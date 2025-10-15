
import React, { useState, useRef, useEffect } from "react";

export default function WeOfferDropdown({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [open]);

  return (
    <div className={`we-offer__dropdown ${open ? "open" : ""}`}>
      <div
        className={`we-offer__summary ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>

      <div
        ref={contentRef}
        className="we-offer__content--drop"
        style={{
          height: height,
          overflow: "hidden",
          transition: "height 0.5s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

