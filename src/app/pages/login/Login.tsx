import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    function handleEntrar() {
        console.log(email, password)

        setEmail('')
        setPassword('')
    }
    
    return(
        <div>
            <form >
                <label >
                    <span>Email</span>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value) } />
                </label>
                <label >
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
            </form>

            <button type="button" onClick={handleEntrar}>
                Entrar
            </button>
        </div>
    )
}