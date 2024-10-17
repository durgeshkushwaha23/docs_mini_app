import React from "react";
import Card from "./Card";
import { useRef } from "react";

const Forground = () => {

  const ref = useRef(null);

  const data = [
    {
      decs: "lorem3 slflf sfnlslna fk fk  fkwnfwn kn fknwff  knfn nwfnwnfnf fn kwnf",
      filesize: "0.3mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download now", textcolor: "pink" }
    },
    {
      decs: "lorem3 slflf sfnlslna fk fk  fkwnfwn kn fknwff  knfn nwfnwnfnf fn kwnf",
      filesize: "0.3mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download ", textcolor: "green" }
    },
 
  ];

  return (
    <>
      <div  ref={ref} className="h-full flex gap-2 w-full fixed top-0 left-0 ">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
};

export default Forground;
