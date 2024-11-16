To start the local host run : npm run start

Accessible Routes : 
Case 1: user is not logged in:
        /        -> login
        /register -> register
case 2: user is logged in:
        / -> tasks
        /profile -> User Profile
        /upload -> Image Uploader

DB used - Local storage
Handled all the cases in the auth

Profile page -> its a form where you can update your profile information 
Task Page -> its a Task Management page, It have create, update and delete tasks,
Upload -> its a image Upload Page, It supports a max image upload of 5 mb alongside the preview 
Register -> It registers user in the data base, edge case handled
