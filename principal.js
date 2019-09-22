
import AulasComponente from "./aulas.componente.js"
// fetch('conteudo.json', {method: "GET"}).then((res) => {
// 	if(res.ok) return res.json();
// 	throw res;
// })
// .then(renderizarConteudo)
// .catch((err)=> {alert('Ocorreu um problema ao obter o conteudo')})


window.onload =()=>{
	setTimeout(()=>{
	var menus = [...document.querySelectorAll('a[data-componente]')];
	for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector('main').innerHTML = "";
		document.querySelector('main').appendChild(document.createElement(`${event.target.dataset.componente}-componente`));
	
  });
 } 
}	,500) ;
}


