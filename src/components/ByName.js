//import 
import React from 'react'; 

//code here 
// <!-- dynamically generate these for each user returned from query -->
function ByName({}){
    return(

<div id="userRender-container">
  <div className="user-heading">
      <div className="thumb-holder"><a href=#>
      <img 
      data-image="Image" 
      className="thumbnail" 
      src={picture.thumbnail} 
      alt={name.first + " " + name.last + "thumbnail image"}
      />
      </a>
      </div>

      <a href=# className="heading-link"><p data-name="Name" className="name">{name.first + " " + name.last}</p></a>
  </div>
</div>
    )
}
//export 
export default ByName; 