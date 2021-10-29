import React, { useMemo } from 'react';
import Link from 'next/link';
import { NavItemContainer } from './style';
import { FiCalendar, FiClipboard, FiUser } from 'react-icons/fi';
import { useCallback } from 'react';
import Router, { useRouter } from 'next/router'
import { color } from 'config/colorSystem';
import { replace } from 'lodash';

interface itemProps {
  type: string;
  url: string;
  pathname: string;
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

  const checkPath = useCallback(() => {
    if (Router.router) {
      let trasnformPathname = Router.router.pathname;

      Object.keys(Router.router.query).map(el => {
        trasnformPathname = trasnformPathname.replace(`/[${el}]`, "");
      });

      return trasnformPathname === item.pathname;
    }
  }, [item]);

  return (
    <NavItemContainer>
      <Link href={item.url}>
        <a style={{ 
            backgroundColor: `${checkPath() && color.main[500]}`,
            color: `${checkPath() && "#fff"}`
          }}
        >
          {Icons}
          <p>{item.type}</p>
        </a>
      </Link>
    </NavItemContainer>
  );
};

export default NavItem;