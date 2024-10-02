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

## Digest It - Project Summary

## Main Services

- GitHub
- GitHub Actions
- Netlify
- Static Files
- Cloudinary
- ChatGPT

## Digest It! Main Pipepline

| Order | Process Name            | Description                         |
| ----- | ----------------------- | ----------------------------------- |
| 1     | Initialization          | Setup environment                   |
| 2     | Processing Inputs       | Handle and validate input data      |
| 3     | AI Content Generator    | Generate content using AI           |
| 4     | Export Static Files     | Export files for static site        |
| 5     | Utilities               | Helper methods for various tasks    |
| 6     | Automation & Scheduling | Automate tasks, schedule processes  |
| 7     | Sync                    | Sync files across different systems |

## Digest It! Main Pipepline

| Order                      |
| -------------------------- |
| 1️⃣ Workflow Cleanup        |
| 2️⃣ Processing Inputs       |
| 3️⃣ AI Content Generator    |
| 4️⃣ Export Static Files     |
| 5️⃣ Website Essential Files |
| 6️⃣ Automation & Scheduling |
| 7️⃣ Sync                    |
| 8️⃣ Cache Management        |
|                            |
| 🛠️ Utilities               |
| 🔄 Atualizar Painel        |
| 💾 Salvar Mudanças         |

|                            | DIGEST IT ADMIN DASHBOARD      |                                |
| -------------------------- | ------------------------------ | ------------------------------ |
|                            |                                |                                |
| 1️⃣ **Workflow Cleanup**    | 2️⃣ **Processing Inputs**       | 3️⃣ **AI Content Generator**    |
| - _Clean Up_               | - _Validate Inputs_            | - _Generate Content_           |
| - _Delete Schedules_       | - _View Input Logs_            | - _Configure AI Settings_      |
|                            |                                |                                |
| 4️⃣ **Export Static Files** | 5️⃣ **Website Essential Files** | 6️⃣ **Automation & Scheduling** |
| - _Generate Sitemaps_      | - _Setup DecapCMS_             | - _Schedule Posts_             |
| - _Export Feeds_           | - _Generate SCSS_              | - _Schedule Auto GPT Posts_    |
| - _Generate AMP Stories_   | - _Update Ads.txt_             | - _Configure Cron Jobs_        |
|                            | - _Update Robots.txt_          |                                |
|                            |                                |                                |
| 7️⃣ **Sync**                | 8️⃣ **Cache Management**        | 🛠️ **Utilities**               |
| - _Sync Public Folder_     | - _Create Data Cache_          | - _File Reader_                |
| - _Sync CMS Files_         | - _Update Cache_               | - _File Writer_                |
|                            |                                | - _Convert MD to JSON_         |
| 🔄 **Atualizar Painel**    | 💾 **Salvar Mudanças**         |

### 1️⃣ Workflow Cleanup

> Mantenha o ambiente limpo e eficiente.  
> Objetivo: Remover agendamentos antigos e limpar workflows desnecessários.

- 🗑️ Delete Old Schedules
- 🗑️ Delete GPT Workflows

**Main Pipeline:**

| Order | Process Name     | Description       |
| ----- | ---------------- | ----------------- |
| 1     | Workflow Cleanup | Setup environment |

---

### 2️⃣ Processing Inputs

> Validação de dados e processamento de inputs antes de seguir para as próximas etapas.  
> Objetivo: Manipular e garantir que os dados de entrada estejam corretos.

- ✅ Validate Inputs
- 📝 Parse User Inputs
- ⚠️ Log Input Errors

**Main Pipeline:**

| Order | Process Name      | Description                    |
| ----- | ----------------- | ------------------------------ |
| 2     | Processing Inputs | Handle and validate input data |

---

### GitHub Actions Interface

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
