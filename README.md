# Boilerplate Front End
Uma coleção de setups focado no desenvolvimento web.

### Estrutura de pastas

* ASSETS - Imagens e arquivos estáticos de ambiente;
* SCSS - Organização dos arquivos Sass;
* JAVASCRIPT - Armazenam-se os arquivos de scripts JS;
* CSS - Arquivos Sass já compilados;
* JS - Arquivos de scripts JS já compilados
* NODE_MODULES - Pacotes baixados pelo NPM

### Arquivos

* .babelrc - Gerenciamento de pressets de compilação;
* .gulpfile.babel.js - Gerenciamento das tarefas do boilerplate;
* package.json (package-lock.json) - Gerenciamento dos pacotes baixados;

### Instalação
Baixe o pacote do boilerplate aqui do GitHub e execute a instalação via terminal com o seguinte comando:
```sh
npm install 
```

### Tarefas do pacote 
Dentro dessa estrutura de desenvolvimento, temos algumas tarefas de execução bem específicas, são elas:
```sh
gulp
```
> Atualiza toda a estrutura e levanta um servidor web usando browser sync
```sh
gulp deploy
```
> Entrega a versão compilada do código JavaScript e SCSS

## Atualização e manutenção
Ajuda é sempre bem vinda e agradeço quem tiver disposição de compartilhar melhorias nesse projeto de boilerplate. Fique a vontade para dar um fork e pushar eventuais ajustes e melhorias! Muito obrigado desde já, equipe PS WebDev. 