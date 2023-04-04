import React from 'react'

function Alert(props) {
  return (

   <div className="alert alert-warning alert-dismissible fade show" role="alert">
   
   {props.Alert}
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
</div>

  )
}

export default Alert
