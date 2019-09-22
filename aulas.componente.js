class AulasComponente extends HTMLElement {



const renderizarSubTopicos = (subs) => {
	let lista = document.createElement('ol');
	lista.classList = ['aula--sub-topicos'];
	subs.forEach(topico=> {
		let liElement = document.createElement('li');
		liElement.textContent = topico.titulo;
		lista.appendChild(liElement);
	});
	return lista;
}

const renderizarTopicos = (topicos) => {

	let lista = document.createElement('ol');
	lista.classList = ['aula-topicos'];
	topicos.forEach(topico=> {
		let liElement = document.createElement('li');
		liElement.textContent = topico.titulo;
		lista.appendChild(liElement);
		if(topico.subs && topico.subs.length) {			
				lista.appendChild(renderizarSubTopicos(topico.subs));
		}
	});
	return lista;
}




const renderizarConteudo = () => {
	let aulasConteudo = document.querySelector('#aulas-conteudo')
	conteudo.forEach((each)=>{
		let conteudo = document.createElement('article');
		conteudo.classList = ['aula-conteudo']
		
		let titulo = document.createElement('h4');
		titulo.classList = ['aula-titulo']
		titulo.textContent = `${each.id} - ${each.titulo}`;
		conteudo.appendChild(titulo);


		conteudo.appendChild(renderizarTopicos(each.topicos));

		aulasConteudo.appendChild(conteudo);
		aulasConteudo.appendChild(document.createElement('hr'));
	});
	document.querySelector('#aulas-loading').classList.remove("mostrar-loading");
}


const inicializar = () => {
	document.querySelector('#aulas-loading').classList.add("mostrar-loading");
	setTimeout(renderizarConteudo, 1500);
}
connectedCallback(){
 const shadow = this.attachShadow({mode:'open'});

 const conteudo = eval(this.getAttribute('conteudo'));
inicializar();
}

}

customElements.define('aulas-componente', AulasComponente);
