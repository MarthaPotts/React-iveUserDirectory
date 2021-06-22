//import 
import React from 'react'; 

//code 
function Profile({}){
  return(

<aside id="user-profile-container">
    <div id="img-container" data-image="Image">
    <img 
    src={picture.medium}
    alt={"profile image for" + name.first + " " + name.last}
    className="picture"/>
    </div>
    <h3 id="name" data-name="Name">{name.first + " " + name.last}</h3>
      <div className="userInfo">
        <p id="login" data-login="Login">Login:{login.username}</p>
        <p id="phone" data-phone="Phone">Phone:{phone}</p>
        <p id="email" data-email="Email">Email:{email}</p>
        <p id="dob" data-dob="DOB">D.o.B:{dob.date}, age:{dob.age}</p>
      </div>
</aside>
  ); 
}

//export 
export default Profile; 