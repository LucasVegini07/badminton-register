import React, { useEffect, useState } from 'react';
import { ProfileCircle, Logout } from 'iconsax-react';
import { DropdownMenuContainer } from './styles';

export const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  // const [menuHeight, setMenuHeight] = useState(null);
  // const dropdownRef = useRef(null);

  useEffect(() => {
    // setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  return (
    <DropdownMenuContainer
      onClick={() => setOpen(!open)}
      // ref={dropdownRef}
    >
      <ProfileCircle size={32} />
      {open && open ? <Logout /> : ''}
    </DropdownMenuContainer>
  );
};
