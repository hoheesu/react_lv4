import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_MOCK_SERVER,
});

// const authInstance = axios.create({
//   baseURL: process.env.REACT_MOCK_SERVER,
//   headers: {
//     authorization: `Bearer ${accessToken}`,
//   },
// });

// instance.interceptors.request.use(
//   // 요청을 보내기 전 수행되는 함수
//   function (config) {
//     console.log("인터셉터 요청 성공");
//     return config;
//   },
//   // 오류 요청을 보내기 전 수행되는 함수
//   function (error) {
//     console.log("인터셉터 요청 오류");
//     return Promise.reject(error);
//   },
// );

// instance.interceptors.response.use(
//   // 요청을 보내기 전 수행되는 함수
//   function (config) {
//     console.log("인터셉터 요청 받았습니다!!!!");
//     return config;
//   },
//   // 오류 요청을 보내기 전 수행되는 함수
//   function (error) {
//     console.log("인터셉터 응답 요청 오류 발생!!!!");
//     return Promise.reject(error);
//   },
// );

export default instance;
// export default { instance, authInstance };
