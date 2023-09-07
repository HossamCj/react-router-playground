import React from 'react'
import { Link } from 'react-router-dom'



function ErrorPage() {
  return (
    <>
      <div>Page not found</div>
      <Link to="/">Back to Home page</Link>
    </>
  )
}

export default ErrorPage