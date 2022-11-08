/**
 * foco do app:
 * 1 - listar listas de notas
 *    - BRL
 *      - 200x
 *      - 300y
 * 2 - Auth se quiser salvar os dados e salvar localmente claro
 * 3 - em cada bloco de conversão individual tem que ser possivel editar e apagar
 * 
 * 
 * 4 - opcional? mostrar grafico de histórico (talvez em um pop up com as duas opções de editar e apagar nele também)
 * 
 */

import { useState } from 'react'
import './App.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Home from "./pages/Home";
import Notfound from "./pages/404";
import Login from "./pages/Login";

let isAuth = false;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="user" element={ isAuth ? <Navigate to="/" replace /> : <Login />  } >
          <Route path="teste" element={<Home />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
