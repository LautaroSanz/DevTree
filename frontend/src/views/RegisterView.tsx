import { Link } from 'react-router-dom'

export default function LoginView(){
    return(
        <>  
        
        <div className="text-6xl">RegisterView</div>
        <nav>
            <Link to="/auth/login">
            No tienes cuenta? Crea tu cuenta aqui
            </Link>

        </nav>

        </>
    )
}