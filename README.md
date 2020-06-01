# Recuperação de senha

**RF** *Requisitos Funcionais*

- O usuário deve poder recuperar a sua senha informando seu e-mail
- O usuári deve receber um e-mail com instruções de recuperação de senha
- O usuário deve poder resetar sua senha

**RNF** *Requisitos Não Funcionais*

- Usar o Mailtrap para testar envios em ambiente de desenvolvimento
- Utilizar o Amazon SES para envios em produção
- O envio de e-mails deve acontecer em segundo plano (background-job)

**RN** *Regras de Negócio*

- O link enviado por e-mail para resetar senha, deve expirar em 2h
- O usuário precisa confirmar a nova senha ao resetar sua senha

# Atualização de perfil

**RF** *Requisitos Funcionais*

- O usuário deve poder atualizar seu perfil (nome, email, senha)

**RN** *Regras de Negócio*

- O usuário não pode alterar seu e-mail para um email já utilizado
- Para atualizar sua senha, o usuário deve informar sua senha atual
- O usuário precisa confirmar a nova senha ao atualizar sua senha

# Painel de prestador

**RF** *Requisitos Funcionais*

- O usuário deve poder lsitar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificações não lidas

**RNF** *Requisitos Não Funcionais*

- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificações do prestador dever ser armazenados no MongoDB
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io

**RN** *Regras de Negócio*

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar

# Agendamento de serviços

**RF** *Requisitos Funcionais*

- O usuário deve poder listar prestadores de serviço cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponíveis em um dia específicio de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador

**RNF** *Requisitos Não Funcionais*

- A listagem de prestadores deve ser armazenada em cache

**RN** *Regras de Negócio*

 - Cada agendamento deve durar exatamente uma hora
 - Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h, último às 18h)
 - O usuário não pode agendar em um horário já ocupado
 - O usuário não pode agendar em um horário que já passou
 - O usuário não pode agendar um horário com ele mesmo
