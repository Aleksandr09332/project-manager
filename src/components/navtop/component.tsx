import React from 'react';
import {
  Dropdown,
  Icon,
  Nav,
  Navbar,
} from 'rsuite';
import { LangActionTypes, LangEnums } from '../../store/system/types';

export interface propsNavTopType {
  langCode: LangEnums;
  onToggleLang: (lang: LangEnums) => LangActionTypes;
}

interface ILang {
  code: LangEnums;
  name: string;
}

export function CNavTop(props: propsNavTopType) {
  const { onToggleLang, langCode } = props;
  const langs = [
    {
      code: LangEnums.Ru,
      name: 'Russian',
    },
    {
      code: LangEnums.En,
      name: 'English',
    },
  ];
  return (
    <Navbar appearance="inverse">
      <Navbar.Header>
        <h4 className="nav-top-name">getKanban</h4>
      </Navbar.Header>
      <Navbar.Body>
        <Nav />
        <Nav pullRight>
          <Dropdown
            title="Menu"
            placement="bottomEnd"
            renderTitle={(name) => <Nav.Item icon={<Icon icon="bars" />}>{name}</Nav.Item>}
          >
            <Dropdown.Item>
              <Icon icon="user" />
              New Game
            </Dropdown.Item>
            <Dropdown.Menu title="Language" pullLeft className="nav-top-menu">
              {langs.map((value: ILang) => (
                <Dropdown.Item
                  active={value.code === langCode}
                  key={value.code}
                  className="nav-top-menu-item"
                  onSelect={() => onToggleLang(value.code)}
                >
                  {value.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
}
