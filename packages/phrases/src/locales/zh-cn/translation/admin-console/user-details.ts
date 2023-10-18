const user_details = {
  page_title: '用户详情',
  back_to_users: '返回用户管理',
  created_title: '用户创建成功',
  created_guide: '这是用户登录过程中的信息。',
  created_email: '邮箱地址：',
  created_phone: '手机号码：',
  created_username: '用户名：',
  created_password: '密码：',
  menu_delete: '删除用户',
  delete_description: '本操作将永久删除该用户，且无法撤销。',
  deleted: '用户已成功删除。',
  reset_password: {
    reset_password: '重置密码',
    title: '确定要重置密码？',
    content: '本操作不可撤销，将会重置用户的登录信息。',
    congratulations: '该用户已被重置',
    new_password: '新密码：',
  },
  tab_settings: '设置',
  tab_roles: '角色',
  tab_logs: '用户日志',
  /** UNTRANSLATED */
  authentication: 'Authentication',
  authentication_description:
    '每个用户都有一个包含所有用户信息的个人资料。它由基本数据、社交身份和自定义数据组成。',
  /** UNTRANSLATED */
  user_profile: 'User profile',
  field_email: '邮箱地址',
  field_phone: '手机号码',
  field_username: '用户名',
  field_name: '姓名',
  field_avatar: '头像图片链接',
  field_avatar_placeholder: 'https://your.cdn.domain/avatar.png',
  field_custom_data: '自定义数据',
  field_custom_data_tip: '预定义属性之外的用户信息，例如用户偏好的颜色和语言。',
  field_connectors: '社交帐号',
  /** UNTRANSLATED */
  field_sso_connectors: 'Enterprise connections',
  custom_data_invalid: '自定义数据必须是有效的 JSON 对象',
  connectors: {
    connectors: '连接器',
    user_id: '用户ID',
    remove: '删除',
    /** UNTRANSLATED */
    connected: 'This user is connected with multiple social connectors.',
    not_connected: '该用户还没有绑定社交帐号',
    deletion_confirmation: '你在正要删除现有的 <name /> 身份，是否确认？',
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
    field_name: '多因素认证',
    field_description: '该用户已启用2步认证因素。',
    name_column: '多因素认证',
    field_description_empty: '此用户尚未启用两步身份验证因素。',
    deletion_confirmation: '您正在移除现有的2步身份验证器的<name/>。您确定要这样做吗？',
  },
  suspended: '已禁用',
  suspend_user: '禁用用户',
  suspend_user_reminder:
    '确定要禁用该用户吗？该用户将无法登录到你的应用程序，并且在当前访问令牌过期后，将无法获取新的访问令牌。此外，此用户发出的任何 API 请求都将失败。',
  suspend_action: '禁用',
  user_suspended: '用户已被停用。',
  reactivate_user: '重新启用用户',
  reactivate_user_reminder: '确定要重新启用该用户吗？这样做将允许该用户的任何登录尝试。',
  reactivate_action: '重新启用',
  user_reactivated: '用户已重新启用。',
  roles: {
    name_column: '角色名称',
    description_column: '描述',
    assign_button: '分配角色',
    delete_description: '此操作将从此用户中删除此角色。角色本身仍将存在，但不再与此用户相关联。',
    deleted: '已成功将 {{name}} 从此用户中删除。',
    assign_title: '将角色分配给 {{name}}',
    assign_subtitle: '为 {{name}} 授权一个或多个角色',
    assign_role_field: '分配角色',
    role_search_placeholder: '按角色名称搜索',
    added_text: '添加了 {{value, number}} 个',
    assigned_user_count: '{{value, number}} 个用户',
    confirm_assign: '分配角色',
    role_assigned: '已成功分配角色',
    search: '按角色名称、描述或 ID 搜索',
    empty: '无可用角色',
  },
  warning_no_sign_in_identifier:
    '用户需要至少拥有一个登录标识（用户名、邮箱、手机号或社交账户）才能登录。确定要继续吗？',
};

export default Object.freeze(user_details);
