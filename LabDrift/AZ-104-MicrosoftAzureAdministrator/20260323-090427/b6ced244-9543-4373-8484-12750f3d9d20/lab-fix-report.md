# Lab Fix Report

**Lab:** Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-23T09:08:00.253Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 13 |
| Instruction Fixes Needed | 13 |
| Environment Fixes Needed | 0 |
| Critical Issues | 13 |
| Estimated Effort | High (> 4 hours) |

## 📝 Instruction Updates

### 🔴 Critical Priority (13)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) is not installed. All tool execution is blocked. Install from https://aka.ms/powershell then retry.

**Original Instruction:**
```
Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash screen by selecting Cancel.
```

**Suggested Update:**
```
Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash screen by selecting Cancel.
```

---

#### Navigate to Microsoft Entra ID

**Step ID:** step-2-navigate-entra-id
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) is not installed. All tool execution is blocked — no browser, no CLI, no screenshots. Install from https://aka.ms/powershell then retry.

**Original Instruction:**
```
Search for and select Microsoft Entra ID. Take a few minutes to familiarize yourself with the features in the left pane.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID. Take a few minutes to familiarize yourself with the features in the left pane.
```

---

#### Explore Entra ID Overview

**Step ID:** step-3-explore-overview
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab. Review tenant information, then return to the Entra ID page using browser back or breadcrumb menu.
```

**Suggested Update:**
```
Select the Overview blade and then the Manage tenants tab. Review tenant information, then return to the Entra ID page using browser back or breadcrumb menu.
```

---

#### Navigate to Users section

**Step ID:** step-4-navigate-users
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
In the Manage blade, select Users, then in the New user drop-down select Create new user.
```

**Suggested Update:**
```
In the Manage blade, select Users, then in the New user drop-down select Create new user.
```

---

#### Create az104-user1 account

**Step ID:** step-5-create-user1
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
Create a new user with User principal name 'az104-user1', Display name 'az104-user1', Auto-generate password checked, Account enabled checked. On Properties tab set Job title to 'IT Lab Administrator', Department to 'IT', Usage location to 'United States'. Select Review + create then Create.
```

**Suggested Update:**
```
Create a new user with User principal name 'az104-user1', Display name 'az104-user1', Auto-generate password checked, Account enabled checked. On Properties tab set Job title to 'IT Lab Administrator', Department to 'IT', Usage location to 'United States'. Select Review + create then Create.
```

---

#### Verify user creation

**Step ID:** step-6-verify-user1
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
Refresh the page and confirm your new user was created.
```

**Suggested Update:**
```
Refresh the page and confirm your new user appears in the user list.
```

---

#### Invite external user

**Step ID:** step-7-invite-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Fill Email with your email address, Display name with your name, check Send invite message, Message 'Welcome to Azure and our group project'. Move to Properties tab and set Job title to 'IT Lab Administrator', Department to 'IT', Usage location to 'United States'. Select Review + invite then Invite.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Fill Email with your email address, Display name with your name, check Send invite message, Message 'Welcome to Azure and our group project'. Move to Properties tab and set Job title to 'IT Lab Administrator', Department to 'IT', Usage location to 'United States'. Select Review + invite then Invite.
```

---

#### Navigate to Groups section

**Step ID:** step-8-navigate-groups
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
Search for and select Microsoft Entra ID again. In the Manage blade, select Groups. Take a minute to familiarize yourself with the group settings in the left pane including Expiration and Naming policy options.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID again. In the Manage blade, select Groups. Take a minute to familiarize yourself with the group settings in the left pane including Expiration and Naming policy options.
```

---

#### Create IT Lab Administrators group

**Step ID:** step-9-create-new-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
In the All groups blade, select + New group and create a new group with Group type 'Security', Group name 'IT Lab Administrators', Group description 'Administrators that manage the IT lab', Membership type 'Assigned'.
```

**Suggested Update:**
```
In the All groups blade, select + New group and create a new group with Group type 'Security', Group name 'IT Lab Administrators', Group description 'Administrators that manage the IT lab', Membership type 'Assigned'.
```

---

#### Add group owners

**Step ID:** step-10-add-group-owners
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
Select No owners selected. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner.
```

**Suggested Update:**
```
Select No owners selected. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner.
```

---

#### Add group members

**Step ID:** step-11-add-group-members
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
Select No members selected. In the Add members pane, search for and select both az104-user1 and the guest user you invited. Add both users to the group.
```

**Suggested Update:**
```
Select No members selected. In the Add members pane, search for and select both az104-user1 and the guest user you invited. Add both users to the group.
```

---

#### Deploy the group

**Step ID:** step-12-create-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
Select Create to deploy the group. Refresh the page and ensure your group was created.
```

**Suggested Update:**
```
Select **Create** to deploy the group. If the browser-based deployment is unavailable, open a supported terminal (such as Command Prompt or Windows PowerShell 5.1) and run the equivalent deployment command. Refresh the page and ensure your group was created.
```

---

#### Verify group configuration

**Step ID:** step-13-verify-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All execution blocked.

**Original Instruction:**
```
Select the new IT Lab Administrators group and review the Members and Owners information to confirm both users are added and ownership is correct.
```

**Suggested Update:**
```
Select the new IT Lab Administrators group and review the Members and Owners information to confirm both users are added and ownership is correct. Note that PowerShell automation is unavailable in this environment; perform all verification steps manually through the portal UI.
```

---

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
