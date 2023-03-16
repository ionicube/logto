import type { LocalePhrase } from '../types.js';

const translation = {
  input: {
    username: 'Utilizador',
    password: 'Palavra-passe',
    email: 'Email',
    phone_number: 'Telefone',
    confirm_password: 'Confirmar palavra-passe',
    search_region_code: 'Procurar código de região',
  },
  secondary: {
    social_bind_with:
      'Já tem uma conta? Faça login para agregar {{methods, list(type: disjunction;)}} com a sua identidade social.',
  },
  action: {
    sign_in: 'Entrar',
    continue: 'Continuar',
    create_account: 'Criar uma conta',
    create_account_without_linking: 'Criar conta sem vinculação',
    create: 'Criar',
    enter_passcode: 'Introduzir código de verificação',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    save_password: 'Guardar palavra-passe',
    bind: 'Agregar a {{address}}',
    bind_and_continue: 'Ligar e continuar',
    back: 'Voltar',
    nav_back: 'Anterior',
    agree: 'Aceito',
    got_it: 'Entendi',
    sign_in_with: 'Continuar com {{name}}',
    forgot_password: 'Esqueceu-se da palavra-passe?',
    switch_to: 'Mudar para {{method}}',
    sign_in_via_passcode: 'Iniciar sessão com código de verificação',
    sign_in_via_password: 'Iniciar sessão com palavra-passe',
    change: 'Alterar {{method}}',
    link_another_email: 'Vincular outro email',
    link_another_phone: 'Vincular outro telefone',
    link_another_email_or_phone: 'Vincular outro email ou telefone',
    show_password: 'Mostrar palavra-passe',
  },
  description: {
    email: 'email',
    phone_number: 'telefone',
    username: 'utilizador',
    reminder: 'Lembrete',
    not_found: '404 Não encontrado',
    agree_with_terms: 'Eu li e concordo com os ',
    agree_with_terms_modal: 'Para prosseguir, por favor, concorde com o <link></link>.',
    terms_of_use: 'Termos de uso',
    sign_in: 'Entrar',
    privacy_policy: 'Política de privacidade',
    create_account: 'Criar uma conta',
    or: 'ou',
    and: 'e',
    enter_passcode: 'O código de verificação foi enviado para o seu {{address}} {{target}}',
    passcode_sent: 'O código de verificação foi reenviado',
    resend_after_seconds: 'Reenviar após <span>{{seconds}}</span> segundos',
    resend_passcode: 'Reenviar código de verificação',
    create_account_id_exists: 'A conta com {{type}} {{value}} já existe, gostaria de fazer login?',
    link_account_id_exists: 'A conta com {{type}} {{value}} já existe, gostaria de vinculá-la?',
    sign_in_id_does_not_exist: 'A conta com {{type}} {{value}} não existe, gostaria de criar uma?',
    sign_in_id_does_not_exist_alert: 'A conta com {{type}} {{value}} não existe.',
    create_account_id_exists_alert:
      'A conta com {{type}} {{value}} está vinculada a outra conta. Por favor, tente outro {{type}}.',
    social_identity_exist:
      'O {{type}} {{value}} está vinculado a outra conta. Por favor, tente outro {{type}}.',
    bind_account_title: 'Vincular ou criar conta',
    social_create_account: 'Pode criar uma nova conta.',
    social_link_email: 'Pode vincular outro email',
    social_link_phone: 'Pode vincular outro telefone',
    social_link_email_or_phone: 'Pode vincular outro email ou telefone',
    social_bind_with_existing:
      'Encontramos uma conta relacionada registrada e você pode vinculá-la diretamente.',
    reset_password: 'Esqueceu a senha',
    reset_password_description:
      'Insira os {{types, list(type: disjunction;)}} associados à sua conta e enviaremos o código de verificação para redefinir sua senha.',
    new_password: 'Nova Senha',
    set_password: 'Definir senha',
    password_changed: 'Senha alterada',
    no_account: 'Ainda não tem conta?',
    have_account: 'Já tem conta?',
    enter_password: 'Digite a senha',
    enter_password_for: 'Faça login com a senha do {{method}} {{value}}',
    enter_username: 'Definir nome de usuário',
    enter_username_description:
      'O nome de usuário é uma alternativa para o login. O nome de usuário deve conter apenas letras, números e sublinhados.',
    link_email: 'Vincular email',
    link_phone: 'Vincular telefone',
    link_email_or_phone: 'Vincular email ou telefone',
    link_email_description: 'Para maior segurança, vincule o seu email à conta.',
    link_phone_description: 'Para maior segurança, vincule o seu telefone à conta.',
    link_email_or_phone_description:
      'Para maior segurança, vincule o seu email ou telefone à conta.',
    continue_with_more_information:
      'Para maior segurança, por favor complete os detalhes da conta abaixo.',
    create_your_account: 'Criar conta',
    welcome_to_sign_in: 'Bem-vindo(a) para iniciar sessão',
  },
  error: {
    general_required: `{{types, list(type: disjunction;)}} is necessário`,
    general_invalid: `O {{types, list(type: disjunction;)}} é inválido`,
    username_required: 'Utilizador necessário',
    password_required: 'Password necessária',
    username_exists: 'O nome de utilizador já existe',
    username_should_not_start_with_number: 'O nome de utilizador não deve começar com um número',
    username_invalid_charset:
      'O nome de utilizador deve conter apenas letras, números ou underscores.',
    invalid_email: 'O email é inválido',
    invalid_phone: 'O número de telefone é inválido',
    password_min_length: 'A password requer um mínimo de {{min}} caracteres',
    invalid_password:
      'A senha requer um mínimo de {{min}} caracteres e contém uma mistura de letras, números e símbolos.',
    passwords_do_not_match: 'As passwords não coincidem',
    invalid_passcode: 'O código de verificação é inválido.',
    invalid_connector_auth: 'A autorização é inválida',
    invalid_connector_request: 'Os dados do conector são inválidos',
    unknown: 'Erro desconhecido. Por favor, tente novamente mais tarde.',
    invalid_session: 'Sessão não encontrada. Volte e faça login novamente.',
    timeout: 'Tempo limite de sessão. Volte e faça login novamente.',
  },
  demo_app: {
    notification: 'Dica: Crie uma conta primeiro para testar a experiência de login.',
  },
};

const ptPT: LocalePhrase = Object.freeze({
  translation,
});

export default ptPT;
