const gitCommands = [
    // Configuração
    {
        "title": "git config --global user.name",
        "code": "git config --global user.name \"Seu Nome\"",
        "description": "Define seu nome globalmente para todos os commits. Exemplo: `git config --global user.name \"Maria\"`.",
        "category": "Configuração"
    },
    {
        "title": "git config --global user.email",
        "code": "git config --global user.email \"seu@email.com\"",
        "description": "Configura o e-mail associado aos commits. Exemplo: `git config --global user.email \"dev@example.com\"`.",
        "category": "Configuração"
    },
    {
        "title": "git config --list",
        "code": "git config --list",
        "description": "Lista todas as configurações atuais (globais e locais). Exemplo: `git config --list`.",
        "category": "Configuração"
    },

    // Informações de versão e ajuda
    {
        "title": "git --version",
        "code": "git --version",
        "description": "Exibe a versão do Git instalada. Exemplo: `git --version`.",
        "category": "Auxiliar"
    },
    {
        "title": "git help --all",
        "code": "git help --all",
        "description": "Mostra todos os comandos Git disponíveis no seu sistema. Exemplo: `git help --all`.",
        "category": "Auxiliar"
    },
    {
        "title": "git help <comando>",
        "code": "git help commit",
        "description": "Exibe a ajuda detalhada de um comando específico. Exemplo: `git help commit`.",
        "category": "Auxiliar"
    },

    // Inicialização e clonagem
    {
        "title": "git init",
        "code": "git init",
        "description": "Inicializa um novo repositório Git no diretório atual. Exemplo: `git init`.",
        "category": "Básico"
    },
    {
        "title": "git clone <url>",
        "code": "git clone https://github.com/user/repo.git",
        "description": "Clona um repositório remoto para a máquina local. Exemplo: `git clone https://github.com/exemplo/projeto.git`.",
        "category": "Básico"
    },

    // Área de Stage
    {
        "title": "git add <arquivo>",
        "code": "git add arquivo.txt",
        "description": "Adiciona um arquivo específico ao staging area. Exemplo: `git add index.js`.",
        "category": "Básico"
    },
    {
        "title": "git add .",
        "code": "git add .",
        "description": "Adiciona todas as mudanças atuais ao staging area. Exemplo: `git add .`.",
        "category": "Básico"
    },
    {
        "title": "git add --all",
        "code": "git add --all",
        "description": "Adiciona todas as alterações, incluindo deleções, ao staging area. Exemplo: `git add --all`.",
        "category": "Básico"
    },
    {
        "title": "git add -p",
        "code": "git add -p",
        "description": "Permite escolher partes específicas das mudanças para staging. Exemplo: `git add -p`.",
        "category": "Básico"
    },

    // Status e diferença
    {
        "title": "git status",
        "code": "git status",
        "description": "Mostra o estado atual do repositório (modificações, staged, untracked). Exemplo: `git status`.",
        "category": "Básico"
    },
    {
        "title": "git diff",
        "code": "git diff",
        "description": "Mostra diferenças entre o diretório de trabalho e o staging area. Exemplo: `git diff`.",
        "category": "Histórico"
    },
    {
        "title": "git diff --staged",
        "code": "git diff --staged",
        "description": "Mostra diferenças entre staging area e último commit. Exemplo: `git diff --staged`.",
        "category": "Histórico"
    },

    // Commits & Histórico
    {
        "title": "git commit -m",
        "code": "git commit -m \"mensagem\"",
        "description": "Cria um commit com uma mensagem clara. Exemplo: `git commit -m \"Adiciona feature\"`.",
        "category": "Básico"
    },
    {
        "title": "git commit --amend",
        "code": "git commit --amend",
        "description": "Permite alterar o último commit (mensagem ou conteúdo). Exemplo: `git commit --amend`.",
        "category": "Básico"
    },
    {
        "title": "git log",
        "code": "git log",
        "description": "Mostra o histórico de todos os commits. Exemplo: `git log`.",
        "category": "Histórico"
    },
    {
        "title": "git log --oneline",
        "code": "git log --oneline",
        "description": "Mostra o histórico de commits de forma resumida (uma linha por commit). Exemplo: `git log --oneline`.",
        "category": "Histórico"
    },
    {
        "title": "git log --stat",
        "code": "git log --stat",
        "description": "Mostra commits com estatísticas de linhas modificadas por arquivo. Exemplo: `git log --stat`.",
        "category": "Histórico"
    },
    {
        "title": "git show <commit>",
        "code": "git show a1b2c3d",
        "description": "Mostra detalhes completos de um commit específico. Exemplo: `git show a1b2c3d`.",
        "category": "Histórico"
    },
    {
        "title": "git blame <arquivo>",
        "code": "git blame app.js",
        "description": "Mostra quem alterou cada linha de um arquivo. Exemplo: `git blame app.js`.",
        "category": "Histórico"
    },

    // Branching & Merging
    {
        "title": "git branch",
        "code": "git branch",
        "description": "Lista todos os branches locais. Exemplo: `git branch`.",
        "category": "Branches"
    },
    {
        "title": "git branch -a",
        "code": "git branch -a",
        "description": "Lista branches locais e remotos. Exemplo: `git branch -a`.",
        "category": "Branches"
    },
    {
        "title": "git branch <nome>",
        "code": "git branch feature-x",
        "description": "Cria um novo branch. Exemplo: `git branch feature-x`.",
        "category": "Branches"
    },
    {
        "title": "git branch -d",
        "code": "git branch -d feature-x",
        "description": "Remove um branch local. Exemplo: `git branch -d feature-x`.",
        "category": "Branches"
    },
    {
        "title": "git switch <branch>",
        "code": "git switch main",
        "description": "Troca para outro branch. Exemplo: `git switch main`.",
        "category": "Branches"
    },
    {
        "title": "git switch -c <novo>",
        "code": "git switch -c feature-y",
        "description": "Cria um novo branch e já alterna para ele. Exemplo: `git switch -c feature-y`.",
        "category": "Branches"
    },
    {
        "title": "git checkout <branch>",
        "code": "git checkout main",
        "description": "Troca para um branch (forma antiga do switch). Exemplo: `git checkout main`.",
        "category": "Branches"
    },
    {
        "title": "git checkout -b <branch>",
        "code": "git checkout -b feature-z",
        "description": "Cria e alterna para um novo branch (maneira antiga). Exemplo: `git checkout -b feature-z`.",
        "category": "Branches"
    },
    {
        "title": "git merge <branch>",
        "code": "git merge feature-x",
        "description": "Mescla outro branch no atual. Exemplo: `git merge feature-x`.",
        "category": "Branches"
    },
    {
        "title": "git rebase <base>",
        "code": "git rebase main",
        "description": "Reaplica commits sobre outro branch para manter histórico linear. Exemplo: `git rebase main`.",
        "category": "Branches"
    },
    {
        "title": "git rebase -i",
        "code": "git rebase -i HEAD~3",
        "description": "Rebase interativo para reordenar, editar ou combinar commits. Exemplo: `git rebase -i HEAD~3`.",
        "category": "Branches"
    },

    // Remote / Sincronização
    {
        "title": "git remote -v",
        "code": "git remote -v",
        "description": "Mostra remotes configurados com URLs. Exemplo: `git remote -v`.",
        "category": "Remoto"
    },
    {
        "title": "git remote add <nome> <url>",
        "code": "git remote add origin https://github.com/user/repo.git",
        "description": "Adiciona um remote ao repositório. Exemplo: `git remote add origin https://github.com/exemplo/projeto.git`.",
        "category": "Remoto"
    },
    {
        "title": "git fetch <remote>",
        "code": "git fetch origin",
        "description": "Baixa atualizações de um remote sem mesclar. Exemplo: `git fetch origin`.",
        "category": "Remoto"
    },
    {
        "title": "git pull <remote> <branch>",
        "code": "git pull origin main",
        "description": "Baixa e mescla alterações do remoto para o local. Exemplo: `git pull origin main`.",
        "category": "Remoto"
    },
    {
        "title": "git pull --rebase <remote> <branch>",
        "code": "git pull --rebase origin main",
        "description": "Puxa com rebase para evitar merges automáticos. Exemplo: `git pull --rebase origin main`.",
        "category": "Remoto"
    },
    {
        "title": "git push <remote> <branch>",
        "code": "git push origin main",
        "description": "Envia commits locais ao remote. Exemplo: `git push origin main`.",
        "category": "Remoto"
    },
    {
        "title": "git push --all <remote>",
        "code": "git push --all origin",
        "description": "Envia todas as branches locais para o remote. Exemplo: `git push --all origin`.",
        "category": "Remoto"
    },

    // Desfazer & Reset
    {
        "title": "git reset --soft HEAD~1",
        "code": "git reset --soft HEAD~1",
        "description": "Move HEAD e mantém mudanças no staging. Exemplo: `git reset --soft HEAD~1`.",
        "category": "Avançado"
    },
    {
        "title": "git reset --mixed HEAD~1",
        "code": "git reset --mixed HEAD~1",
        "description": "Mantém mudanças no diretório mas remove staging. Exemplo: `git reset --mixed HEAD~1`.",
        "category": "Avançado"
    },
    {
        "title": "git reset --hard HEAD~1",
        "code": "git reset --hard HEAD~1",
        "description": "Desfaz tudo (dangeroso). Exemplo: `git reset --hard HEAD~1`.",
        "category": "Avançado"
    },
    {
        "title": "git revert <commit>",
        "code": "git revert a1b2c3d",
        "description": "Cria um novo commit que desfaz outro commit. Exemplo: `git revert a1b2c3d`.",
        "category": "Avançado"
    },

    // Stash
    {
        "title": "git stash",
        "code": "git stash",
        "description": "Guarda mudanças temporariamente. Exemplo: `git stash`.",
        "category": "Avançado"
    },
    {
        "title": "git stash list",
        "code": "git stash list",
        "description": "Lista stashes salvas. Exemplo: `git stash list`.",
        "category": "Avançado"
    },
    {
        "title": "git stash apply",
        "code": "git stash apply",
        "description": "Restaura uma stash sem removê-la. Exemplo: `git stash apply`.","category":"Avançado"},
    {
        "title": "git stash pop",
        "code": "git stash pop",
        "description": "Restaura e remove a stash mais recente. Exemplo: `git stash pop`.","category":"Avançado"},

    // Tags
    {
        "title": "git tag -a <tag>",
        "code": "git tag -a v1.0 -m \"mensagem\"",
        "description": "Cria uma tag anotada. Exemplo: `git tag -a v1.0 -m \"Release 1.0\"`.","category":"Avançado"},
    {
        "title": "git tag -l",
        "code": "git tag -l",
        "description": "Lista todas as tags. Exemplo: `git tag -l`.","category":"Avançado"},

    // Utilitários adicionais
    {
        "title": "git clean -fd",
        "code": "git clean -fd",
        "description": "Remove arquivos não rastreados e diretórios. Exemplo: `git clean -fd`.","category":"Avançado"},
    {
        "title": "git reflog",
        "code": "git reflog",
        "description": "Mostra movimentações do HEAD para recuperar commits. Exemplo: `git reflog`.","category":"Avançado"},
    {
        "title": "git bisect start",
        "code": "git bisect start",
        "description": "Inicia busca binária para descobrir quando um bug foi introduzido. Exemplo: `git bisect start`.","category":"Avançado"},
    {
        "title": "git grep \"termo\"",
        "code": "git grep \"TODO\"",
        "description": "Procura um termo dentro dos arquivos rastreados. Exemplo: `git grep \"TODO\"`.","category":"Avançado"},
    {
        "title": "git archive --format=zip",
        "code": "git archive --format=zip -o projeto.zip HEAD",
        "description": "Cria um arquivo compactado do snapshot atual. Exemplo: `git archive --format=zip -o projeto.zip HEAD`.","category":"Avançado"}
];
