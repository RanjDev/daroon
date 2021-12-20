import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("authToken");

export const appApiSlice = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers) => {
      console.log("headers token", token);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", token);
      }

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      getDoctors: builder.query({
        query: () => `/doctors`,
      }),
      getDoctorById: builder.query({
        query: (id) => `/categories/${id}`,
      }),
      getAppointments: builder.query({
        query: (id) => `/appointments`,
      }),

      getAppointmentById: builder.query({
        query: (id) => `/apponitments/${id}`,
      }),

      postAppointment: builder.mutation({
        query: (data) => ({
          url: "appointments",
          method: "POST",
          body: data,
        }),
      }),
      registe: builder.mutation({
        query: (data) => ({
          url: "register",
          method: "POST",
          body: data,
        }),
      }),
      login: builder.mutation({
        query: (data) => ({
          url: "login",
          method: "POST",
          body: data,
        }),
      }),
    };
  },
});

export const {
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useGetAppointmentsQuery,
  useGetAppointmentByIdQuery,
  usePostAppointmentMutation,
  useRegisterMutation,
  useLoginMutation,
} = appApiSlice;
