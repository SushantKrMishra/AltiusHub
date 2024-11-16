To start the local host run : npm run start<br/>

Accessible Routes : <br/>
Case 1: user is not logged in: <br/>
        /        -> login<br/>
        /register -> register<br/>
case 2: user is logged in:<br/>
        / -> tasks<br/>
        /profile -> User Profile<br/>
        /upload -> Image Uploader<br/>

DB used - Local storage<br/>
Handled all the cases in the auth<br/>

Profile page -> its a form where you can update your profile information <br/>
Task Page -> its a Task Management page, It have create, update and delete tasks,<br/>
Upload -> its a image Upload Page, It supports a max image upload of 5 mb alongside the preview <br/>
Register -> It registers user in the data base, edge case handled<br/>
