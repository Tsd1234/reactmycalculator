import React,{Component} from 'react';


class Calc extends Component {
  
    state={
        num1:'',
        num2:'',
        result:'',
        op:"",
        status:0
     }
     buttons=(type)=>{
        let {status}=this.state;
        if(status==0){
            let org=this.state.result;
            console.log(type);
            org+=type;
            this.setState({result:org});
            
           }else{
               let org=type;
               this.setState({result:org});
           }
         

     }

         
     
     plussign=()=>{
      
         console.log("+");
         let first=this.state.result;
         this.setState({num1:first});
         this.setState({result:""});
         this.setState({op:"+"});
         this.setState({satus:1});
         //this.setState({num1:first});
        }
     minussign=()=>{
         let first=this.state.result;
         //console.log(first);
         this.setState({num1:first});
         this.setState({result:""});
         this.setState({op:"-"});
         this.setState({satus:1});

     }
     timessign=()=>{
        let first=this.state.result;
        //console.log(first);
        this.setState({num1:first});
        this.setState({result:""});
        this.setState({op:"*"});
        this.setState({satus:1});

    }
    dividesign=()=>{
        let first=this.state.result;
        //console.log(first);
        this.setState({num1:first});
        this.setState({result:""});
        this.setState({op:"/"});
        this.setState({satus:1});

    }
        equalsign=()=>{

            let {num1,num2,op,result}=this.state;
            let secnum=result;
            this.setState({num2:secnum});
            if(op=="+"){
              let sum=parseFloat(num1)+parseFloat(secnum);
              this.setState({result:sum});
              console.log(sum);
            }else if(op=="-"){
                let minus=parseFloat(num1)-parseFloat(secnum);
                this.setState({result:minus});
            }else if(op=="*"){
                let times=parseFloat(num1)*parseFloat(secnum);
                this.setState({result:times});
            }else if(op=="/"){
                let divide=parseFloat(num1)/parseFloat(secnum);
                this.setState({result:divide});
            }
          
            
    
        }
        allclear=()=>{
              this.setState({result:""});
              
        }
        plusorminusign=()=>{
            if(this.state.result.charAt(0)=="-"){
                let sum1=parseFloat(num1)+parseFloat(secnum);
                this.setState({result:sum1});
            }else{
                let minus1=parseFloat(num1)-parseFloat(secnum);
                this.timessign.setstate({result:minus1});
            }
       
        }
   

    render(){
       
        //  const handleClick=(e)=>{
        //     this.setState(this.state.result.concat(e.target.name));
        //  }
        return (
            <div className="container">
              
                    <label>{this.state.num1}{this.state.op}{this.state.num2}</label>
                    <input type="text" value={this.state.result} disabled placeholder='0'/>
    
                <div className="keypad"> 
                <button  onClick={this.allclear}className="highlight1"><h1>AC</h1></button>
                <button name="/" onClick={this.dividesign } className="highlight"><h1>&divide;</h1></button>
                <button name="7"  onClick={()=>this.buttons("7")}><h1>7</h1></button>
                <button name="8"  onClick={()=>this.buttons("8")}><h1>8</h1></button>
                <button name="9"  onClick={()=>this.buttons("9")}><h1>9</h1></button>
                <button name="*" onClick={this.timessign} className="highlight"><h1>&times;</h1></button>
                <button name="4"  onClick={()=>this.buttons("4")}><h1>4</h1></button>
                <button  name="5" onClick={()=>this.buttons("5")}><h1>5</h1></button>
                <button  name="6" onClick={()=>this.buttons("6")}><h1>6</h1></button>
                <button  name="-" onClick={this.minussign} className="highlight"><h1>&mdash;</h1></button>
                <button name="1"  onClick={()=>this.buttons("1")}><h1>1</h1></button>
                <button  name="2" onClick={()=>this.buttons("2")}><h1>2</h1></button>
                <button  name="3" onClick={()=>this.buttons("3")}><h1>3</h1></button>
                <button name="+"  onClick={this.plussign}className="highlight"><h1>+</h1></button>
                <button  name="0" onClick={()=>this.buttons("0")} id="zerostyle"><h1>0</h1></button>
                <button name="." onClick={()=>this.buttons(".")} ><h1>.</h1></button>
                <button  onClick={this.equalsign} className="highlight"><h1>=</h1></button>

              
               
                </div>
               
            </div>
        )
    }
}

export default Calc;