# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-30T04:42:45.755Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 3 |
| Instruction Fixes Needed | 3 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Low (< 1 hour) |

## 📝 Instruction Updates

### 🟡 Medium Priority (2)

#### Navigate to Microsoft Entra ID

**Step ID:** step-2-navigate-entra-id
**Category:** new_requirement
**Confidence:** high

**Reason:**
> A "Give feedback to Microsoft" satisfaction survey popup appeared in the top-right corner. It was informational only and did not block any functionality.

**Original Instruction:**
```
Search for and select Microsoft Entra ID from the Azure portal
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID from the Azure portal, dismissing any feedback survey popups that may appear.
```

---

#### Invite External User

**Step ID:** step-7-invite-external-user
**Category:** new_requirement
**Confidence:** high

**Reason:**
> A "Give feedback to Microsoft" satisfaction survey popup appeared in the top-right corner during the invite form. It was informational only and did not block functionality.

**Original Instruction:**
```
Click New user dropdown, select Invite an external user, fill the invitation form with your email and details, then send the invitation
```

**Suggested Update:**
```
Click New user dropdown, select Invite an external user, fill the invitation form with your email and details, dismiss any feedback survey popup that appears in the top-right corner, then send the invitation
```

---

### 🟢 Low Priority (1)

#### Create New User

**Step ID:** step-5-create-new-user
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An informational banner "Azure Active Directory is now Microsoft Entra ID" appears at the top of the Users page. It is non-blocking and informational only.

**Original Instruction:**
```
Click the New user dropdown and select Create new user, then fill the form with az104-user1 details and create the user
```

**Suggested Update:**
```
If an informational banner appears stating "Azure Active Directory is now Microsoft Entra ID", dismiss or ignore it. Then click the **New user** dropdown, select **Create new user**, fill the form with az104-user1 details, and create the user.
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
