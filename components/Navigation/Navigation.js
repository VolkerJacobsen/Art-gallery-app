import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: var(--navigation-height);
  background-color: black;
  border: 2px solid black;
`;

const UnorderedList = styled.ul`
  display: flex;
  height: 100%;
  gap: 2px;
`;

const ListItem = styled.li`
  list-style: none;
  flex-grow: 1;
  text-align: center;
  height: 100%;
  background-color: ${(props) => (props.active ? "darkgrey" : "lightgrey")};

  &:hover {
    background-color: ${(props) =>
      props.active
        ? "color-mix(in srgb, darkgrey 80%, white);"
        : "color-mix(in srgb, lightgrey 80%, white);"};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: black;
`;

const linksData = [
  {
    id: 1,
    title: "Spotlight",
    href: "/",
  },
  {
    id: 2,
    title: "Art Pieces",
    href: "/art-pieces",
  },
];

export default function Navigation() {
  const router = useRouter();

  return (
    <Nav>
      <UnorderedList>
        {linksData.map((linkData) => {
          const isActive = router.pathname === linkData.href;

          return (
            <ListItem key={linkData.id} active={isActive}>
              <StyledLink href={linkData.href}>
                <span>{linkData.title}</span>
              </StyledLink>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Nav>
  );
}
