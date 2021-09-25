
#WyteNoMore BackEnd

Run the command pip3 install -r requirements.txt. This should install all the required dependencies.

#API endpoint request example
url :http://127.0.0.1:5000/api/auth  // for login
body :{
    "cell_number":"0727082628",
    "password":"12345",
}

______________
url :http://127.0.0.1:5000/api/users  // for registering user
{
    "name":"Piet",
    "surname":"Mahlangu",
    "gender":"male",
    "cell_number":"0727082628",
    "id":"1234567891082",
    "password":"12345",
    "type":"Patients" // type can be "Patients" or "driver" or "helper"
}