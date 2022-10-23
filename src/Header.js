import { useEffect, useState } from 'react';



function header(props){
    useEffect(()=>{
        props.setUser("Joao");
    })

function abrirModalCriarConda(e){
    e.preventDefault();
    alert('criar conta!');
}


   
    return(

        <div className='header'>
<div className="center">
<div className='header_logo'>
  <a href="">< img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg" /></a>
</div>
{
  (props.user)?
  <div className="header_logadoInfo">
    <span> Ola, <b>{props.user}</b></span>
    <a href="">Postar</a>
    </div>
  :
  <div className="header_loginForm">
  <form>
    <input type="text" placehoder="login..." />
    <input type="password" placeholder="senha..." />
    <input type="submit" name="acao" value="logar" />
      </form>
      <div className="btn_CriarConta">
 <a onClick={((e)=>abrirModalCriarConda(e))} href="#"> Criar Conta!</a> 
 </div>
    </div>
}
    </div>
    </div>
    )

}
export default header;


    