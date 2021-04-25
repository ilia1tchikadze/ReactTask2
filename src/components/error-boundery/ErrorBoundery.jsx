import React from 'react'

class ErrorBoundery extends React.Component{

    state = {
        error: null,
        errorInfo : null,
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error,
            errorInfo,
        });
    }
        
    
    render(){
       if(this.state.error){
        return(

            <div className="container d-flex flex-column">
                <h1 className="text-danger">Something Went Wrong</h1>
                <hr />
                <h4 className="">
                    <a href="/" className="text-decoration-none">TODO PAGE</a>
               </h4>

            </div>          
        )

       }
       return this.props.children
       
    }
}


export default ErrorBoundery
