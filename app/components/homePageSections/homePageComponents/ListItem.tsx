"use client";

import { useState } from "react";

interface ListItemProps {
  title?: string;
  onClick?: () => void;
}

export const list = [
  {
    id: 1,
    title: "Technology analysis of CAD files",
  },
  {
    id: 2,
    title: "Generate automatic offer",
  },
  {
    id: 3,
    title: "Integration with applications",
  },
];

const ListItem: React.FC<ListItemProps> = ({ title, onClick }) => {
    const [active, setActive] = useState<number>();

  return (
      <ul className='flex justify-between pr-64 pt-12 text-xl'>
          {list.map((item) => {
              return (
                <li className={`${active === item.id ? 'test-black' : 'text-neutral-500'}`}>
              <button
                key={item.id}
                onClick={() => {
                  if (active === item.id) {
                    setActive(0);
                  } else {
                    setActive(item.id);
                  }
                }}
              >
                {item.title}
              </button>
              <span className={`${active === item.id ? 'block w-full h-[3px] text-yellow-300' : 'hidden'}`}></span>
              </li>
            );
          })}
      </ul>
  );
};

export default ListItem;
