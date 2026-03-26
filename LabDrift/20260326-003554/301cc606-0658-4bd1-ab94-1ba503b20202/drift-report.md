# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 301cc606-0658-4bd1-ab94-1ba503b20202
**Status:** DRIFT_DETECTED
**Duration:** 2086s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 10 |
| Passed | 3 |
| Drift Detected | 7 |
| Failed | 0 |
| Skipped (API errors) | 0 |

### Drift by Category

- **selector_drift**: 7

## Drift Issues

### step-1-sign-in-portal-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal at https://portal.azure.com. Select Cancel on the Welcome to Azure splas...
- **Actual:** The "Welcome to Azure" splash screen with a Cancel button did not appear. The portal loaded directly to the home page showing "欢迎使用 Azure!" with subscription options. This is likely normal behavior for returning users whose profile already dismissed the splash — a human following these instructions would also not see the Cancel button if previously dismissed.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-3-explore-tenants-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-3-explore-tenants
- **Instruction:** Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing b...
- **Actual:** The instructions describe "Manage tenants" as a "tab" but it is actually a command bar button in the toolbar at the top of the Overview blade (alongside "添加/Add", "新增功能/What's new", "预览功能/Preview features", "提供反馈/Provide feedback"). It functions the same way — clicking it opens the tenant management view — but it is not a tab within the content area. A human would still find it easily.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-4-navigate-users-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-4-navigate-users
- **Instruction:** In the Manage blade, select Users; then in the New user drop-down select Create new user....
- **Actual:** The instructions say "New user drop-down" with option "Create new user". In the current UI, the dropdown button is labeled "新建用户" (New user) and the dropdown option is also labeled "新建用户" with a subtitle "在组织中创建新的内部用户" (Create new internal user in organization) — not "Create new user" as a separate label. The second option is "邀请外部用户" (Invite external user). The naming is slightly different but a human would have no trouble identifying the correct option.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-5-create-user-az104-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-5-create-user-az104
- **Instruction:** Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate pa...
- **Actual:** The "User principal name" field is split into two parts: a text input for the local part (labeled "用户主体名称的本地部分") and a domain dropdown (labeled "用户主题名称的域名") pre-filled with "RudolfZhangoutlook.onmicrosoft.com". The instructions simply say "User principal name: az104-user1" but a human would naturally type "az104-user1" in the local part field. This split UPN design matches current Azure portal behavior and would not confuse a human user.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-6-invite-external-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-6-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Fill Email with your email address, Displa...
- **Actual:** The instructions say "Review + invite" and "Invite" which matches the current UI labels (审阅+邀请 / 邀请). The instructions describe "Send invite message" checkbox which is labeled "发送邀请邮件" and was checked by default. The invite form also includes additional fields not mentioned in the instructions: "抄送收件人" (CC recipient) and "邀请重定向 URL" (Invite redirect URL) — these are optional and do not need to be filled. None of these differences would confuse a human user.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-6-invite-external-user-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-6-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Fill Email with your email address, Displa...
- **Actual:** An informational banner at the top of the invite form states: "自 2025 年 12 月起，B2B 邀请电子邮件将发送自你组织的主域(例如 contoso.onmicrosoft.com)，而非 Microsoft.com" (Since December 2025, B2B invite emails are sent from your org's primary domain, not Microsoft.com). This is informational only and does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-8-create-security-group-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-8-create-security-group
- **Instruction:** In the All groups blade, select + New group and create a new group with Group type: Security, Group ...
- **Actual:** The field labels in the current UI use Chinese: "组类型" (Group type), "组名" (Group name — not "Group name" but shortened to "组名"), "组描述" (Group description), "成员身份类型" (Membership type). The "Group type" default is "安全组" (Security), which matches the instructions. The "Membership type" default is "已分配" (Assigned), also matching. A human following the English instructions would easily identify the corresponding fields.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-9-configure-group-ownership-membership-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-9-configure-group-ownership-membership
- **Instruction:** Select No owners selected, search for and select yourself as the owner. Select No members selected, ...
- **Actual:** The owner/member picker panels are titled "添加所有者" (Add owners) and "添加成员" (Add members). They use a search box with a checkbox-based user list showing Name (名称) and User Principal Name (用户主体名称) columns. The picker has a "选择" (Select) button at the bottom to confirm. This matches the expected "No owners selected" / "No members selected" workflow described in the instructions — the links are labeled "未选择所有者" and "未选择任何成员" respectively.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-10-verify-group-creation-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-10-verify-group-creation
- **Instruction:** Refresh the page and ensure your group was created. Select the new group and review the Members and ...
- **Actual:** An informational banner on the All Groups page: "Microsoft Entra 具有更简单的集成体验，用于管理所有身份和访问管理需求。试用新的 Microsoft Entra 管理中心!" (Microsoft Entra has a simpler integrated experience... Try the new Microsoft Entra admin center!). This is informational only and does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

## Step Details

### ⚠️ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** drift
**Duration:** 206s

**Drift Issues:**
- selector_drift: The "Welcome to Azure" splash screen with a Cancel button did not appear. The po...

### ✅ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** passed
**Duration:** 88s

### ⚠️ step-3-explore-tenants: Explore Tenant Management

**Status:** drift
**Duration:** 384s

**Drift Issues:**
- selector_drift: The instructions describe "Manage tenants" as a "tab" but it is actually a comma...

### ⚠️ step-4-navigate-users: Navigate to Users Section

**Status:** drift
**Duration:** 281s

**Drift Issues:**
- selector_drift: The instructions say "New user drop-down" with option "Create new user". In the ...

### ⚠️ step-5-create-user-az104: Create New User az104-user1

**Status:** drift
**Duration:** 227s

**Drift Issues:**
- selector_drift: The "User principal name" field is split into two parts: a text input for the lo...

### ⚠️ step-6-invite-external-user: Invite External User

**Status:** drift
**Duration:** 190s

**Drift Issues:**
- selector_drift: The instructions say "Review + invite" and "Invite" which matches the current UI...
- unexpected_ui: An informational banner at the top of the invite form states: "自 2025 年 12 月起，B2...

### ✅ step-7-navigate-groups: Navigate to Groups Section

**Status:** passed
**Duration:** 88s

### ⚠️ step-8-create-security-group: Create IT Lab Administrators Group

**Status:** drift
**Duration:** 204s

**Drift Issues:**
- selector_drift: The field labels in the current UI use Chinese: "组类型" (Group type), "组名" (Group ...

### ⚠️ step-9-configure-group-ownership-membership: Configure Group Owners and Members

**Status:** drift
**Duration:** 312s

**Drift Issues:**
- selector_drift: The owner/member picker panels are titled "添加所有者" (Add owners) and "添加成员" (Add m...

### ✅ step-10-verify-group-creation: Verify Group Creation

**Status:** passed
**Duration:** 106s

**Drift Issues:**
- unexpected_ui: An informational banner on the All Groups page: "Microsoft Entra 具有更简单的集成体验，用于管理...
