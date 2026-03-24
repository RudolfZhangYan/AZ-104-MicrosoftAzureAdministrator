# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-24T09:07:48.911Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 15 |
| Instruction Fixes Needed | 15 |
| Environment Fixes Needed | 0 |
| Critical Issues | 15 |
| Estimated Effort | High (> 4 hours) |

## 📝 Instruction Updates

### 🔴 Critical Priority (15)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-azure-portal
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome splash screen by selecting Cancel
```

**Suggested Update:**
```
Sign in to the Azure portal at https://portal.azure.com. If a Welcome splash screen appears, dismiss it by selecting **Cancel**.
```

---

#### Search for and select Microsoft Entra ID

**Step ID:** step-2-navigate-entra-id
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Search for and select Microsoft Entra ID to access Azure's cloud-based identity and access management solution
```

**Suggested Update:**
```
Search for and select **Microsoft Entra ID** in the Azure portal search bar to access Azure's cloud-based identity and access management solution
```

---

#### Explore Overview and Manage tenants

**Step ID:** step-3-explore-overview
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab to view tenant information, then return to the Entra ID page
```

**Suggested Update:**
```
In the Entra ID portal, select **Manage tenants** from the top navigation or portal menu to view tenant information, then return to the Entra ID page.
```

---

#### Navigate to Users management

**Step ID:** step-4-navigate-to-users
**Category:** removed_feature
**Confidence:** high

**Reason:**
> This agent does not have Playwright MCP or browser tools configured. Steps must be routed to a Copilot SDK session with Playwright MCP server.

**Original Instruction:**
```
In the Manage blade, select Users and then select Create new user from the New user dropdown
```

**Suggested Update:**
```
In the Manage blade, select Users and then select Create new user from the New user dropdown
```

---

#### Fill basic user information

**Step ID:** step-5-create-user-basic-info
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Create a new user with User principal name 'az104-user1', Display name 'az104-user1', Auto-generate password checked, and Account enabled checked
```

**Suggested Update:**
```
Create a new user with User principal name 'az104-user1', Display name 'az104-user1', Auto-generate password checked, and Account enabled checked
```

---

#### Configure user properties

**Step ID:** step-6-configure-user-properties
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Switch to the Properties tab and set Job title to 'IT Lab Administrator', Department to 'IT', and Usage location to United States
```

**Suggested Update:**
```
Switch to the Properties tab and set Job title to 'IT Lab Administrator', Department to 'IT', and Usage location to United States
```

---

#### Create the user account

**Step ID:** step-7-create-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Select Review + create and then Create to create the user account
```

**Suggested Update:**
```
Select **Review + create** and then **Create** to create the user account.
```

---

#### Verify user creation

**Step ID:** step-8-verify-user-creation
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Refresh the page and confirm your new user was created
```

**Suggested Update:**
```
Refresh the page and confirm your new user appears in the list
```

---

#### Start external user invitation

**Step ID:** step-9-invite-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
In the New user dropdown select Invite an external user
```

**Suggested Update:**
```
In the New user dropdown select Invite an external user
```

---

#### Configure external user invitation

**Step ID:** step-10-configure-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Fill Email with your email address, Display name with your name, check Send invite message box, and set Message to 'Welcome to Azure and our group project'. Then move to Properties tab and set Job title to 'IT Lab Administrator', Department to 'IT', and Usage location to United States
```

**Suggested Update:**
```
Fill Email with your email address, Display name with your name, check Send invite message box, and set Message to 'Welcome to Azure and our group project'. Then move to Properties tab and set Job title to 'IT Lab Administrator', Department to 'IT', and Usage location to United States
```

---

#### Send external user invitation

**Step ID:** step-11-send-invitation
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Select Review + invite and then Invite to send the invitation
```

**Suggested Update:**
```
Select **Review + invite** and then **Invite** to send the invitation
```

---

#### Navigate to Groups management

**Step ID:** step-12-navigate-to-groups
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Search for and select Microsoft Entra ID, then in the Manage blade select Groups
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID, then in the Manage blade select Groups
```

---

#### Create security group

**Step ID:** step-13-create-new-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
In the All groups blade, select + New group and create a new group with Group type 'Security', Group name 'IT Lab Administrators', Group description 'Administrators that manage the IT lab', and Membership type 'Assigned'
```

**Suggested Update:**
```
In the All groups blade, select + New group and create a new group with Group type 'Security', Group name 'IT Lab Administrators', Group description 'Administrators that manage the IT lab', and Membership type 'Assigned'
```

---

#### Add group owners and members

**Step ID:** step-14-add-group-owners-members
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Select No owners selected, add yourself as owner. Then select No members selected and add both az104-user1 and the guest user you invited to the group
```

**Suggested Update:**
```
Select **No owners selected**, add yourself as owner. Then select **No members selected** and add both az104-user1 and the guest user you invited to the group.
```

---

#### Deploy and verify group

**Step ID:** step-15-deploy-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> No Playwright MCP or browser tools available in this session

**Original Instruction:**
```
Select Create to deploy the group, then refresh the page and ensure your group was created. Select the new group and review the Members and Owners information
```

**Suggested Update:**
```
Select **Create** to deploy the group, then refresh the page and confirm your group appears in the list. Select the new group and review the **Members** and **Owners** information.
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
