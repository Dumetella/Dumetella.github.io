import React from 'react';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header(): JSX.Element {
  return (
    <Container>
      <Div1>
        <NavLink>Dumetella</NavLink>
      </Div1>
      <Div2>
        <li>
          <NavLink href="#projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="#tech">Technologies</NavLink>
        </li>
        <li>
          <NavLink href="#about">About</NavLink>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Dumetella">
          <FaGithub size={'2.5em'} />
        </SocialIcons>
        <SocialIcons href="https://t.me/dumetella">
          <FaTelegram size={'2.5em'} />
        </SocialIcons>
      </Div3>
    </Container>
  )
}
