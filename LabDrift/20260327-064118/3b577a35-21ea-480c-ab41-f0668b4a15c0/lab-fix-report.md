# Lab Fix Report

**Lab:** Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-27T10:34:26.859Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 3 |
| Instruction Fixes Needed | 3 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Low (< 1 hour) |

## 📝 Instruction Updates

### 🟠 High Priority (2)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions mention a "Welcome to Azure" splash screen with a Cancel button. Instead, the portal loaded directly to the home page showing "Welcome to Azure!" as the default no-subscription landing page — not a dismissable modal. This is normal for returning authenticated sessions.

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. The portal will load directly to the home page.
```

---

#### Verify External User Invitation

**Step ID:** step-8-verify-external-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> The invited external user's display name resolved to the Microsoft Account's profile name ("Zhang Rudolf") rather than the "az104-user2" display name set during invitation. This is standard Azure behavior — when inviting an existing Microsoft Account, Entra ID uses the account's real profile name.

**Original Instruction:**
```
Refresh the page and confirm the invited user was created.
```

**Suggested Update:**
```
Refresh the page and confirm the invited user appears in the list. The display name may reflect the user's Microsoft Account profile name rather than the name entered during invitation.
```

---

### 🟡 Medium Priority (1)

#### Verify External User Invitation

**Step ID:** step-8-verify-external-user
**Category:** new_requirement
**Confidence:** high

**Reason:**
> A "Give feedback to Microsoft" popup appeared in the top-right corner (informational only, did not block progress).

**Original Instruction:**
```
Refresh the page and confirm the invited user was created.
```

**Suggested Update:**
```
Refresh the page and confirm the invited user was created. If a "Give feedback to Microsoft" popup appears in the top-right corner, dismiss or ignore it and continue.
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
