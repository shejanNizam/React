/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse adipisci
        quis alias sapiente fugiat similique cumque, illum a molestias nemo
        dignissimos soluta et expedita, laudantium ex debitis sed id facilis!
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis,
        magnam explicabo laborum esse facere vero. Sequi blanditiis id cumque
        maiores ab repudiandae ex consequatur ipsa nulla, quos placeat magnam.
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3
        style={{
          fontWeight: "700",
        }}
      >
        {title}
      </h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
