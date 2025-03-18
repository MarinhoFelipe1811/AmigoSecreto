# Amigo Secreto

Este é um projeto desenvolvido no âmbito do **Programa One** da **Alura**, em parceria com a **Oracle**, como parte do desenvolvimento de habilidades em programação web.

## Sobre o Projeto

O projeto consiste em um sistema de **Amigo Secreto**, onde os usuários podem adicionar os nomes dos participantes, e o sistema realiza o sorteio do amigo secreto de forma aleatória.

### Funcionalidades:
- Adicionar nomes à lista.
- Visualizar a lista de amigos cadastrados.
- Sortear um amigo secreto aleatoriamente.
- Verificar e evitar a adição de nomes duplicados, considerando maiúsculas/minúsculas e acentos.

### Mudanças no Botão "Adicionar"
Durante o desenvolvimento do projeto, foi implementada uma lógica para o botão **"Adicionar"** que realiza as seguintes ações:

- **Ativação e Desativação do Botão**: O botão é habilitado ou desabilitado automaticamente dependendo do conteúdo do campo de entrada. Ele fica **azul** e clicável quando há um nome válido a ser adicionado, e fica **cinza** e desabilitado quando o campo de entrada está vazio ou o nome inserido já existe na lista de amigos.
  
- **Comparação de Nomes**: Para garantir que o nome inserido não seja duplicado na lista, a comparação agora é feita ignorando diferenças de **maiúsculas/minúsculas** e **acentos**. Ou seja, nomes como **"João"** e **"joao"** são tratados como iguais, evitando duplicidades na lista.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página (fornecido pela Alura).
- **CSS**: Estilização da interface (fornecido pela Alura).
- **JavaScript**: Lógica de interação, como adicionar amigos e realizar o sorteio.

## Como Rodar o Projeto

1. Clone este repositório para o seu computador:
   ```bash
   git clone https://github.com/MarinhoFelipe1811/amigo-secreto.git
Navegue até o diretório do projeto

Abra o arquivo index.html no seu navegador de preferência.

Contribuição
Este é um projeto de estudo desenvolvido para aprimorar habilidades em JavaScript. Os arquivos HTML e CSS foram fornecidos pela Alura como parte do conteúdo do Programa One. Se você deseja contribuir, fique à vontade para fazer um fork, alterar o código e enviar um pull request!

Licença
Este projeto está licenciado sob a Licença MIT.
