// import {
//   CredentialResponse,
//   GoogleLogin,
//   GoogleOAuthProvider,
// } from "@react-oauth/google";
import axios from "axios";
import GoogleLogin, { GoogleLoginProps, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const API_BASE_URL = 'http://localhost:8080';
  const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
  const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
  
  const handleLoginWithGoogle = async(e: React.MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    const response = await fetch(GOOGLE_AUTH_URL);
    const data = await response.json();
    console.log(data);
  }
  
  return (
    <div>
      <Link to={GOOGLE_AUTH_URL}>구글 로그인</Link>
      {/* <Link to={GOOGLE_AUTH_URL} onClick={handleLoginWithGoogle}>구글 로그인</Link> */}
    </div>
  );
}
