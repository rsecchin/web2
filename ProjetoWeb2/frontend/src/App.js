import MyJumbotron from './components/MyJumbotron'
import api from './services/api';
import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';

const App = () => {

  let [alunos, setAlunos] = useState([]);

  api.get('/aluno').then(result => {
    setAlunos(result.data.dados);
    console.log(alunos);
  })
  return (
    <div>
      <MyJumbotron/>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Email</th>
      <th>Criação</th>
    </tr>
  </thead>
  <tbody>
    {alunos.map(aluno => {
      return (
        <tr>
          <td>{aluno.id}</td>
          <td>{aluno.nome}</td>
          <td>{aluno.email}</td>
          <td>{aluno.criacao}</td>
        </tr>
      )
    })}
  </tbody>
</Table>
    </div>
  );
}

export default App;
