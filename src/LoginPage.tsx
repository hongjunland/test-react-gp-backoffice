import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default function LoginPage() {
  const clientId = process.env.REACT_APP_CLIENT_ID || "";
  const testData = async() => {
    const response = await axios.post("http://localhost:8080/api/v1/auth/login/google",{accessToken:"zxczxcxzczx"});
    // const response = await axios.post("http://localhost:8080/api/v1/auth/login",{email:"str@ing", password:"string"});
    // const response = await axios.post("http://localhost:8080/api/v1/users",{
    //     "email": "str@ing",
    //     "name": "string",
    //     "nickname": "string",
    //     "password": "string"
    //   });
    console.log(response);
    return response;
  };

  return (
    <div>
      {/* <button onClick={testData}>테스트 시작</button> */}
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={async(res: CredentialResponse) => {
            // const response = await axios({
            //     method: "post",
            //     url: "http://localhost:8080/api/v1/auth/login/google",
            //     data: { accessToken: res.credential },
            // })
            const response = await testData();
            console.log(response);
            console.log(res);
          }}
          onError={() => {
            console.log('error');
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
