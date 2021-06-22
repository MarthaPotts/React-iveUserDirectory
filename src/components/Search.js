//import
import React from "react"; 

//code here 
//function(props)
function Search({searchFormHandler}){
return(
<div className="searchForm-container">
      <form id="search">
        <label for="searchbox">Search User Directory</label>
        <input 
          type="search" 
          data-table="table-data"
          placeholder="Search/Filter" 
          onChange={e => searchFormHandler(e)}
          />
      </form>
    </div>
);
}

//export
export default Search; 