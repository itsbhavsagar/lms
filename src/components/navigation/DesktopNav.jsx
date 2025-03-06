import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

const DesktopNav = ({ menuItems, onNavigate }) => {
  return (
    <NavigationMenu className="hidden md:flex space-x-4">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink
              onClick={() => onNavigate(item.path)}
              className="px-3 py-2 hover:bg-gray-100 rounded-md transition-colors dark:text-white dark:hover:text-black"
            >
              {item.name}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
