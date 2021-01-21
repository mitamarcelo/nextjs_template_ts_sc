import styled from 'styled-components';

interface IULProps {
    show: boolean;
}

export const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  background: ${(props) => props.theme.colors.menuBg};
`;

export const HeaderContainer = styled.nav`
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;

export const ToggleButton = styled.li`
  display: none;
  @media(max-width: ${(props) => props.theme.sizes.screen.sm}) {
    display: block;
  }
`;

export const TransparentButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  border: none;
  font-size: 2rem;
  
  &:focus,
  svg:focus {
    outline: none;
  }
`;

export const Logo = styled.a`
  height: 70%;
  img {
    height: 50px;
  }
`;

export const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0;
`;

export const Items = styled.ul<IULProps>`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  
  li a {
    display: block;
    padding: 15px 45px;
    color: ${(props) => props.theme.colors.links};
    text-transform: uppercase;
  }

  @media(max-width: ${(props) => props.theme.sizes.screen.sm}) {
    display: ${(props) => (props.show ? 'block' : 'none')};
    background: ${(props) => props.theme.colors.left};
    position: absolute;
    top: 80px;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
`;
