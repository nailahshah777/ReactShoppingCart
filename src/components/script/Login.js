import React,{Component } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/common.css';
class Login extends Component{
    constructor(props)
    {
        super(props)
        this.state={username:'',password:'',isValid:false,errors:[]}
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
        
    }
    submitForm=(e)=>{
        e.preventDefault();
        let status=this.validate(this.state)
       this.setState({isValid:status});
        setTimeout(()=>{
            console.log(this.state)
        },2000)

    }
    validate=(val)=>{
        let err=[]
        //console.log("validating function",val);
        if(val.username.trim()==='')
        {
            err.push("enter username");
        }
          if((val.username.length>30)||(val.username.length<3))
        {
            err.push("username is inalid");
        }
        if(val.username.includes('@'))
        {
            err.push("username is invalid")
        }
      if(val.password.trim()=="")
     {
         err.push("please fill password")
     }   
       if(val.password.length<8)
     {
         err.push("password length is invalid")
     }
      if(val.password.search(/[a-z]/i)<0)
     {
         err.push("at least one alphabet in password is must")
     }
      if(val.password.search(/[0-9]/)<0)
     {
         err.push("password must include atleast one digit")
     }
     if(err.length>0)
     {
     this.setState({errors:err})
     return false;
     }
     return true;



    }
render()

{
return(
<div className="container">
<h1>Login-Form</h1>
<hr/>
<form method="post" onSubmit={this.submitForm}>
<div className='mb-3'>

<input type="text" name="username" id="username" size="30" className='formControl' placeholder="username" onChange={this.handleClick}></input>    
</div>
<div className='mb-3'>

<input type="password" name="password" id="password" size="30" className='formControl' placeholder='password' onChange={this.handleClick}></input>    
</div>
<div className='md-3'>
<button type="submit" className='btn btn-success btn-lg'>Submit</button>      
</div>
</form>
</div>
        )
    }
}
export default Login;