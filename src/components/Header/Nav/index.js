import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../../utils/helpers";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <nav>
      <div className="nav-holder">
        {categories.map((category) => (
          <li
            className={`hvr-bob nav-list ${
              currentCategory.name === category.name && "navActive"
            }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
