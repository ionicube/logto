const user_details = {
  page_title: 'Kullanıcı detayları',
  back_to_users: 'Kullanıcı Yönetimine Geri Dön',
  created_title: 'Bu kullanıcı başarıyla oluşturuldu',
  created_guide: 'Kullanıcının oturum açma sürecinde yardımcı olacak bilgiler burada.',
  created_email: 'E-posta adresi:',
  created_phone: 'Telefon numarası:',
  created_username: 'Kullanıcı Adı:',
  created_password: 'Şifre:',
  menu_delete: 'Sil',
  delete_description: 'Bu işlem geri alınamaz. Kullanıcıyı kalıcı olarak siler.',
  deleted: 'Kullanıcı başarıyla silindi.',
  reset_password: {
    reset_password: 'Şifreyi sıfırla',
    title: 'Şifreyi sıfırlamak istediğinizden emin misiniz?',
    content: 'Bu işlem geri alınamaz. Bu, kullanıcının oturum açma bilgilerini sıfırlayacaktır.',
    congratulations: 'Bu kullanıcı sıfırlandı',
    new_password: 'Yeni şifre:',
  },
  tab_settings: 'Ayarlar',
  tab_roles: 'Roller',
  tab_logs: 'Kullanıcı kayıtları',
  /** UNTRANSLATED */
  authentication: 'Authentication',
  authentication_description:
    'Her kullanıcının, temel veriler, sosyal kimlikler ve özel verilerden oluşan tüm kullanıcı bilgilerini içeren bir profil vardır.',
  /** UNTRANSLATED */
  user_profile: 'User profile',
  field_email: 'Eposta adresi',
  field_phone: 'Telefon numarası',
  field_username: 'Kullanıcı Adı',
  field_name: 'İsim',
  field_avatar: 'Avatar resmi URLi',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: 'Özel veriler',
  field_custom_data_tip:
    'Kullanıcı tarafından tercih edilen renk ve dil gibi önceden tanımlanmış kullanıcı özelliklerinde listelenmeyen ek kullanıcı bilgileri.',
  field_connectors: 'Sosyal bağlayıcılar',
  /** UNTRANSLATED */
  field_sso_connectors: 'Enterprise connections',
  custom_data_invalid: 'Özel veriler geçerli bir JSON nesnesi olmalıdır',
  connectors: {
    connectors: 'Bağlayıcılar',
    user_id: 'Kullanıcı IDsi',
    remove: 'Kaldır',
    /** UNTRANSLATED */
    connected: 'This user is connected with multiple social connectors.',
    not_connected: 'Kullanıcı herhangi bir sosyal bağlayıcıya bağlı değil',
    deletion_confirmation:
      'Mevcut <name/> kimliğini kaldırıyorsunuz. Bunu yapmak istediğinizden emin misiniz?',
  },
  sso_connectors: {
    /** UNTRANSLATED */
    connectors: 'Connectors',
    /** UNTRANSLATED */
    enterprise_id: 'Enterprise ID',
    /** UNTRANSLATED */
    connected:
      'This user is connected to multiple enterprise identity providers for Single Sign-On.',
    /** UNTRANSLATED */
    not_connected:
      'The user is not connected to any enterprise identity providers for Single Sign-On.',
  },
  mfa: {
    field_name: 'Çok faktörlü kimlik doğrulama',
    field_description: 'Bu kullanıcı 2 adımlı kimlik doğrulama faktörlerini etkinleştirdi.',
    name_column: 'Çok Faktörlü Kimlik Doğrulama',
    field_description_empty:
      'Bu kullanıcı 2 aşamalı kimlik doğrulama faktörlerini etkinleştirmedi.',
    deletion_confirmation:
      '2 aşamalı kimlik doğrulama için mevcut olan <name/> kaldırıyorsunuz. Bunun yapmak istediğinizden emin misiniz?',
  },
  suspended: 'Askıya alınmış',
  suspend_user: 'Kullanıcıyı Askıya Al',
  suspend_user_reminder:
    'Bu kullanıcıyı askıya almak istediğinizden emin misiniz? Kullanıcı uygulamanıza giriş yapamayacak ve mevcut erişim belirteci süresi dolduktan sonra yeni bir erişim belirteci alamayacak. Ayrıca bu kullanıcı tarafından yapılan herhangi bir API isteği başarısız olacaktır.',
  suspend_action: 'Askıya Al',
  user_suspended: 'Kullanıcı askıya alındı.',
  reactivate_user: 'Kullanıcıyı Yeniden Etkinleştir',
  reactivate_user_reminder:
    'Bu kullanıcının yeniden etkinleştirmek istediğinizden emin misiniz? Böyle yapmak, bu kullanıcı için giriş girişimlerine izin verecektir.',
  reactivate_action: 'Yeniden Etkinleştir',
  user_reactivated: 'Kullanıcı yeniden etkinleştirildi.',
  roles: {
    name_column: 'Rol',
    description_column: 'Açıklama',
    assign_button: 'Rolleri Ata',
    delete_description:
      'Bu işlem, bu rolü bu kullanıcıdan kaldıracaktır. Rol kendisi hala var olacaktır, ancak artık bu kullanıcıyla ilişkili olmayacaktır.',
    deleted: '{{name}} bu kullanıcıdan başarıyla kaldırıldı.',
    assign_title: '{{name}} kullanıcısına roller atayın',
    assign_subtitle: '{{name}} bir veya daha fazla rolü yetkilendirin',
    assign_role_field: 'Rolleri ata',
    role_search_placeholder: 'Rol adına göre arama yapın',
    added_text: '{{value, number}} eklendi',
    assigned_user_count: '{{value, number}} kullanıcı',
    confirm_assign: 'Rolleri ata',
    role_assigned: 'Rol(ler) başarıyla atandı',
    search: 'Rol adına, açıklamasına veya Kimliğine göre arama yapın',
    empty: 'Uygun rol yok',
  },
  warning_no_sign_in_identifier:
    'Kullanıcının giriş yapmak için en az bir oturum açma kimliği (kullanıcı adı, e-posta, telefon numarası, veya sosyal) olması gerekiyor. Devam etmek istediğinizden emin misiniz?',
};

export default Object.freeze(user_details);
