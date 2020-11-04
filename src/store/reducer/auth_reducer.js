
const INITIAL_STATE = {
    user_name :"syed usama ali",
    email : "syedusamaali@gmail.com",
}

export default (state = INITIAL_STATE,action)=>{
    console.log("auth_action==>",action)
    return state;

}