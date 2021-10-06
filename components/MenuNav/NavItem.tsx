import React, { useMemo, useState } from 'react';
import Link from 'next/link'
import { FiUser, FiClipboard, FiCalendar } from "react-icons/fi";
import { NavButton } from './style';

interface Props {
  isShowNav: boolean;
  url: string;
  type: string;
  onClick: () => void;
}

const NavItem = ({ url, type, isShowNav, onClick }: Props) => {
  const Icons = useMemo(() => {
    if (type === 'user') return <FiUser />
    else if (type === 'projectBoard') return <FiClipboard />
    else if (type === 'calendar') return <FiCalendar />
  }, [type]);

  return (
    <Link href={url}>
      <a>
        <NavButton 
          className={isShowNav ? `${type} show` : "hide"}
          onClick={onClick}
        >
          {Icons}
        </NavButton>
      </a>
    </Link>
  )
};

export default NavItem;