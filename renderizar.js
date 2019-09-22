
class Renderizar { 

	static renderizarSubTopicos(subs){
	let lista = document.createElement('ol');
	lista.classList = ['aula--sub-topicos'];
	subs.forEach(topico=> {
		let liElement = document.createElement('li');
		liElement.textContent = topico.titulo;
		lista.appendChild(liElement);
	});
	return lista;
}

static renderizarTopicos (topicos)  {

	let lista = document.createElement('ol');
	lista.classList = ['aula-topicos'];
	topicos.forEach(topico=> {
		let liElement = document.createElement('li');
		liElement.textContent = topico.titulo;
		lista.appendChild(liElement);
			if(topico.subs && topico.subs.length) {			
					lista.appendChild(this.renderizarSubTopicos(topico.subs));
			}
	});
	return lista;
}




 static renderizarConteudo (data, callback) {
		let conteudos = document.createElement('article');
	data.forEach((each)=>{
		let conteudo = document.createElement('section');
		conteudo.classList = ['aula-conteudo']
		
		let titulo = document.createElement('h4');
		titulo.classList = ['aula-titulo']
		titulo.textContent = `${each.id} - ${each.titulo}`;
		conteudo.appendChild(titulo);


		conteudo.appendChild(this.renderizarTopicos(each.topicos));

		conteudos.appendChild(conteudo);
		conteudos.appendChild(document.createElement('hr'));
	});
	callback(conteudos);
}


}

export default Renderizar;