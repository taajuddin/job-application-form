import React,{Component} from 'react';

class Form extends Component{
	constructor(){
		super();
		this.state={
			username:'',
			email:'',
			password:''
			
		}
	}

	handleForm=(e)=>{
	 
                   this.setState({
                        [e.target.name]: e.target.value
                    })
                }
     // handleConfirmpassword=(e)=>{
     // 	if(e.handleConfirmpassword !==e.handleForm){
     // 		alert('error')
     // 	}
     // }  

handleSubmit=(e)=>{
	e.preventDefault()
	const formData = {
				username:this.state.username,
				email:this.state.email,
				password:this.state.password
	}
	
}


render(){
	return(
		<div >
			<h2>Apply for job</h2>
			<form onSubmit={this.handleSubmit}>
			<label htmlFor='username'>user :
				<input type="text"
				 value={this.state.username} 
				 name="username"
				  onChange={this.handleForm} />
			</label><br/>
			<label htmlFor='email'>email:
				<input type="text" 
				value={this.state.email}
				 name="email" 
				  placeholder="enter your email"
				 onChange={this.handleForm} />
			</label><br/>
			<label htmlFor='password'>password
				<input type="password" 
				value={this.state.password}
				 name="password" 
				 onChange={this.handleForm} />
			</label><br/>
			<label htmlFor='password'>confirm password
				<input type="password" 
				value={this.state.password}
				 name="password" 
				 onChange={this.handleConfirmpassword} />
			</label><br/>
			
			<input type="submit" value="Send Application" />	
			</form>
		</div>
		)
}
}
export default Form


