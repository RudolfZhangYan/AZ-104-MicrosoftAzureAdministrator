# Lab Fix Report

**Lab:** Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-24T09:00:19.878Z

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
> Element not found

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. If a Welcome to Azure splash screen appears, select Cancel to proceed to the portal.
```

---

#### Navigate to Microsoft Entra ID

**Step ID:** step-2-navigate-entra-id
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Search for and select Microsoft Entra ID. Take a few minutes to familiarize yourself with some of the features listed in the left pane.
```

**Suggested Update:**
```
In the Azure portal, use the search bar at the top of the page to search for **Microsoft Entra ID**, or select it from the list of Azure services. Once open, take a few minutes to familiarize yourself with some of the features listed in the left pane.
```

---

#### Explore Tenant Management

**Step ID:** step-3-explore-tenants
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

**Suggested Update:**
```
In the Microsoft Entra admin center, navigate to **Identity** > **Overview**. To view and manage tenants, select **Manage tenants** from the top menu bar on the Overview page. Return to the Entra ID Overview page by selecting **Microsoft Entra ID** in the left-hand navigation or using the breadcrumb at the top of the page.
```

---

#### Navigate to Users Section

**Step ID:** step-4-navigate-users
**Category:** removed_feature
**Confidence:** high

**Reason:**
> This agent does not have Playwright MCP or browser control tools. These lab steps require the runner-mcp-drift.ts pipeline with Playwright MCP configured. Steps cannot be executed from a terminal-only session.

**Original Instruction:**
```
In the Manage blade, select Users; then in the New user drop-down select Create new user.
```

**Suggested Update:**
```
In the Manage blade, select Users; then in the New user drop-down select Create new user.
```

---

#### Create New User az104-user1

**Step ID:** step-5-create-new-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate password: checked, Account enabled: checked. On Properties tab set Job title: IT Lab Administrator, Department: IT, Usage location: United States.
```

**Suggested Update:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate password: checked, Account enabled: checked. On Properties tab set Job title: IT Lab Administrator, Department: IT, Usage location: United States.
```

---

#### Verify New User Creation

**Step ID:** step-6-verify-user-creation
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
Refresh the page and confirm your new user was created.
```

**Suggested Update:**
```
Refresh the page and confirm your new user appears in the user list.
```

---

#### Invite External User

**Step ID:** step-7-invite-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: checked, Message: Welcome to Azure and our group project. On Properties tab set Job title: IT Lab Administrator, Department: IT, Usage location: United States.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: checked, Message: Welcome to Azure and our group project. On Properties tab set Job title: IT Lab Administrator, Department: IT, Usage location: United States.
```

---

#### Navigate to Groups Section

**Step ID:** step-8-navigate-groups
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups.
```

**Suggested Update:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups.
```

---

#### Create Security Group

**Step ID:** step-9-create-new-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
In the All groups blade, select + New group and create a new group with Group type: Security, Group name: IT Lab Administrators, Group description: Administrators that manage the IT lab, Membership type: Assigned.
```

**Suggested Update:**
```
In the All groups blade, select + New group and create a new group with Group type: Security, Group name: IT Lab Administrators, Group description: Administrators that manage the IT lab, Membership type: Assigned.
```

---

#### Add Group Owners

**Step ID:** step-10-add-group-owners
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
Select No owners selected. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner.
```

**Suggested Update:**
```
Select **No owners selected**. In the **Add owners** page, search for and select yourself (your account is displayed in the top right corner) as the owner.
```

---

#### Add Group Members

**Step ID:** step-11-add-group-members
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
Select No members selected. In the Add members pane, search for and select the az104-user1 and the guest user you invited. Add both of the users to the group.
```

**Suggested Update:**
```
Select **No members selected**. In the **Add members** pane, search for and select **az104-user1** and the guest user you invited. Add both users to the group.
```

---

#### Deploy the Group

**Step ID:** step-12-deploy-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
Select Create to deploy the group.
```

**Suggested Update:**
```
Select **Create** to deploy the group.
```

---

#### Verify Group Creation and Review Members

**Step ID:** step-13-verify-group-creation
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Agent lacks Playwright MCP browser tools. Cannot execute browser-based steps.

**Original Instruction:**
```
Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information.
```

**Suggested Update:**
```
Refresh the page and confirm your group appears in the list. Select the new group and review the Members and Owners information displayed in the group details panel.
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
