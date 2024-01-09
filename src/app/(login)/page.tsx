"use client"

import { useState } from "react"

const Login = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })

    return (
        <div>
            <div>
                <form
                    className='flex flex-col gap-3'
                >
                    <input
                        placeholder="nome"
                        onChange={e => setUser(prev => ({ ...prev, username: e.target.value }))}
                    />
                    <input
                        placeholder="email"
                        onChange={e => setUser(prev => ({ ...prev, email: e.target.value }))}
                    />
                    <input
                        placeholder="senha"
                        onChange={e => setUser(prev => ({ ...prev, password: e.target.value }))}
                    />
                    <button>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login