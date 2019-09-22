import conteudos from "./conteudo.js"
import Renderizar from './renderizar.js'
class AulasComponente extends HTMLElement {
	inicializar(){
		document.querySelector('aulas-componente').shadowRoot.querySelector('#aulas-loading').classList.add("mostrar-loading");
		Renderizar.renderizarConteudo(conteudos, (conteudos)=> {
			document.querySelector('aulas-componente').shadowRoot.querySelector('#aulas-conteudo').appendChild(conteudos);
			document.querySelector('aulas-componente').shadowRoot.querySelector('#aulas-loading').classList.remove("mostrar-loading");
		});
	}
	constructor(){
		super();
		this.shadow = this.attachShadow({mode:'open'});
		const template = document.createElement('template');
		template.innerHTML = `
		<link rel="stylesheet" href="aulas.componente.css">
		<article id="aulas">
			<h3>Aulas </h3>
			<div id="aulas-loading"></div>
			<div id="aulas-conteudo"></div>
		</article>`;
		this.shadow.appendChild(template.content);
	}
	connectedCallback(){
		this.inicializar();
	}
}
customElements.define('aulas-componente', AulasComponente);

export default AulasComponente;
