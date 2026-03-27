# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-27T14:39:46.894Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 6 |
| Instruction Fixes Needed | 6 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Medium (1-4 hours) |

## 📝 Instruction Updates

### 🟠 High Priority (4)

#### Sign in to Azure Portal

**Step ID:** step-1-signin-portal
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions say "Select Cancel on the Welcome to Azure splash screen." The portal now shows a "Welcome to Azure!" home page with subscription option cards (Free trial, Manage Entra ID, Azure for Students) — this is the default home page, not a dismissable overlay. There is no Cancel button. A human user would simply proceed.

**Original Instruction:**
```
Sign in to the Azure portal at https://portal.azure.com. Select Cancel on the Welcome to Azure splash screen to proceed to the portal.
```

**Suggested Update:**
```
Sign in to the Azure portal at https://portal.azure.com. Once signed in, you will land on the Azure home page — proceed directly to the portal.
```

---

#### Create New User Account

**Step ID:** step-4-create-new-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> The create form uses a tabbed layout (Basics, Properties, Assignments, Review + create). Job title, Department, and Usage location are on the "Properties" tab. Usage location requires scrolling within the Properties tab.

**Original Instruction:**
```
In the Manage blade, select Users, then in the New user drop-down select Create new user. Create a new user with User principal name 'az104-user1', Display name 'az104-user1', auto-generate password checked, account enabled checked, job title 'IT Lab Administrator', department 'IT', and usage location 'United States'. Select Review + create and then Create.
```

**Suggested Update:**
```
In the Manage blade, select Users, then in the New user drop-down select Create new user. On the **Basics** tab, enter User principal name 'az104-user1', Display name 'az104-user1', and ensure auto-generate password and account enabled are both checked. Select the **Properties** tab and enter job title 'IT Lab Administrator' and department 'IT'. Scroll down within the Properties tab and set usage location to 'United States'. Select **Review + create** and then **Create**.
```

---

#### Invite External User

**Step ID:** step-5-invite-external-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> Button now opens a dropdown menu instead of direct action

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Enter your email address, your name as display name, check Send invite message, add message 'Welcome to Azure and our group project'. Move to Properties tab and set job title 'IT Lab Administrator', department 'IT', usage location 'United States'. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the **New user** dropdown, select **Invite an external user**. Enter your email address, your name as display name, check **Send invite message**, and add the message 'Welcome to Azure and our group project'. Move to the **Properties** tab and set job title 'IT Lab Administrator', department 'IT', usage location 'United States'. Select **Review + invite**, then click **Invite**.
```

---

#### Navigate to Groups Section

**Step ID:** step-6-navigate-groups
**Category:** ui_change
**Confidence:** high

**Reason:**
> Button now opens a dropdown menu instead of direct action

**Original Instruction:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups. Take a minute to familiarize yourself with the group settings in the left pane including Expiration and Naming policy options.
```

**Suggested Update:**
```
In the Azure portal, search for and select **Microsoft Entra ID**. In the Manage blade, select **Groups** — if Groups opens a dropdown menu, select the appropriate option to view all groups. Take a minute to familiarize yourself with the group settings in the left pane including Expiration and Naming policy options.
```

---

### 🟡 Medium Priority (1)

#### Invite External User

**Step ID:** step-5-invite-external-user
**Category:** new_requirement
**Confidence:** high

**Reason:**
> A "Give feedback to Microsoft" popup appeared in the top-right corner asking about satisfaction with portal.azure.com. This is informational only and did not block any actions.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Enter your email address, your name as display name, check Send invite message, add message 'Welcome to Azure and our group project'. Move to Properties tab and set job title 'IT Lab Administrator', department 'IT', usage location 'United States'. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. If a "Give feedback to Microsoft" popup appears in the top-right corner, dismiss it. Enter your email address, your name as display name, check Send invite message, add message 'Welcome to Azure and our group project'. Move to Properties tab and set job title 'IT Lab Administrator', department 'IT', usage location 'United States'. Select Review + invite, then Invite.
```

---

### 🟢 Low Priority (1)

#### Navigate to Groups Section

**Step ID:** step-6-navigate-groups
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An informational banner at the top reads "Microsoft Entra has a simpler, integrated experience for managing all your Identity and Access Management needs. Try the new Microsoft Entra admin center!" — informational only, not blocking.

**Original Instruction:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups. Take a minute to familiarize yourself with the group settings in the left pane including Expiration and Naming policy options.
```

**Suggested Update:**
```
In the Azure portal, search for and select Microsoft Entra ID. If a banner appears promoting the Microsoft Entra admin center, you can dismiss it and continue. In the Manage blade, select Groups. Take a minute to familiarize yourself with the group settings in the left pane including Expiration and Naming policy options.
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
