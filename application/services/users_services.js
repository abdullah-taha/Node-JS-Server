const axios = require('axios');

/*
function to check if user exists by it's id. 
parameters:
  id: the id of the user
return: 
  returns true if the user exists. false otherwise
*/
async function check_user_by_id(id) {
  try {
    //get all the users
    const user_info = await axios.get('https://jsonplaceholder.typicode.com/users');
    //check if id exists
    const found = user_info.data.some(member => member.id === parseInt(id));
    if (found) return user_info.data;
    else return false;

  } catch (error) {
    console.error(error);
    return false;
  }
}


/*
function to fetch users from the related endpoinst and return a list of users
*/
async function get_users() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //return only users names
    user_list = response.data.map(user => user.name);
    return user_list;
  }
  catch (error) {
    console.log(error);
    return error;
  }

}


/*
function to create a user
paramters:
  params: a dictionary holding user informations
*/
async function create_user(params) {
  try {
    let response = await axios.post('https://jsonplaceholder.typicode.com/users', params);
    return response;
  }
  catch (error) {
    console.log(error);
    return error;
  }
}

async function update_user(id, params) {
  try {
    let response = await axios.put('https://jsonplaceholder.typicode.com/users/' + id, params);
    return response;
  }
  catch (error) {
    console.log(error);
    return error;
  }
}

//export functions
exports.get_users = get_users;
exports.check_user = check_user_by_id;
exports.create_user = create_user;
exports.update_user = update_user;

