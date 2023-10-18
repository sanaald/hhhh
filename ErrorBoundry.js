import React from './react';

class ErrorBoundry extends React.component {
	constructor(props){
		super(props);
		this.state={
			hasError:false
		}

	}


 render(){
	if(this.state.hasError){
		return <h1>oops something went wrong!</h1>
	}
		} return this.props.children
	}


export default ErrorBoundry;