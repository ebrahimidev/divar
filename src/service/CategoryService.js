import http from "./service";

export function AddCategory(data) {
  return http.post("/category/store", data).then((res) => res.data);
}

export function listChid() {
  return http.get("/category/list-chid");
}

export function listCat() {
  return http.get("/category/list-cat").then((res) => res.data);
}

export function listAll() {
  return http.get("/category/list").then((res) => res.data);
}

export function listdelete(id ) {
  return http.post(`/category/delete/${id}`).then((res) => res.data);
}

export function updateCategory(data) {
  return http.patch(`/category/update/${data.id}`, data).then((res) => res.data);
}
