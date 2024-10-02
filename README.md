# DigestIt.js

DigestIt.js é uma ferramenta de automação que simplifica a criação, exportação e sincronização de geração de conteúdo, arquivos web estáticos, postagens agendadas, conteúdo gerado por IA, integração com DALL·E, administração do Decap CMS e uploads para o Cloudinary.

## Instalação

```sh
npm install digestit
```

## Uso

```javascript
import { add } from "digestit";

console.log(add(1, 2)); // 3
```

## Recursos

- Geração de conteúdo
- Integração com DALL·E
- Administração do Decap CMS
- Uploads para o Cloudinary

## Testes

```sh
npm test
```

### Digest It - Project Summary

#### Main Services

- GitHub
- GitHub Actions
- Netlify
- Static Files
- Cloudinary
- ChatGPT

#### Digest It! Main Pipepline

| Order | Process Name            | Description                         |
| ----- | ----------------------- | ----------------------------------- |
| 1     | Initialization          | Setup environment                   |
| 2     | Processing Inputs       | Handle and validate input data      |
| 3     | AI Content Generator    | Generate content using AI           |
| 4     | Export Static Files     | Export files for static site        |
| 5     | Utilities               | Helper methods for various tasks    |
| 6     | Automation & Scheduling | Automate tasks, schedule processes  |
| 7     | Sync                    | Sync files across different systems |

#### GitHub Actions Interface

| Functionality   | Description                                |
| --------------- | ------------------------------------------ |
| Watcher         | Watch folder to initiate workflows         |
| Trigger         | Monitors json file for workflow triggers   |
| Schedule        | Runs cron jobs to automate scheduled posts |
| Auto Post       | Automates periodic posting using GPT       |
| Auto Post 2     | Automates scheduled posting using GPT      |
| Actions Logs    | Logs all actions and workflow activities   |
| Trigger Updates | Updates based on triggered actions         |

```
+---------------------------------------------+
|               Main Services                 |
+---------------------------------------------+
| GitHub / GH Actions                         |
| Netlify / Static Files                      |
| Cloudinary / ChatGPT                        |
+---------------------------------------------+

+-----------------------------------+
|             Digest It!            |
+-----------------------------------+
| [Initialization]                  |
| [Processing Inputs]               |
| [AI Content Generator]            |
| [Export Static Files]             |
| [Utilities]                       |
| [Automation & Scheduling]         |
| [Sync]                            |
+-----------------------------------+

+---------------------------------------------------------------+
|                     GitHub Actions Interface                  |
+---------------------------------------------------------------+
| Watcher:      [ Watches Folders Workflows ]                   |
| Trigger:      [ Scan For Update Triggers Workflows ]          |
| Schedule:     [ Cron Jobs For Schedule Post Workflows ]       |
| Auto Post:    [ GPT Periodic Auto Posting System Workflow ]   |
| Auto Post 2:  [ GPT Schedule Auto Posting System Workflow ]   |
+---------------------------------------------------------------+
|             [ Actions Logs ]  [ Trigger Updates ]             |
+---------------------------------------------------------------+
```

### Detalhes dos Comentários JSDoc

- **@class**: Indica que a função/entidade documentada é uma classe.
- **@classdesc**: Descreve o propósito e uso geral da classe.
- **@constructor**: Indica que esse método é o construtor da classe.
- **@property**: Documenta uma propriedade da classe.
- **@method**: Indica que a função documentada é um método da classe.
- **@param**: Documenta um parâmetro de uma função ou método.
- **@example**: Fornece um exemplo de uso para ajudar desenvolvedores a entender como utilizar o método.
