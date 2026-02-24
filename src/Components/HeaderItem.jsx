import React from "react";

function HeaderItem({ name, Icon, onClick }) {
  return (
    <div
      className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2"
      onClick={onClick}
    >
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}

export default HeaderItem;
