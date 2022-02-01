import api from ".";

export const tasksApi = {
  getTable() {
    return api({
      method: "GET",
      url: `/api/table/`,
    });
  },

  getDetailTable(id) {
    return api({
      method: "GET",
      url: `/api/table/${id}`,
    });
  },

  createTable({...data}) {
    return api({
      method: "POST",
      url: `/api/table/`,
      data
    })},

  deleteTable({...data}) {
    return api({
      method: "DELETE",
      url: `/api/table/`,
      data
    });
  },
};
