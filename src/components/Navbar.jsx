import dayjs from "dayjs";

import { links, navIcons } from "#constants";
import React, { useState, useEffect } from "react";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Dovudkhon's Portfolio</p>

        <ul>
          {links.map(({ id, name, type }) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{currentTime.format("ddd MMM D h:mm:ss A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
