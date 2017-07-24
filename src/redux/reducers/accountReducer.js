let account = {
  isAuthenticated:false,
  currentUsers:''
}

export default function accountReducer (state = account, action){
  switch (action.type) {
    case 'AUTH_USER':
      return {isAuthenticated:true, currentUsers:action.username}
    default:
      return state
  }
}
