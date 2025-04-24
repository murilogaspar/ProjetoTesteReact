'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FormularioServidor() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Nome:', nome)
    console.log('Email:', email)

    // Aqui você pode enviar os dados para uma API ou outro tratamento
    router.push('/servidor') // redireciona pra listagem depois de salvar
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow space-y-4 mt-8"
    >
      <h2 className="text-2xl font-bold mb-4">Cadastrar Defensoria</h2>

      <div>
        <label className="block text-sm font-medium">Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          placeholder="Digite o nome"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded"
          placeholder="Digite o e-mail"
        />
      </div>

      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Salvar
      </button>
    </form>
  )
}
