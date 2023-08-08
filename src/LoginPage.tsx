// import {
//   CredentialResponse,
//   GoogleLogin,
//   GoogleOAuthProvider,
// } from "@react-oauth/google";
import axios from "axios";
import GoogleLogin, { GoogleLoginProps, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";

export default function LoginPage() {
  const clientId = process.env.REACT_APP_CLIENT_ID || "";
  // const testData = async(res: CredentialResponse) => {
  //   console.log(res);
  //   // const response = await axios.post("http://localhost:8080/login/oauth2/code/google",res);
  //   const response = await axios.get("http://localhost:8080/api/v1/auth/user/profile", res);
  //   // const response = await axios.post("http://localhost:8080/api/v1/auth/login",{email:"str@ing", password:"string"});
  //   // const response = await axios.post("http://localhost:8080/api/v1/users",{
  //   //     "email": "str@ing",
  //   //     "name": "string",
  //   //     "nickname": "string",
  //   //     "password": "string"
  //   //   });
  //   console.log(response);
  //   return response;
  // };
  const handleSuccess = async(response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
    const authCode = response.code;
    try {
      // 이 코드를 백엔드로 전송
      const serverResponse = await axios.post('http://localhost:8080/api/auth/google', {
        code: authCode
      });

      // 서버에서 반환된 JWT나 다른 응답을 처리
      console.log(serverResponse.data);

      // 예를 들어 JWT 토큰을 로컬 저장소에 저장할 수 있습니다.
      localStorage.setItem('token', serverResponse.data.token);

    } catch (error) {
      console.error('Error sending auth code to server:', error);
    }
  };

  const handleError = (error: GoogleLoginProps) => {
    console.error('error');
  };
  return (
    <div>
       <GoogleLogin
        clientId={clientId}
        onSuccess={handleSuccess}
        onFailure={handleError}
        responseType="code"
      />
      {/* <button onClick={testData}>테스트 시작</button>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={async(res: CredentialResponse) => {
            // const response = await axios({
            //     method: "post",
            //     url: "http://localhost:8080/api/v1/auth/login/google",
            //     data: { accessToken: res.credential },
            // })
            const response = await testData(res);
            console.log(response);
            console.log(res);
          }}
          onError={() => {
            console.log('error');
          }}
        />
      </GoogleOAuthProvider> */}
    </div>
  );
}
