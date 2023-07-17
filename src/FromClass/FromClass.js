import "../App.css";
import React from 'react'
import {Component}from 'react'
class FromClass extends Component{
    state={
        Name:'',
        Dept:'',
        Rate:'',
        EmpDate:[]
    }
    changeHandel=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    
    }
    clickHandel=()=>{
    
       let obj1={
        name:this.state.Name,
        dept:this.state.Dept,
        rate:this.state.Rate
       } 
       this.state.EmpDate.push(obj1);
       this.setState({EmpDate:this.state.EmpDate})
    }
    
    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form>
                
            <label htmlFor="name">Name : </label>
            <input id='name' type="text" placeholder="Enter Name" name="Name" value={this.state.Name} onChange={this.changeHandel} required /><br/>
           <label htmlFor="dept">Department : </label>
           <input id="dept" type="text" placeholder="Enter Department" name="Dept" value={this.state.Dept} onChange={this.changeHandel} required/> <br/>
           <label htmlFor="rate">Rate : </label>
           <input id="rate" type="text" placeholder="Rate" name="Rate" value={this.state.Rate} onChange={this.changeHandel} required/> <br/>
           <button type="button" onClick={this.clickHandel}>Submit</button>
           </form>
           <div className="parent"> 
           {
            this.state.EmpDate.map((item,index)=>{
                return(
                    <> <div className="child">
                    <span>Name: {item.name} || Department: {item.dept} || Rate: {item.rate}</span></div>
                    </>

            )})}
           </div>
           </>
        )
        
    }
}
export default FromClass