import React,{Component} from 'react';
 import "./components/Form.css"
import axios from 'axios'
class ApplicationForm extends Component{
	constructor(){
		super();
		this.state={
			name:'',
			email:'',
			phone:'',
			skills:'',
			jobTitle:'',
			experience:''
			
		}
	}

	handleForm=(e)=>{
	 if (e.target.type == 'select') {
                    this.setState({
                        [e.target.name]: e.target.value
                    })
                } else {
                    this.setState({
                        [e.target.name]: e.target.value
                    })
                }
        
}
handleSubmit=(e)=>{
	e.preventDefault()
	const formData = {
				name:this.state.name,
				email:this.state.email,
				phone:this.state.phone,
				jobTitle:this.state.jobTitle,
				experience:this.state.experience,
				skills:this.state.skills
	}
	axios.post('http://dct-application-form.herokuapp.com/users/application-form',formData)
	.then((response) => {
               //console.log(response.data)
                if(response.data.hasOwnProperty('errors')){
                	alert(response.data.message)
                }
                else{
                	alert('your application has been submitted')
                	this.setState({
                		name:'',
						email:'',
						phone:'',
						jobTitle:'',
						experience:'',
						skills:''
                	})
                }
            })
            .catch((err) => {
                alert(err)
            })
    
}

render(){
	return(
		<div >
			<h2>Apply for job</h2>
			<form onSubmit={this.handleSubmit}>
			<label htmlFor='name'>Full name :
				<input type="text"
				 value={this.state.name} 
				 name="name"
				  onChange={this.handleForm} />
			</label><br/>
			<label htmlFor='email'>email:
				<input type="text" 
				value={this.state.email}
				 name="email" 
				  placeholder="enter your email"
				 onChange={this.handleForm} />
			</label><br/>
			<label htmlFor='phone'>Contact Number:
				<input type="text" 
				value={this.state.phone}
				 name="phone" 
				 placeholder="enter your contact number"
				 onChange={this.handleForm} />
			</label><br/>
			<label htmlFor='jobTitle'> Applying for job	
			<select name="jobTitle" onChange={this.handleForm}>
				<option value="">select</option>
				  <option value="Front-End Developer">Front-End Developer</option>
				  <option value="Node.js Developer">Node.js Developer</option>
				  <option value="MEAN Stack Developer">MEAN Stack Developer</option>
				  <option value="FULL Stack Developer">FULL Stack Developer</option>
			</select>
			</label><br/>
			<label htmlFor="experience" className="label">experience
					<input type="text"
					 value={this.state.experience}
					  name="experience" 
					   placeholder="like(2 years , 3 months)"
					  onChange={this.handleForm} />
					  
			</label><br/>
			<label htmlFor="skills" className="label">Skills
					<textarea type="text"
					 value={this.state.skills}
					  name="skills" 
					  onChange={this.handleForm}>
					  </textarea>
			</label><br/>
			<input type="submit" value="Send Application" />	
			</form>
		</div>
		)
}
}
export default ApplicationForm


