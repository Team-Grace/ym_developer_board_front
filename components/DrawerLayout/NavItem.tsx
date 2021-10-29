import React, { useMemo } from 'react';
import Link from 'next/link';
import { NavItemContainer } from './style';
import { FiCalendar, FiClipboard, FiUser } from 'react-icons/fi';

interface itemProps {
  type: string;
  url: string;
}

interface Props {
  item: itemProps;
}

const NavItem = ({ item }: Props) => {
  const Icons = useMemo(() => {
    if (item.type === '대시보드') return <FiUser />
    else if (item.type === '투두보드') return <FiClipboard />
    else if (item.type === '캘린더') return <FiCalendar />
  }, [item]);

  return (
    <NavItemContainer>
      <Link href={item.url}>
        <a>
          {Icons}
          <p>{item.type}</p>
        </a>
      </Link>
    </NavItemContainer>
  );
};

export default NavItem;