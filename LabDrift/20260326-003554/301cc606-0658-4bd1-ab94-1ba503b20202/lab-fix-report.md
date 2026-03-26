# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-26T01:12:02.354Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 9 |
| Instruction Fixes Needed | 9 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Medium (1-4 hours) |

## 📝 Instruction Updates

### 🟠 High Priority (7)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** ui_change
**Confidence:** high

**Reason:**
> The "Welcome to Azure" splash screen with a Cancel button did not appear. The portal loaded directly to the home page showing "欢迎使用 Azure!" with subscription options. This is likely normal behavior for returning users whose profile already dismissed the splash — a human following these instructions would also not see the Cancel button if previously dismissed.

**Original Instruction:**
```
Sign in to the Azure portal at https://portal.azure.com. Select Cancel on the Welcome to Azure splash screen to proceed to the portal.
```

**Suggested Update:**
```
Sign in to the Azure portal at https://portal.azure.com. If a Welcome to Azure splash screen appears, select **Cancel** to proceed to the portal home page.
```

---

#### Explore Tenant Management

**Step ID:** step-3-explore-tenants
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions describe "Manage tenants" as a "tab" but it is actually a command bar button in the toolbar at the top of the Overview blade (alongside "添加/Add", "新增功能/What's new", "预览功能/Preview features", "提供反馈/Provide feedback"). It functions the same way — clicking it opens the tenant management view — but it is not a tab within the content area. A human would still find it easily.

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

**Suggested Update:**
```
Select the Overview blade and then click the **Manage tenants** button in the command bar. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

---

#### Navigate to Users Section

**Step ID:** step-4-navigate-users
**Category:** ui_change
**Confidence:** high

**Reason:**
> Button now opens a dropdown menu instead of direct action

**Original Instruction:**
```
In the Manage blade, select Users; then in the New user drop-down select Create new user.
```

**Suggested Update:**
```
In the Manage blade, select Users; then select the New user drop-down and choose Create new user.
```

---

#### Create New User az104-user1

**Step ID:** step-5-create-user-az104
**Category:** ui_change
**Confidence:** high

**Reason:**
> Button now opens a dropdown menu instead of direct action

**Original Instruction:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate password: checked, Account enabled: checked. On Properties tab add Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + create and then Create.
```

**Suggested Update:**
```
Create a new user by selecting the **New user** button and choosing **Create new user** from the dropdown menu. Enter the following details — User principal name: az104-user1, Display name: az104-user1, Auto-generate password: checked, Account enabled: checked. On the Properties tab, add Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select **Review + create** and then **Create**.
```

---

#### Invite External User

**Step ID:** step-6-invite-external-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions say "Review + invite" and "Invite" which matches the current UI labels (审阅+邀请 / 邀请). The instructions describe "Send invite message" checkbox which is labeled "发送邀请邮件" and was checked by default. The invite form also includes additional fields not mentioned in the instructions: "抄送收件人" (CC recipient) and "邀请重定向 URL" (Invite redirect URL) — these are optional and do not need to be filled. None of these differences would confuse a human user.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Fill Email with your email address, Display name with your name, check Send invite message, add Message: Welcome to Azure and our group project. On Properties tab add Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite and then Invite.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Fill Email with your email address, Display name with your name, check Send invite message, add Message: Welcome to Azure and our group project. On Properties tab add Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite and then Invite.
```

---

#### Create IT Lab Administrators Group

**Step ID:** step-8-create-security-group
**Category:** ui_change
**Confidence:** high

**Reason:**
> The field labels in the current UI use Chinese: "组类型" (Group type), "组名" (Group name — not "Group name" but shortened to "组名"), "组描述" (Group description), "成员身份类型" (Membership type). The "Group type" default is "安全组" (Security), which matches the instructions. The "Membership type" default is "已分配" (Assigned), also matching. A human following the English instructions would easily identify the corresponding fields.

**Original Instruction:**
```
In the All groups blade, select + New group and create a new group with Group type: Security, Group name: IT Lab Administrators, Group description: Administrators that manage the IT lab, Membership type: Assigned.
```

**Suggested Update:**
```
In the All groups blade, select + New group and create a new group with 组类型 (Group type): 安全组 (Security), 组名 (Group name): IT Lab Administrators, 组描述 (Group description): Administrators that manage the IT lab, 成员身份类型 (Membership type): 已分配 (Assigned).
```

---

#### Configure Group Owners and Members

**Step ID:** step-9-configure-group-ownership-membership
**Category:** ui_change
**Confidence:** high

**Reason:**
> The owner/member picker panels are titled "添加所有者" (Add owners) and "添加成员" (Add members). They use a search box with a checkbox-based user list showing Name (名称) and User Principal Name (用户主体名称) columns. The picker has a "选择" (Select) button at the bottom to confirm. This matches the expected "No owners selected" / "No members selected" workflow described in the instructions — the links are labeled "未选择所有者" and "未选择任何成员" respectively.

**Original Instruction:**
```
Select No owners selected, search for and select yourself as the owner. Select No members selected, search for and select the az104-user1 and the guest user you invited. Add both users to the group. Select Create to deploy the group.
```

**Suggested Update:**
```
Select **未选择所有者** (No owners selected), search for and select yourself as the owner, then select **选择** (Select) to confirm. Select **未选择任何成员** (No members selected), search for and select the az104-user1 and the guest user you invited, then select **选择** (Select) to add both users to the group. Select **Create** to deploy the group.
```

---

### 🟢 Low Priority (2)

#### Invite External User

**Step ID:** step-6-invite-external-user
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An informational banner at the top of the invite form states: "自 2025 年 12 月起，B2B 邀请电子邮件将发送自你组织的主域(例如 contoso.onmicrosoft.com)，而非 Microsoft.com" (Since December 2025, B2B invite emails are sent from your org's primary domain, not Microsoft.com). This is informational only and does not block progress.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Fill Email with your email address, Display name with your name, check Send invite message, add Message: Welcome to Azure and our group project. On Properties tab add Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite and then Invite.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Fill Email with your email address, Display name with your name, check Send invite message, add Message: Welcome to Azure and our group project. Note that invite emails will be sent from your organization's primary domain (for example, contoso.onmicrosoft.com) rather than Microsoft.com. On Properties tab add Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite and then Invite.
```

---

#### Verify Group Creation

**Step ID:** step-10-verify-group-creation
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An informational banner on the All Groups page: "Microsoft Entra 具有更简单的集成体验，用于管理所有身份和访问管理需求。试用新的 Microsoft Entra 管理中心!" (Microsoft Entra has a simpler integrated experience... Try the new Microsoft Entra admin center!). This is informational only and does not block progress.

**Original Instruction:**
```
Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information.
```

**Suggested Update:**
```
Refresh the page and ensure your group was created. If a banner appears promoting the Microsoft Entra admin center, dismiss it or ignore it and continue. Select the new group and review the Members and Owners information.
```

---

## 📌 Additional Notes

- This lab has significant UI drift. Consider scheduling regular reviews as Azure portal UI updates frequently.

## 🚀 Quick Reference

### Common Replacements

| Old Text | New Text |
|----------|----------|
| Azure Active Directory | Microsoft Entra ID |
| AAD | Entra |
| + New User | + New User > Create new user |
| scroll right and select Remove | right-click to select, then click Remove assignments |

### MFA-Related Additions

Consider adding these notes where users log in with new accounts:

```markdown
**Note:** When signing in for the first time, you will be prompted to set up 
Multi-Factor Authentication (MFA). Follow the prompts to configure the 
Microsoft Authenticator app. This is required by Azure MFA Phase 2 enforcement.
```
