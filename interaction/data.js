const gitCommands = [
    {
        "title": "git config --global user.name",
        "code": "git config --global user.name \"Seu Nome\"",
        "description": "Define o nome de usuário que aparecerá nos commits, associado à sua identidade em repositórios locais e remotos.",
        "category": "Configuração"
    },
    {
        "title": "git config --global user.email",
        "code": "git config --global user.email \"seu@email.com\"",
        "description": "Define o e-mail que será associado aos commits, usado em serviços como GitHub para identificar o autor de cada alteração.",
        "category": "Configuração"
    },
    {
        "title": "git config --list",
        "code": "git config --list",
        "description": "Lista todas as configurações aplicadas no Git (globais e locais), como nome, e-mail, editor padrão e outras opções configuradas.",
        "category": "Configuração"
    },
    {
        "title": "git init",
        "code": "git init",
        "description": "Inicializa um novo repositório Git no diretório atual, criando a estrutura interna (.git) necessária para versionamento.",
        "category": "Básico"
    },
    {
        "title": "git clone",
        "code": "git clone <url>",
        "description": "Clona um repositório remoto (por exemplo, do GitHub) para sua máquina local, trazendo todo o histórico de commits e branches configurados.",
        "category": "Básico"
    },
    {
        "title": "git add",
        "code": "git add <arquivo> | . | -A",
        "description": "Adiciona arquivos ao staging area (índice) para preparar os arquivos que serão incluídos no próximo commit; suporta padrões e diretórios.",
        "category": "Básico"
    },
    {
        "title": "git rm",
        "code": "git rm <arquivo>",
        "description": "Remove arquivos do diretório de trabalho e do índice (staging). Pode ser usado com `--cached` para manter o arquivo localmente mas removê-lo do repositório.",
        "category": "Básico"
    },
    {
        "title": "git mv",
        "code": "git mv <antigo> <novo>",
        "description": "Move ou renomeia um arquivo ou diretório e registra essa mudança no próximo commit de forma automática.",
        "category": "Básico"
    },
    {
        "title": "git status",
        "code": "git status",
        "description": "Mostra o estado atual do repositório: quais arquivos foram modificados, adicionados ao staging ou que ainda não estão sendo rastreados.",
        "category": "Básico"
    },
    {
        "title": "git commit",
        "code": "git commit -m \"mensagem\"",
        "description": "Cria um novo commit com os arquivos que estão no staging area, incluindo uma mensagem descritiva das mudanças realizadas.",
        "category": "Básico"
    },
    {
        "title": "git commit --amend",
        "code": "git commit --amend",
        "description": "Modifica o último commit realizado, permitindo alterar a mensagem ou incluir arquivos que ficaram de fora sem criar um novo commit.",
        "category": "Básico"
    },
    {
        "title": "git log",
        "code": "git log --oneline --graph --decorate --all",
        "description": "Exibe o histórico de commits com um gráfico visual, mostrando relações entre branches, mensagens e identificadores resumidos.",
        "category": "Histórico"
    },
    {
        "title": "git log --since",
        "code": "git log --since=\"2 weeks ago\"",
        "description": "Mostra o histórico de commits filtrado por data; útil para revisar commits feitos em um período específico.",
        "category": "Histórico"
    },
    {
        "title": "git diff",
        "code": "git diff",
        "description": "Mostra as diferenças linha a linha entre arquivos modificados, entre commits ou entre staging e working directory.",
        "category": "Histórico"
    },
    {
        "title": "git show",
        "code": "git show <objeto>",
        "description": "Mostra detalhes de um objeto Git (commit, tag ou blob), incluindo as alterações feitas e metadados associados.",
        "category": "Histórico"
    },
    {
        "title": "git blame",
        "code": "git blame <arquivo>",
        "description": "Mostra qual commit e autor alterou cada linha de um arquivo, útil para entender autoria e contexto de mudanças.",
        "category": "Histórico"
    },
    {
        "title": "git branch",
        "code": "git branch | git branch <nome> | git branch -d <nome>",
        "description": "Lista todos os branches locais, cria um novo ou exclui um existente. Use `-a` para listar locais e remotos.",
        "category": "Branches"
    },
    {
        "title": "git switch",
        "code": "git switch <branch>",
        "description": "Comando moderno para trocar de branch ou criar+trocar (`-c`) de forma mais clara e intuitiva que o `checkout`.",
        "category": "Branches"
    },
    {
        "title": "git checkout",
        "code": "git checkout <branch> | -b <branch>",
        "description": "Troca de branch ou cria uma nova e muda para ela; também pode restaurar arquivos a partir de versões anteriores.",
        "category": "Branches"
    },
    {
        "title": "git merge",
        "code": "git merge <branch>",
        "description": "Mescla as mudanças de outro branch na branch atual, combinando seus históricos de desenvolvimento.",
        "category": "Branches"
    },
    {
        "title": "git rebase",
        "code": "git rebase <base>",
        "description": "Reaplica commits de um branch sobre outro, reorganizando o histórico para torná-lo linear e mais fácil de visualizar.",
        "category": "Branches"
    },
    {
        "title": "git rebase -i",
        "code": "git rebase -i HEAD~3",
        "description": "Modo interativo de rebase, permitindo reordenar, editar ou mesclar commits antes de reescrever o histórico.",
        "category": "Branches"
    },
    {
        "title": "git cherry-pick",
        "code": "git cherry-pick <commit>",
        "description": "Aplica um commit específico de outra branch no branch atual sem mesclar completamente.",
        "category": "Branches"
    },
    {
        "title": "git remote -v",
        "code": "git remote -v",
        "description": "Mostra os repositórios remotos associados ao repositório local com suas URLs de fetch/push.",
        "category": "Remoto"
    },
    {
        "title": "git remote add",
        "code": "git remote add origin <url>",
        "description": "Conecta seu repositório local a um repositório remoto (ex.: GitHub), usando um nome de referência como `origin`.",
        "category": "Remoto"
    },
    {
        "title": "git remote remove",
        "code": "git remote remove <nome>",
        "description": "Remove um remote configurado localmente sem afetar o repositório no servidor.",
        "category": "Remoto"
    },
    {
        "title": "git fetch",
        "code": "git fetch origin",
        "description": "Baixa atualizações de um remote sem mesclá-las ao branch atual, apenas atualizando referências remotas.",
        "category": "Remoto"
    },
    {
        "title": "git pull --rebase",
        "code": "git pull --rebase origin <branch>",
        "description": "Puxa mudanças do remoto e reaplica seus commits locais sobre elas, evitando merges automáticos e preservando histórico linear.",
        "category": "Remoto"
    },
    {
        "title": "git push --tags",
        "code": "git push --tags",
        "description": "Envia todas as tags locais para o repositório remoto em uma única operação.",
        "category": "Remoto"
    },
    {
        "title": "git stash",
        "code": "git stash",
        "description": "Salva temporariamente mudanças não commitadas em uma stash para limpar o diretório sem perder trabalho.",
        "category": "Avançado"
    },
    {
        "title": "git stash list",
        "code": "git stash list",
        "description": "Mostra todas as stashes salvas, com seus índices e descrições para aplicar depois.",
        "category": "Avançado"
    },
    {
        "title": "git stash apply",
        "code": "git stash apply <stash@{n}>",
        "description": "Aplica as mudanças salvas em uma stash específica sem removê-la da lista.",
        "category": "Avançado"
    },
    {
        "title": "git stash pop",
        "code": "git stash pop",
        "description": "Aplica a stash mais recente e a remove da lista, restaurando as mudanças no diretório de trabalho.",
        "category": "Avançado"
    },
    {
        "title": "git bisect",
        "code": "git bisect start; git bisect good <commit> ; git bisect bad <commit>",
        "description": "Realiza uma busca binária para identificar qual commit introduziu um bug, testando vários commits alternadamente.",
        "category": "Avançado"
    },
    {
        "title": "git grep",
        "code": "git grep \"termo\"",
        "description": "Procura por um termo ou expressão dentro do conteúdo de arquivos rastreados pelo Git, semelhante ao grep tradicional.",
        "category": "Avançado"
    },
    {
        "title": "git gc",
        "code": "git gc",
        "description": "Executa coleta de lixo no repositório Git, otimiza objetos e libera espaço, melhorando desempenho interno.",
        "category": "Avançado"
    },
    {
        "title": "git archive",
        "code": "git archive --format=zip HEAD",
        "description": "Cria um arquivo compactado (zip/tar) com o conteúdo de um snapshot do repositório, útil para distribuir uma versão do projeto.",
        "category": "Avançado"
    },
    {
        "title": "git submodule add",
        "code": "git submodule add <url> <pasta>",
        "description": "Adiciona outro repositório Git dentro do seu como submódulo, permitindo versionamento de dependências/partes separadas.",
        "category": "Avançado"
    },
    {
        "title": "git submodule update --init",
        "code": "git submodule update --init --recursive",
        "description": "Inicializa e atualiza submódulos recursivamente, sincronizando versões e garantindo funcionamento.",
        "category": "Avançado"
    }
];
