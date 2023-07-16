import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from './Spinner';
import { AuthContext } from '../../provider/AuthProvider';
const Login = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInWithGoogle()
            .then(() => {
                setIsLoading(false);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setIsLoading(false);
                setErrorMessage(error.message)
            });
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                {errorMessage && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                        <p>{errorMessage}</p>
                    </div>
                )}
                <div className="text-center">
                    <p className="text-gray-600 mb-2">Please Log In With Google</p>
                    <button onClick={handleGoogleLogin} className="btn btn-primary w-full " disabled={isLoading}>
                    {isLoading ? <Spinner /> : 'Sign in with Google'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;