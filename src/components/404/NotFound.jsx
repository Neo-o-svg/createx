import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();
  return (
    <div className="not-found">
        <h1 className="not-fount__title">
            404 | Page not found :(
        </h1>
        <button 
        onClick={() => navigate('/')}
        className="btn orange">
            Go to homepage
        </button>
    </div>
  )
}
