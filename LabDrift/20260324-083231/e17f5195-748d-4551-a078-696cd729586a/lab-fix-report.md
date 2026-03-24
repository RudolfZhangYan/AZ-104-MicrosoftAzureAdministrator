# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-24T08:36:06.836Z

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

**Step ID:** step-1-sign-in-portal
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
Sign in to the Azure portal at https://portal.azure.com. If a Welcome splash screen appears, dismiss it by selecting **Cancel** or closing the dialog.
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
Search for and select Microsoft Entra ID to access Azure's cloud-based identity and access management solution
```

**Suggested Update:**
```
In the Azure portal, use the search bar at the top to find and open **Microsoft Entra ID**, Azure's cloud-based identity and access management solution.
```

---

#### Explore Entra ID Overview

**Step ID:** step-3-explore-overview
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select the Overview blade, then the Manage tenants tab to explore tenant information, then return to the main Entra ID page
```

**Suggested Update:**
```
Select the Overview section, then look for tenant information options in the navigation menu to explore tenant details, then return to the main Entra ID page
```

---

#### Navigate to Users Management

**Step ID:** step-4-navigate-users
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
In the Manage blade, select Users to access user management functionality
```

**Suggested Update:**
```
In the left navigation menu, select **Users** to access user management functionality.
```

---

#### Create New User Account

**Step ID:** step-5-create-new-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Click New user dropdown, select Create new user, and configure with User principal name: az104-user1, Display name: az104-user1, Auto-generate password checked, Account enabled checked
```

**Suggested Update:**
```
In the Microsoft Entra ID portal, navigate to **Users** and select **+ Create new user**. In the **Basics** tab, enter the following: **User principal name**: az104-user1, **Display name**: az104-user1. Under **Password**, select **Auto-generate password**, and ensure **Account enabled** is checked. Select **Review + create**, then **Create**.
```

---

#### Configure User Properties

**Step ID:** step-6-configure-user-properties
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Navigate to Properties tab and configure Job title: IT Lab Administrator, Department: IT, Usage location: United States
```

**Suggested Update:**
```
Navigate to the **Properties** tab. If the Properties tab is not visible, look for user settings under **Edit** or a profile panel. Locate the **Job title** field and enter `IT Lab Administrator`, set **Department** to `IT`, and set **Usage location** to `United States`, then save your changes.
```

---

#### Create User Account

**Step ID:** step-7-create-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select Review + create, then Create to deploy the user account
```

**Suggested Update:**
```
Select **Create** to deploy the user account.
```

---

#### Invite External User

**Step ID:** step-8-invite-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Click New user dropdown, select Invite an external user, enter your email address, display name, check Send invite message, and add message: Welcome to Azure and our group project
```

**Suggested Update:**
```
Click **New user**, select **Invite external user**, enter your email address and display name, check **Send invite message**, and add the message: Welcome to Azure and our group project.
```

---

#### Configure Guest User Properties

**Step ID:** step-9-configure-guest-properties
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Move to Properties tab and complete Job title: IT Lab Administrator, Department: IT, Usage location: United States, then Review + invite and Invite
```

**Suggested Update:**
```
Navigate to the **Properties** tab on the guest user invitation form. If the Properties tab is not visible, look for additional settings or an expandable section within the invitation flow. Enter the following values where available: **Job title**: IT Lab Administrator, **Department**: IT, **Usage location**: United States. Once the fields are completed, select **Review + invite**, then select **Invite** to send the invitation.
```

---

#### Navigate to Groups Management

**Step ID:** step-10-navigate-groups
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Search for and select Microsoft Entra ID, then in the Manage blade select Groups
```

**Suggested Update:**
```
In the Azure portal, search for and select **Microsoft Entra ID**, then select **Groups** from the left navigation menu.
```

---

#### Create Security Group

**Step ID:** step-11-create-security-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select + New group and configure Group type: Security, Group name: IT Lab Administrators, Group description: Administrators that manage the IT lab, Membership type: Assigned
```

**Suggested Update:**
```
Select **+ New group** (or **Add group**) and configure the following: **Group type:** Security, **Group name:** IT Lab Administrators, **Group description:** Administrators that manage the IT lab, **Membership type:** Assigned
```

---

#### Assign Group Owners

**Step ID:** step-12-assign-group-owners
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select No owners selected, then in the Add owners page search for and select yourself as the owner
```

**Suggested Update:**
```
Select the owners field, then search for and select yourself as the owner.
```

---

#### Assign Group Members

**Step ID:** step-13-assign-group-members
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select No members selected, then in the Add members pane search for and select az104-user1 and the guest user you invited to add both users to the group
```

**Suggested Update:**
```
Select the **Members** section or **Add members** option, then search for and select **az104-user1** and the guest user you invited to add both users to the group.
```

---

#### Deploy Security Group

**Step ID:** step-14-create-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select Create to deploy the group, then refresh the page and verify the group was created
```

**Suggested Update:**
```
Select **Create** to deploy the group, wait for the deployment to complete, then navigate back to the security groups list and verify the new group appears.
```

---

#### Verify Group Configuration

**Step ID:** step-15-verify-group-details
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select the new group and review the Members and Owners information to confirm configuration
```

**Suggested Update:**
```
Navigate to the group list, locate the newly created group, and open its details to review the Members and Owners information and confirm the configuration is correct.
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
