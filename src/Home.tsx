import { Link } from "react-router-dom";

export default function HomePage(){
    return (<div>
        <h1>Home</h1>
        <Link to="/login">로그인 화면으로 이동</Link>
    </div>)
}