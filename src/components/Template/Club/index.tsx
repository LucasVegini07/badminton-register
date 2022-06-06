import React, { useState } from "react";
import { Home, Command, Setting, Profile2User } from "iconsax-react";
import {
  Container,
  MainComponent,
  Navbar,
  Sidebar,
  Text,
} from "@develop-fapp/ui-kit-fapp";
const HomePage = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const SidebarData = [
    {
      title: "Home",
      path: "/clube",
      icon: <Home />,
    },
    {
      title: "Atletas",
      path: "/clube/atletas",
      icon: <Profile2User />,
    },
    {
      title: "Competições",
      path: "/clube/atletas",
      icon: <Command />,
    },
  ];

  return (
    <>
      <Navbar open={sidebar}>
        <Container container="fluid" alignItems="center">
          <img
            src="/logo.png"
            style={{ height: "50px", marginRight: "16px" }}
          />
          <Text variant="h3" style={{ color: "white" }}>
            Federação catarinense de Badminton
          </Text>
        </Container>
      </Navbar>
      <Sidebar
        items={SidebarData}
        onClick={showSidebar}
        open={sidebar}
        setOpen={showSidebar}
      />
      <MainComponent open={sidebar}>{children}</MainComponent>
    </>
  );
};

export default HomePage;
