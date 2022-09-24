const path = window.location.origin
let realPath;
if (path === "http://127.0.0.1:8080"){
    realPath = "http://127.0.0.1:8080/";
}else {
    realPath = path + "/vegeasy/"
}

export {realPath};