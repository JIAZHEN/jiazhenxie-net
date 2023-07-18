import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

import logo from '../images/panda.jpg';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src={logo}
              className="mx-auto h-12 w-12 rounded-full"
              alt="Logo"
            />
          }
          name={AppConfig.site_name}
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Blogs</NavMenuItem>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
