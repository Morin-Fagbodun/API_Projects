import { auth,provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom"


export const Auth = () => {

    const navigate = useNavigate();

const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth,provider);
    const authInfo = {
        userID: results.user.uid,
        name: results.user.displayName,
        profilePhoto: results.user.phototURL,
        isAuth: true,
    };
    localStorage.setitem("auth",JSON.stringify(authInfo));
    //console.log(results);
    navigate("/money-tracker");
};
    return (
         <div className="login-page">
            <p>Sign in with Google to continue</p> 
            <button className="login-with-google-btn" onClick={signInWithGoogle}> 
            {" "}   
            Sign In With Google    
            </button>
        </div>
    );
}; 

