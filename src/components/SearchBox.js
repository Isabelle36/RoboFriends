import React from "react";

const SearchBox = ({searchChange})=>{ /* <-- props destructing here instead of props it searchchange accesing it directly*/ 
    return(
        <div className="pa2">
            <input type="search" 
            className="pa3 ba b--green bg-lightest-blue"
            placeholder="Search Robots"
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;