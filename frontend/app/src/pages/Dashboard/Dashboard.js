import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Dashboard() {
  const { nome } = useParams()

  return (
    <>
      <h1>Dashboard</h1>
      {nome && <h2 className="nome-message">Olá, {nome}!</h2>}
    </>
  )
}

export default Dashboard