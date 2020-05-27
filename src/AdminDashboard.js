import React from 'react'
import axios from 'axios'
import moment from 'moment'
import Popup from "reactjs-popup"

class Dashboard extends React.Component{
	constructor(){
		super()
		this.state={
			applicants: [],
			selectedJob:'Front-End Developer',
			jobTitles:['Front-End Developer','Node.js Developer','MEAN Stack Developer','FULL Stack Developer']
			
		}
	}

	componentDidMount(){
		axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
		.then((response)=>{
			const data=response.data;
			this.setState({ applicants : data })

		})
		
	}

	changeTitle = (title) => {
		this.setState({selectedJob:title})
	}

	render(){
			return (
				<div>
					<h1>Addmission Dashboard</h1>
					<div className="div1">
						{this.state.jobTitles.map((title)=>{
							return <p className="div" onClick={()=>{
								this.changeTitle(title)
							}}>{title}</p>
						})}
						
					</div>
					<h1>{this.state.selectedJob}s</h1>
					<p>List of condidates applied for {this.state.selectedJob} job</p>
						<div>
					
					
					<table border="1" cellspacing="0">
						<thead>
							<tr>
								<th>Name </th>
								<th>Technical Skills </th>
								<th>Experience</th>
								<th>Applied Date</th>
								<th>View Details</th>
								<th>update Application status</th>
							</tr>

						</thead>	
						<tbody>
							{
								this.state.applicants.filter(user=> user.jobTitle===this.state.selectedJob).map(user=>{
											return(<tr>
												<td>{user.name}</td>
												<td>{user.skills}</td>
												<td>{user.experience}</td>
												<td>{moment(user.createdAt).format('L')}</td>
												<td><Popup trigger={<button className="btn">show Details</button>} position="center center	">{
													close=>(
														<div>
															<a className="close" onClick={close}>
																&times;
															</a>
																<h1>{user.name} profile</h1>
																<p>Contact Number{user.phone}</p>
																<p>Email  {user.email}</p>
																<p>Skills {user.skills}</p>
																<p>Experience {user.experience}</p>
															
														</div>
														)
												}
													
												</Popup></td>
												<td>
												{user.status=='applied' ?
													( 
														<div>
															<button className="btn1">shorlisted</button>
															<button className="btn2">Rejected</button>
														</div>
													) :(
														<div>
															{user.status=='shortlisted'?
															(	
																<div>
																	<button className='btn1'>shortlisted</button>
																</div>
															):
															(
																<div>
																	<button className='btn2'>rejected</button>
																</div>
															)
														
														}
														</div>
														)
												}
											</td>
											</tr>
											)
										})
								
							}
						</tbody>
						
					</table><hr/>
					</div>
				</div>
				)

	}
}
export default Dashboard