import { Button } from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full fixed z-10 backdrop-blur-md bg-white bg-opacity-50 dark:bg-navbar-dark dark:opacity-90">
      <div className="mx-auto max-w-screen-md">
        <div className="flex content-center p-2">
          <div className="font-bold text-lg inline-flex content-center p-2 mr-8 dark:text-white">
            <Link to='/'>
                <span>Nguyen Duc Manh</span>
            </Link>
          </div>
          <div className="flex-1 flex text-base font-medium content-center items-center">
            <Link to='/'>
              <Button variant="link">
                <span className="text-gray-800 dark:text-inherit">Works</span>
              </Button>
            </Link>
            
            <Link to="/posts" className="ml-8">
              <Button variant="link">
                <span className="text-gray-800 dark:text-inherit">Posts</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
