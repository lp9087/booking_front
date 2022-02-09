import axios from "axios";
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

  createApplication({...data}) {
    return api({
      method: "POST",
      url: `/api/application/`,
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
};

export default axios.create({
  baseURL:`/api/app_for_book/`,
  headers: {},
});
