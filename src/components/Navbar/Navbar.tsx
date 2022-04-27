import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

function Navbar() {
  return (
    <nav className="w-full fixed z-10 backdrop-blur-md bg-white bg-opacity-50 dark:bg-navbar-dark dark:opacity-90">
      <div className="mx-auto max-w-screen-md">
        <div className="flex content-center p-2 w-full">
          <div className="font-bold text-lg sm:text-base mobile:text-base inline-flex content-center p-2 mr-8 dark:text-white">
            <Link to="/">
              <span>Nguyen Duc Manh</span>
            </Link>
          </div>
          <div className="flex flex-1 dark:text-white w-full justify-between mobile:justify-items-end mobile:content-end mobile:justify-end">
            <div className="flex-1 flex text-base font-medium content-center items-center mobile:hidden laptop:flex">
              <Link to="/">
                <Button variant="link">
                  <span>Works</span>
                </Button>
              </Link>

              <Link to="/posts" className="ml-8">
                <Button variant="link">
                  <span>Posts</span>
                </Button>
              </Link>
            </div>
            <ThemeToggleButton />
            <div className="ml-4 hidden mobile:block laptop:hidden">
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon />}
                  variant="outline"
                />
                <MenuList>
                  <Link to="/">
                    <MenuItem>
                        <span>Works</span>
                    </MenuItem>
                  </Link>
                  <Link to="/posts">
                    <MenuItem>
                    <span>Posts</span>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
