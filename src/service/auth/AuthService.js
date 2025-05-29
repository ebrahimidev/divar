import http from "../service";

export function RegisterService (data) {
    return http.post("/register" , data).then((res)=>res.data);
}

export function LoginService (data) {
    return http.post("/login" , data).then((res)=>res.data);
}

export function logoutService (data){
    return http.post("/logout" , data);
}
