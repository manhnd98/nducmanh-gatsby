import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Button,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger
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
            <div className="flex-1 flex text-base font-medium content-center items-center mobile:hidden">
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
            <div className="ml-4 hidden mobile:block">
              <Popover>
                <PopoverTrigger>
                  <Button
                    marginInlineEnd={0}
                    leftIcon={<HamburgerIcon className='m-0' marginInlineEnd="0" margin="0" />}
                    className="m-0"
                  ></Button>
                </PopoverTrigger>
                <PopoverContent w="120px">
                  <PopoverBody className="flex flex-col flex-grow">
                    <Link to="/">
                      <Button variant="link">
                        <span>Works</span>
                      </Button>
                    </Link>

                    <Link to="/posts">
                      <Button variant="link">
                        <span>Posts</span>
                      </Button>
                    </Link>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
