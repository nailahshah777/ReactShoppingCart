import React,{Component} from 'react';
import '../style/Cart.css';
import Item from './Item';
class Cart extends Component{
    constructor(props)
    {
        super(props);
    this.state={ products:[{
        id:1,
        title:'Mobile',
        description:'samsung1',
        price:50,
        quantity:1,
        img:'./images/sam1.jpeg'
        },
        {
        id:2,
        title:'Mobile',
        description:'samsung',
        price:60,
        img:'./images/sam22.png',
        quantity:1
        },
        {
        id:3,
        title:'Mobile',
        description:'samsung',
        price:80,
        img:'./images/sam3.jpg',
        quantity:1
        }
    
    
    ],
    totalItems:0,
    totalAmount:300,
    count:0,
    sum:0


}

this.ref=React.createRef();
    
    }
    
static getDerivedStateFromProps(nextProps,prevState)
{let Gtotal=0
    let summ=prevState.sum
    prevState.products.map((elem,index)=>{
       summ=parseInt(summ+ elem.quantity);
       Gtotal=parseInt(Gtotal+(elem.quantity*elem.price))
    })
    
prevState.totalItems=summ;
prevState.totalAmount=Gtotal

//console.log(prevState)
}
     inc=(id)=>
    { let count=0;
      
        this.state.products.map((ele,index)=>{
        if(ele.id===id)
        {
           ele.quantity++
          count=ele.quantity;  
         this.setState({quantity:count})
            
        
        }
    })}
    dec =(id)=>{
        let count=0;
      
        this.state.products.map((ele,index)=>{
        if(ele.id===id)
        {
           ele.quantity--
          count=ele.quantity
          
          if(count>=0){this.setState({quantity:count})}
          if(count<0)
          {this.deleted(ele.id)}
          }

    }
)}

    clearfun=(e)=>{
        e.preventDefault();
        console.log("clear",this.state.products.length);
        let emptyarray=[]
       this.setState({products:emptyarray,totalItems:0,
    totalAmount:0
    })
    const refdiv=this.ref.current;
    refdiv.style.display="none";
    }
    deleted=(id)=>{
        
       let prod= this.state.products
       prod.map((elem,index)=>{
           if(elem.id===id)
           {
               prod.splice(index,1)
           }
       })
       this.setState({products:prod})
       
    }
    render()
    {
        return(
            <>
<header className="cart-header">

<div className='row'>
<div className='col-2'>
<img src="./images/arrow.png" alt="arrow" className='arrowpic'/>    
</div>
<div className='col-7 title'>Continue Shopping</div>

<div className="col-2 cartdiv">
<p className='cart-num'>{this.state.totalItems}</p>
<img src="./images/cart2.png" alt="cart" className='cartpic'/>  

</div>
</div>
</header>


<div className='main-cart-section'>
<p className='main-cart-header'>Shopping cart</p>    
<h5 className='total-items'>You have total <span className='total-items-count'>{this.state.totalItems}</span>items in cart</h5>
</div>
<div className='my-items'>
<div div className='cart-items'>

{
this.state.products.map((elem,index)=>{
return <div key={index} className='items-info'>

<div className='item-design'>
    <img src={elem.img} alt="img" className="itempic"/>     
     </div>
    <div  className=" title-item item-design">
      <h2>{elem.title}</h2>  
      <p>{elem.description}</p> 
     </div>
     <div className="item-design">
    <i className="fas fa-minus" onClick={()=>{this.dec(elem.id)}}></i>
     <input type="text" placeholder={elem.quantity} size="2"/>
     <i className="fas fa-plus" onClick={()=>this.inc(elem.id)}></i>
     </div>
     <div className='price' className="item-design">Price:{elem.price}$</div>
     <div className="item-design">
    <i className="far fa-trash-alt" onClick={this.deleted.bind(this,elem.id)}></i>
    </div>
    
        </div>
        

})}

</div>
</div>

<div className="total" ref={this.ref}>
  <h3> Total={this.state.totalAmount}$</h3><br/>
  <button className="btn btn-warning">Checkout</button>
<button className="btn btn-danger col-md-2 offset-md-1" onClick={this.clearfun}>Clear Cart</button>
</div>
</>
        )}}



export default Cart;