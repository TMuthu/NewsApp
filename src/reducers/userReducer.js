
//Action for open and close profile menu
export const profileAction = (menu)=>({
    type:"OpenMenu",
    ele:menu,
})
//userDB
export const userdb = [{
    username : "admin",
    email:"admin@gmail.com",
    password : "admin",
    statusmsg : "Success",
}];
//Action to store user data
export const userDB = (username,email,password)=>({
    type:"storeuser",
    username : username,
    email : email,
    password : password,
})

//Reducer for open and close profile menu
export const profileReducer = (state=userdb,action)=>{
    switch(action.type){
        case "OpenMenu":
            var profileimgcontainer = action.ele;
            if(profileimgcontainer){    
                if(window.getComputedStyle(profileimgcontainer.current).getPropertyValue('display')==='none'){
                    profileimgcontainer.current.style.display = "flex";
                }
                else{
                    profileimgcontainer.current.style.display = "none";
                }
            }
            return state;
        case "storeuser":
            var temp = {username : action.username, email : action.email, password : action.password};
            var userdbcopy = state.slice();
            var flag = true;
            for(var i=0;i<userdbcopy.length;i++){
                if(userdbcopy[i].username === action.username){
                    console.log("username same");
                    temp.statusmsg  = "Username already exists plese try again";
                    flag = false;
                    break;
                }
                if(userdbcopy[i].email === action.email){
                    console.log("password exist");
                    temp.statusmsg  = "Username already exists plese try again";
                    flag = false;
                    break;
                }
            }
            if(flag){
                temp.statusmsg  = "success";
                userdbcopy.push(temp);
            }
            else{
                userdbcopy.push(temp);
            }
            console.log(userdbcopy);
            return userdbcopy;

        default:
            return state;   
    }
}





















































