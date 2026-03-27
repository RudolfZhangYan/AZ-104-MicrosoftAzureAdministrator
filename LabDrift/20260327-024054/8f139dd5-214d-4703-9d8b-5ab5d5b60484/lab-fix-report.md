# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-27T03:57:38.416Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 3 |
| Instruction Fixes Needed | 3 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Low (< 1 hour) |

## 📝 Instruction Updates

### 🟠 High Priority (1)

#### Sign in to Azure Portal

**Step ID:** step-1-signin-portal
**Category:** ui_change
**Confidence:** high

**Reason:**
> The "Welcome to Azure" screen is a subscription landing page showing "Don't have a subscription? Check out the following options" with Start/View/Learn more buttons — not a dismissible splash modal with a Cancel button. This likely appears because the account has no active subscription.

**Original Instruction:**
```
Sign in to the Azure portal at https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal at https://portal.azure.com. If a subscription landing page appears, navigate directly to the portal using the Azure services menu or the home icon.
```

---

### 🟡 Medium Priority (1)

#### Navigate to Microsoft Entra ID

**Step ID:** step-2-navigate-entra-id
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An "Interaction Required" (需要交互) warning dialog appeared with AADSTS16000 error stating the user account from identity provider 'live.com' does not exist in this tenant. This is an account/authentication configuration issue, not instruction drift. The dialog is dismissible by clicking "Ignore" (忽略) and does not block access to Entra ID features.

**Original Instruction:**
```
Search for and select Microsoft Entra ID from the Azure portal.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID from the Azure portal. If an "Interaction Required" warning dialog appears, click **Ignore** to dismiss it and continue.
```

---

### 🟢 Low Priority (1)

#### Setup External User Invitation

**Step ID:** step-7-invite-external-user-setup
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An informational banner at top states "Starting December 2025, B2B invitation emails will be sent from your organization's primary domain (e.g., contoso.onmicrosoft.com) instead of Microsoft.com." This is informational only and does not block progress.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Enter your email address, your name as display name, check Send invite message, add message 'Welcome to Azure and our group project'.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Enter your email address, your name as display name, check Send invite message, and add the message 'Welcome to Azure and our group project'. Note that starting December 2025, invitation emails will be sent from your organization's primary domain (e.g., contoso.onmicrosoft.com) instead of Microsoft.com.
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
