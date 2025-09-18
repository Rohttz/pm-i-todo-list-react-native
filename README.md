# ToDo List com Redux Toolkit e Thunks Assíncronos

Este projeto é uma aplicação de lista de tarefas desenvolvida em React Native com integração completa de APIs usando Axios e gestão de estado com Redux Toolkit e Thunks assíncronos.

## Funcionalidades Implementadas

### Operações CRUD Assíncronas
- ✅ **Listar tarefas** - Carrega todas as tarefas da API
- ✅ **Adicionar tarefa** - Cria nova tarefa via API
- ✅ **Editar tarefa** - Atualiza tarefa existente via API
- ✅ **Concluir tarefa** - Marca tarefa como concluída/pendente via API
- ✅ **Remover tarefa** - Deleta tarefa específica via API
- ✅ **Remover todas** - Remove todas as tarefas via API

### Tecnologias Utilizadas
- **React Native** - Framework para desenvolvimento mobile
- **Redux Toolkit** - Gerenciamento de estado
- **Redux Thunks** - Operações assíncronas
- **Axios** - Cliente HTTP para comunicação com API
- **JSON Server** - API REST simulada
- **React Navigation** - Navegação entre telas
- **React Native Paper** - Componentes de UI

## Configuração e Execução

### Pré-requisitos
- Node.js instalado
- Expo CLI instalado
- JSON Server instalado globalmente

### Instalação
```bash
# Instalar dependências
npm install

# Instalar JSON Server globalmente (se não estiver instalado)
npm install -g json-server
```

### Execução

1. **Iniciar o JSON Server** (em um terminal):
```bash
npm run server
# ou
json-server --watch db.json
```

2. **Iniciar o aplicativo** (em outro terminal):
```bash
npm start
# ou
expo start
```

## Estrutura do Projeto

```
pm-i-todo-list-react-native/
├── components/
│   ├── TaskDetail.jsx      # Componente de detalhes da tarefa
│   ├── TaskEdit.jsx        # Componente de edição da tarefa
│   ├── TaskList.jsx        # Componente de lista de tarefas
│   └── TaskRegister.jsx    # Componente de cadastro de tarefa
├── screens/
│   ├── TaskDetailScreen.jsx # Tela de detalhes
│   ├── TaskEditScreen.jsx   # Tela de edição
│   ├── TaskFormScreen.jsx   # Tela de cadastro
│   ├── TaskHomeScreen.jsx   # Tela inicial
│   └── TaskListScreen.jsx   # Tela de lista
├── store/
│   ├── features/
│   │   └── taskSlice.js     # Slice do Redux com thunks
│   └── index.js             # Configuração da store
├── services/
│   └── taskService.js       # Serviço de comunicação com API
├── db.json                   # Dados do JSON Server
└── App.js                    # Componente principal
```

## Redux Toolkit e Thunks

### Thunks Implementados
- `initTasks` - Carrega todas as tarefas
- `addTask` - Adiciona nova tarefa
- `updateTask` - Atualiza tarefa existente
- `finishTask` - Marca tarefa como concluída/pendente
- `removeTask` - Remove tarefa específica
- `clearTasks` - Remove todas as tarefas

### Estados Gerenciados
- `tasks` - Array de tarefas
- `loading` - Estado de carregamento
- `error` - Mensagens de erro

### ExtraReducers
Todos os thunks possuem casos para:
- `pending` - Estado de carregamento
- `fulfilled` - Sucesso da operação
- `rejected` - Erro na operação

## API Endpoints

O JSON Server expõe os seguintes endpoints:

- `GET /tasks` - Listar todas as tarefas
- `POST /tasks` - Criar nova tarefa
- `PUT /tasks/:id` - Atualizar tarefa
- `DELETE /tasks/:id` - Deletar tarefa

## Exemplo de Uso

### Adicionando uma nova tarefa
```javascript
import { useDispatch } from 'react-redux';
import { addTask } from '../store/features/taskSlice';

const dispatch = useDispatch();

const newTask = {
  name: 'Nova tarefa',
  description: 'Descrição da tarefa',
  done: false
};

dispatch(addTask(newTask));
```

### Carregando tarefas
```javascript
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initTasks } from '../store/features/taskSlice';

const dispatch = useDispatch();

useEffect(() => {
  dispatch(initTasks());
}, [dispatch]);
```

## Tratamento de Erros

O projeto inclui tratamento completo de erros:
- Estados de loading durante operações assíncronas
- Mensagens de erro específicas para cada operação
- Logs de erro no console para debugging
- Interface visual para feedback ao usuário

## Melhorias Implementadas

1. **Operações Assíncronas Completas** - Todas as operações CRUD agora são assíncronas
2. **Tratamento de Estados** - Loading e error states implementados
3. **Funcionalidade de Edição** - Nova tela e componente para editar tarefas
4. **Navegação Aprimorada** - Fluxo completo de navegação entre telas
5. **Feedback Visual** - Indicadores de carregamento e mensagens de erro
6. **Código Limpo** - Remoção de código legado e contextos não utilizados
