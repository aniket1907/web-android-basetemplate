
export const setupInterceptors = (api: any) => {

  api.interceptors.request.use(
    async (config: any) => {

      console.log(
        `API REQUEST: ${config.method?.toUpperCase()} ${config.url}`
      );

      // future token
      // const token = '';

      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`;
      // }

      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );

  api.interceptors.response.use(
    (response: any) => response,

    (error: any) => {

      console.log(
        'API ERROR:',
        error?.response?.data || error.message
      );

      return Promise.reject(error);
    }
  );
};