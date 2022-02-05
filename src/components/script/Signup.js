import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/common.css';
import {withRouter} from './WrappingComponent'
class Signup extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            username:'',
            password:'',
            email:'',
            address:'',
    errors:[],
    flag:false,
    }
    this.reff=React.createRef()
    
    }
    submitForm=(e)=>{
    e.preventDefault();
        
    let status=this.validate(this.state)
    //console.log(status);
    this.setState({flag:status})
    if(this.state.flag==false)
    {
       const gg= this.reff.current;
        
    
        gg.style.display='block';
    }
    
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
     if(val.email.length=="")
     {
         err.push("enter email-id in field ")
     }
if(val.email.includes("@")===false)
{
    err.push("@ is missing")
}
if(val.email.includes('.com')==false)
{
    err.push(".com is mising in mail id");
}
if(val.address.length==0)
{
    err.push("fill your address")
}
if(err.length>0)
{
this.setState({errors:err})
return false;
}
return true;

    }
    onChanging=(e)=>{
        e.preventDefault();
       this.setState({[e.target.name]:e.target.value});
       
    }
    render(){
if(this.state.flag==true)
{
this.props.navigate('/login')
}
        return(

<div className="container">
<h1>Signup-Form</h1>
<hr/>
<form method="post" onSubmit={this.submitForm}>
<div className='mb-3'>

<input type="text" name="username" id="username" size="30" className='formControl' placeholder="username" onChange={this.onChanging}></input>    
</div>
<div className='mb-3'>

<input type="password" name="password" id="password" size="30" className='formControl' placeholder='password' onChange={this.onChanging}></input>    
</div>
<div className='mb-3'>

<input type="email" name="email" id="email" size="30" className='formControl' placeholder='E-mail' onChange={this.onChanging}></input>    
</div>
<div className='mb-3'>
    <textarea className="formControl" name="address" placeholder='address' rows="4" cols='33' onChange={this.onChanging}></textarea>
    </div>
    <div className='md-3'>
    <button type="submit" className='btn btn-success btn-lg'>Submit</button>      
    </div>

<div>
<div ref={this.reff} className='errorshow'>{
    
this.state.errors.map((elem,i)=>{
        return <div key={i}>{elem}</div>
    })
    }

</div>
</div>
</form>


</div>


        )
    }
}
export default withRouter(Signup);