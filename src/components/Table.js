//import 
import React from 'react'; 

//code 
// may  need to move this wrapper: was just to render it centered 
{/* <main id="table-wrapper">
    <header>
        <h1>React-ive User Directory</h1>
    </header> */}
function Table({}){
    return(
    <table id="table">
        <colgroup>
            <col style="background-color: paleturquoise" span="6" ></col>
        </colgroup>

    <thead>
        <tr>
            <th>IMG</th>
            <th>NAME</th>
            <th>LOGIN</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>DOB</th>
        </tr>
        
    </thead>

    <tbody>
        <tr>
            <td data-image="Image">image</td>
            <td data-name="Name">firstName lastName</td>
            <td data-login="Login">login</td>
            <td data-phone="Phone">phone</td>
            <td data-email="Email">email@mail.com</td>
            <td data-dob="DOB">05/21/1979</td>
        </tr>
        <tr>
            <td>image</td>
            <td>firstName lastName</td>
            <td>login</td>
            <td>phone</td>
            <td>email@mail.com</td>
            <td>05/21/1979</td>
        </tr>
        <tr>
            <td>image</td>
            <td>firstName lastName</td>
            <td>login</td>
            <td>phone</td>
            <td>email@mail.com</td>
            <td>05/21/1979</td>
        </tr>
        <tr>
            <td>image</td>
            <td>firstName lastName</td>
            <td>login</td>
            <td>phone</td>
            <td>email@mail.com</td>
            <td>05/21/1979</td>
        </tr>
        <tr>
            <td>image</td>
            <td>firstName lastName</td>
            <td>login</td>
            <td>phone</td>
            <td>email@mail.com</td>
            <td>05/21/1979</td>
        </tr>
    </tbody>

    </table>
    // </main>
    )
}

export default Table; 