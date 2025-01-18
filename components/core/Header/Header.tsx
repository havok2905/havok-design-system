import React, {
  FC,
  HTMLAttributes,
  useState
} from 'react';
import { Logo } from '../Logo';
import classNames from 'classnames';
import { IconButton } from '../IconButton';
import { SideDrawer } from '../SideDrawer';

export interface MenuHeaderItem {
  label: string;
  to: string;
}

export interface HeaderMenu {
  items: MenuHeaderItem[];
}

export interface HeaderTitle {
  text: string;
  to?: string;
}

export interface HeaderProps {
  headerTitle: HeaderTitle;
  menu: HeaderMenu;
}

export const Header: FC<HeaderProps & HTMLAttributes<HTMLElement>> = ({
  headerTitle,
  menu,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const classList = {
    'havok-design-system-header': true,
    [props.className ?? '']: true
  };

  const classString = classNames(classList);

  const getNav = () => {
    if (!menu.items.length) {
      return null;
    }

    return (
      <nav className="havok-design-system-header-nav">
        <IconButton
          iconType="menu"
          isDarkMode
          onClick={() => {
            setIsOpen(true);
          }}
          titleText="menu"
        />
      </nav>
    );
  };

  const getTitle = () => {
    return (
      <>
        {
          headerTitle.to ? (
            <a
              className="havok-design-system-header-title-link"
              href={headerTitle.to}
            >
              <Logo displaySize="thumbnail"/>
            </a>
          ) : (
            <Logo displaySize="thumbnail"/>
          )
        }
        <h1 className="havok-design-system-header-title">
          {
            headerTitle.to ? (
              <a
                className="havok-design-system-header-title-link"
                href={headerTitle.to}
              >
                {headerTitle.text}
              </a>
            ) : (
              <>
                {headerTitle.text}
              </>
            )
          }          
        </h1>
      </>
    );
  };

  return (
    <>
      <header
        {...props}
        className={classString}
      >
        <div className="havok-design-system-header-title-content">
          {getTitle()}
        </div>
        {getNav()}
      </header>
      <SideDrawer
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        portalElement={document.body}
        preserveScroll={false}
      >
        {
          menu.items.map((navItem) => {
            return (
              <a
                className="havok-design-system-header-nav-link"
                href={navItem.to}
              >
                {navItem.label}
              </a>
            )
          })
        }
      </SideDrawer>
    </>
  );
};
