# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-26T02:23:59.372Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 4 |
| Instruction Fixes Needed | 4 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Low (< 1 hour) |

## 📝 Instruction Updates

### 🟠 High Priority (3)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-azure
**Category:** ui_change
**Confidence:** high

**Reason:**
> The "Welcome to Azure" splash screen with a "Cancel" button no longer appears as a modal dialog. Instead, the portal loads directly to the home page which shows inline "Welcome to Azure!" content with subscription options (Free Trial, Manage Entra ID, Azure for Students). There is no Cancel button to click. This appears to be the current default home experience for tenants without subscriptions.

**Original Instruction:**
```
Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash screen by selecting Cancel
```

**Suggested Update:**
```
Sign in to the Azure portal at https://portal.azure.com. The portal will load directly to the home page.
```

---

#### Invite External User

**Step ID:** step-7-invite-external-user
**Category:** ui_change
**Confidence:** medium

**Reason:**
> Button now opens a dropdown menu instead of direct action

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Enter your email address, your name as display name, check Send invite message, add message 'Welcome to Azure and our group project'. Go to Properties tab and set Job title to IT Lab Administrator, Department to IT, Usage location to United States. Click Review + invite, then Invite
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Enter your email address, your name as display name, check Send invite message, add message 'Welcome to Azure and our group project'. Go to Properties tab and set Job title to IT Lab Administrator, Department to IT, Usage location to United States. Click "Review + invite, then Invite" to expand the menu, then select the appropriate option
```

---

#### Create IT Lab Administrators Group

**Step ID:** step-9-create-security-group
**Category:** ui_change
**Confidence:** high

**Reason:**
> Button now opens a dropdown menu instead of direct action

**Original Instruction:**
```
In the All groups blade, select + New group. Set Group type to Security, Group name to IT Lab Administrators, Group description to Administrators that manage the IT lab, Membership type to Assigned
```

**Suggested Update:**
```
In the All groups blade, select + New group and choose **Security group** from the dropdown menu. Set Group name to IT Lab Administrators, Group description to Administrators that manage the IT lab, and Membership type to Assigned.
```

---

### 🟢 Low Priority (1)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-azure
**Category:** new_requirement
**Confidence:** high

**Reason:**
> A Microsoft feedback survey toast ("How satisfied are you with portal.azure.com?") appeared in the top-right corner. It's informational and does not block progress — can be dismissed via its X button.

**Original Instruction:**
```
Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash screen by selecting Cancel
```

**Suggested Update:**
```
Sign in to the Azure portal at https://portal.azure.com, dismiss the Welcome to Azure splash screen by selecting **Cancel**, and close any feedback survey toast that may appear in the top-right corner by selecting its **X** button.
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
