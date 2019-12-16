# Boilerplate Front End
Uma coleção de setups focado no desenvolvimento web. Gerenciado com Gulp, Babel e pacotes via NPM.

### Estrutura de pastas

* Assets - Imagens e arquivos estáticos de ambiente;
* SCSS - Organização dos arquivos Sass;
* JAVASCRIPT - Armazenam-se os arquivos de scripts JS;
* CSS - Arquivos Sass já compilados;
* JS - Arquivos de scripts JS já compilados
* Node_modules - Pacotes baixados pelo NPM

### Arquivos

* .babelrc - Gerenciamento de pressets de compilação;
* .gulpfile.babel.js - Gerenciamento das tarefas do boilerplate;
* package.json - Gerenciamento dos pacotes baixados;

### Instalação
Baixe o pacote aqui do GitHub e execute a instalação via terminal com o seguinte comando:
```sh
npm install 
```

### Tarefas do pacote 
Dentro dessa estrutura de desenvolvimento, temos algumas tarefas de execução bem específicas, são elas:
```sh
gulp
```
> Sobe toda a estrutura e levanta um servidor web baseado em node.
```sh
gulp deploy
```
> Entrega a versão compilada do código HTML, JS e SCSS
