# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-23T06:13:20.169Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 16 |
| Instruction Fixes Needed | 16 |
| Environment Fixes Needed | 0 |
| Critical Issues | 15 |
| Estimated Effort | High (> 4 hours) |

## 📝 Instruction Updates

### 🔴 Critical Priority (15)

#### Sign in to Azure Portal

**Step ID:** step-1-signin-portal
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. If a Welcome to Azure splash screen appears, dismiss it to proceed to the portal.
```

---

#### Navigate to Microsoft Entra ID

**Step ID:** step-2-navigate-entraid
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) is not installed. Cannot execute any commands or launch browser.

**Original Instruction:**
```
Search for and select Microsoft Entra ID.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID.
```

---

#### Explore Overview and Tenant Management

**Step ID:** step-3-explore-overview
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed. All browser interaction blocked.

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

**Suggested Update:**
```
Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by selecting the back arrow in the browser toolbar or choosing the Entra ID option in the breadcrumb menu.
```

---

#### Navigate to Users Section

**Step ID:** step-4-navigate-users
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
In the Manage blade, select Users; then in the New user drop-down select Create new user.
```

**Suggested Update:**
```
In the Manage blade, select Users; then in the New user drop-down select Create new user.
```

---

#### Configure Basic User Information

**Step ID:** step-5-create-internal-user-basic
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate password checked, Account enabled checked.
```

**Suggested Update:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate password checked, Account enabled checked. Use Windows PowerShell (powershell.exe) to run any required commands.
```

---

#### Configure User Properties

**Step ID:** step-6-configure-user-properties
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
Move to the Properties tab. Complete the basic information with Job title: IT Lab Administrator, Department: IT, Usage location: United States.
```

**Suggested Update:**
```
Move to the Properties tab. Complete the basic information with Job title: IT Lab Administrator, Department: IT, Usage location: United States.
```

---

#### Create Internal User

**Step ID:** step-7-create-internal-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
Select Review + create and then Create. Refresh the page and confirm your new user was created.
```

**Suggested Update:**
```
Select **Review + create** and then **Create**. Refresh the page and confirm your new user was created.
```

---

#### Invite External User

**Step ID:** step-8-invite-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Enter your email address, your name as display name, check Send invite message box, add message 'Welcome to Azure and our group project'.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Enter your email address, your name as display name, check Send invite message box, add message 'Welcome to Azure and our group project'.
```

---

#### Configure External User Properties

**Step ID:** step-9-configure-external-user-properties
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
Move to the Properties tab. Complete the basic information, including Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

**Suggested Update:**
```
Move to the Properties tab. Complete the basic information, including Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

---

#### Navigate to Groups Section

**Step ID:** step-10-navigate-groups
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups.
```

**Suggested Update:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups.
```

---

#### Start Creating New Group

**Step ID:** step-11-create-new-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
In the All groups blade, select + New group and create a new group.
```

**Suggested Update:**
```
In the All groups blade, select + New group and create a new group.
```

---

#### Configure Group Details

**Step ID:** step-12-configure-group-details
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
Configure with Group type: Security, Group name: IT Lab Administrators, Group description: Administrators that manage the IT lab, Membership type: Assigned.
```

**Suggested Update:**
```
Configure with Group type: Security, Group name: IT Lab Administrators, Group description: Administrators that manage the IT lab, Membership type: Assigned.
```

---

#### Add Group Owners

**Step ID:** step-13-add-group-owners
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
Select No owners selected. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner.
```

**Suggested Update:**
```
Select **No owners selected**. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner.
```

---

#### Add Group Members

**Step ID:** step-14-add-group-members
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
Select No members selected. In the Add members pane, search for and select the az104-user1 and the guest user you invited. Add both of the users to the group.
```

**Suggested Update:**
```
Select **No members selected**. In the **Add members** pane, search for and select the az104-user1 and the guest user you invited. Add both users to the group.
```

---

#### Create and Verify Group

**Step ID:** step-15-create-and-verify-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> PowerShell 6+ (pwsh.exe) not installed.

**Original Instruction:**
```
Select Create to deploy the group. Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information.
```

**Suggested Update:**
```
Select Create to deploy the group. Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information. Note that some automation features require Windows PowerShell; if prompted to run scripts, use Windows PowerShell (powershell.exe) rather than PowerShell 6+ (pwsh.exe).
```

---

### 🟠 High Priority (1)

#### Navigate to Microsoft Entra ID

**Step ID:** step-2-navigate-entraid
**Category:** flow_change
**Confidence:** high

**Reason:**
> Install PowerShell 6+ (pwsh.exe)

**Original Instruction:**
```
Search for and select Microsoft Entra ID.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID, ensuring PowerShell 6+ (pwsh.exe) is installed on your system.
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
