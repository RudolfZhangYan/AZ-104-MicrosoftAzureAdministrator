# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-25T16:35:25.268Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 8 |
| Instruction Fixes Needed | 8 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Low (< 1 hour) |

## 📝 Instruction Updates

### 🟠 High Priority (3)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions describe a "Welcome to Azure splash screen" with a Cancel button (a guided tour overlay). Instead, the portal loaded directly to the home page showing "欢迎使用 Azure!" with subscription setup options. No dismissible splash/tour overlay appeared. This is likely because the welcome tour does not appear for returning users who have previously dismissed it — a human following these instructions for the second time would see the same behavior.

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. If a Welcome to Azure splash screen appears with a guided tour overlay, select **Cancel** to dismiss it and proceed to the portal home page.
```

---

#### Navigate and Explore Entra ID

**Step ID:** step-2-navigate-entra-explore
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions say "Manage tenants tab" but it is a command bar button in the toolbar (alongside "+ Add", "What's new", "Preview features"), not a content-area tab. The actual content-area tabs are: Overview, Monitor, Properties, Recommendations, Setup Guide. A human looking for a "Manage tenants tab" within the tab strip would not find it there — they need to look at the command bar toolbar above.

**Original Instruction:**
```
Search for and select Microsoft Entra ID. Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser. Explore options such as Licenses and Password reset.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID. Select the Overview blade and then click the **Manage tenants** button in the command bar toolbar. Return to the Entra ID page by pressing back in the browser. Explore options such as Licenses and Password reset.
```

---

#### Invite External User

**Step ID:** step-4-invite-external-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> The form wizard includes an "Assignments" tab (分配) between Properties and Review+invite that is not mentioned in the lab instructions. The form also has additional optional fields not in instructions: "CC Recipients" (抄送收件人) and "Invite Redirect URL" (邀请重定向 URL), both pre-populated with defaults.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: checked, Message: Welcome to Azure and our group project. Move to the Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: checked, Message: Welcome to Azure and our group project. Move to the Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Move to the Assignments tab and leave the default settings. Select Review + invite, then Invite.
```

---

### 🟢 Low Priority (5)

#### Navigate and Explore Entra ID

**Step ID:** step-2-navigate-entra-explore
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An informational banner appears on the Overview page about trying the new Microsoft Entra admin center. Does not block progress.

**Original Instruction:**
```
Search for and select Microsoft Entra ID. Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser. Explore options such as Licenses and Password reset.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID. Select the Overview blade — if a banner appears about the new Microsoft Entra admin center, dismiss it or leave it and continue. Select the Manage tenants tab. Return to the Entra ID page by pressing back in the browser. Explore options such as Licenses and Password reset.
```

---

#### Invite External User

**Step ID:** step-4-invite-external-user
**Category:** new_requirement
**Confidence:** high

**Reason:**
> Informational banner on Basics tab: "Starting December 2025, B2B invitation emails will be sent from your organization's primary domain instead of Microsoft.com." Does not block progress.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: checked, Message: Welcome to Azure and our group project. Move to the Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: checked, Message: Welcome to Azure and our group project. Note that starting December 2025, invitation emails are sent from your organization's primary domain instead of Microsoft.com. Move to the Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

---

#### Verify Users Created

**Step ID:** step-5-verify-users
**Category:** new_requirement
**Confidence:** high

**Reason:**
> The info banner "Azure Active Directory 现在是 Microsoft Entra ID" (Azure Active Directory is now Microsoft Entra ID) persists on the Users page. Informational only, does not block progress.

**Original Instruction:**
```
Refresh the page and confirm the invited user was created.
```

**Suggested Update:**
```
Refresh the page and confirm the invited user was created. If a banner appears stating that Azure Active Directory is now Microsoft Entra ID, you can dismiss it or leave it — it does not affect your progress.
```

---

#### Navigate to Groups

**Step ID:** step-6-navigate-groups
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An informational banner appears at the top promoting the new Microsoft Entra admin center: "Microsoft Entra 是有更简单的集成体验，用于管理所有身份和访问管理需求。试用新的 Microsoft Entra 管理中心!" This is informational and does not block progress.

**Original Instruction:**
```
Search for and select Microsoft Entra ID. In the Manage blade, select Groups. Take a minute to familiarize yourself with the group settings in the left pane.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID. If a banner appears promoting the Microsoft Entra admin center, you may dismiss it or leave it. In the Manage blade, select Groups. Take a minute to familiarize yourself with the group settings in the left pane.
```

---

#### Verify Group Creation

**Step ID:** step-8-verify-group
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An automatic service principal "AAD Request Verification Service - PROD" appears as a group member that was not manually added. This is auto-added by Azure and a human user would also see it. The Owners list shows 2 owners (az104-user1 was also added as owner in addition to Zhang Rudolf) — this may differ from the instructions which only mention adding yourself as owner.

**Original Instruction:**
```
Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information.
```

**Suggested Update:**
```
Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information. Note that **AAD Request Verification Service - PROD** may appear automatically as a member — this is added by Azure and does not need to be removed. The Owners list should include yourself and any other owners you assigned during group creation.
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
