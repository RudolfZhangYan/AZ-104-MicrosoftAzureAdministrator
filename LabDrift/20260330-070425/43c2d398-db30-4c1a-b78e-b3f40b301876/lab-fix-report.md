# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-30T09:56:20.044Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 5 |
| Instruction Fixes Needed | 5 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Low (< 1 hour) |

## 📝 Instruction Updates

### 🟠 High Priority (2)

#### Explore Overview and Manage Tenants

**Step ID:** step-3-explore-overview-tenants
**Category:** ui_change
**Confidence:** high

**Reason:**
> The lab instructions refer to "Manage tenants tab" but in the current UI it appears as a toolbar button (管理租户) in the command bar alongside "+ Add", "What's new", "Preview features", and "Provide feedback" — not as a content tab next to Overview/Monitoring/Properties/Recommendations/Setup guides.

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

**Suggested Update:**
```
Select the Overview blade, then select **Manage tenants** in the command bar at the top of the page. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

---

#### Invite External User

**Step ID:** step-7-invite-external-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> The form tabs show "Review + invite" (not "Review + create" as on the create user form). Additional fields visible that aren't mentioned in instructions: Cc recipient, Invite redirect URL (pre-filled with myapplications.microsoft.com). An info banner states "Starting December 2025, B2B invitation emails will be sent from your organization's primary domain instead of Microsoft.com."

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: checked, Message: Welcome to Azure and our group project.
```

**Suggested Update:**
```
In the **New user** drop-down, select **Invite an external user**. Set **Email** to your email address, **Display name** to your name, and enable **Send invite message**. In the **Message** field, enter: *Welcome to Azure and our group project.* Then select **Review + invite** to complete the invitation.
```

---

### 🟡 Medium Priority (1)

#### Explore Overview and Manage Tenants

**Step ID:** step-3-explore-overview-tenants
**Category:** new_requirement
**Confidence:** high

**Reason:**
> A Microsoft feedback popup appeared ("向 Microsoft 提供反馈 — 你对 Microsoft Entra 的满意度如何?") — informational only, did not block progress.

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

**Suggested Update:**
```
Select the Overview blade and then the Manage tenants tab. If a Microsoft feedback popup appears, dismiss it. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

---

### 🟢 Low Priority (2)

#### Verify User Creation

**Step ID:** step-6-verify-user-created
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An informational banner "Azure Active Directory is now Microsoft Entra ID" appears at the top — informational only, does not block progress.

**Original Instruction:**
```
Refresh the page and confirm your new user was created.
```

**Suggested Update:**
```
Refresh the page and confirm your new user was created. If a banner appears stating "Azure Active Directory is now Microsoft Entra ID", dismiss or ignore it and continue.
```

---

#### Invite External User

**Step ID:** step-7-invite-external-user
**Category:** new_requirement
**Confidence:** high

**Reason:**
> Info banner about B2B invitation email changes (December 2025) — informational only, does not block progress.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: checked, Message: Welcome to Azure and our group project.
```

**Suggested Update:**
```
In the New user drop-down, select **Invite an external user**. Set **Email** to your email address, **Display name** to your name, and **Message** to: *Welcome to Azure and our group project*. Note that invite emails are now sent from a Microsoft domain (invites@microsoft.com) — if prompted by an info banner, acknowledge it and continue. Ensure **Send invite message** is checked, then proceed.
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
