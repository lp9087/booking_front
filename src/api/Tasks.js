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
      url: `/api/table/${id}/`,
    });
  },

  createTable({...data}) {
    return api({
      method: "POST",
      url: `/api/table/`,
      data
    })},

  deleteTable(id) {
    return api({
      method: "DELETE",
      url: `/api/table/${id}/`,
    });
  },

  getApp() {
    return api({
      method: "GET",
      url: `/api/application/`,
    });
  },

  getBooking() {
    return api({
      method: "GET",
      url: `/api/booking/`,
    });
  },
  
  app_with_book() {
    return api({
      method: "GET",
      url: `/api/app_with_book/`,
    });
  },

  createApplication({...data}) {
    return api({
      method: "POST",
      url: `/api/application/`,
      data
    })},
  
  createBooking({...data}) {
    return api({
      method: "POST",
      url: `/api/booking/`,
      data
    })},

    deleteApp(id) {
      return api({
        method: "DELETE",
        url: `/api/application/${id}/`,
      });
    },

    deleteBooking(id) {
      return api({
        method: "DELETE",
        url: `/api/booking/${id}/`,
      });
    },

    freeTables() {
      return api({
        method: "GET",
        url: `/api/free_tables/`,
      });
    },

    app_without_book() {
      return api({
        method: "GET",
        url: `/api/app_without_book/`,
      });
    },
};

