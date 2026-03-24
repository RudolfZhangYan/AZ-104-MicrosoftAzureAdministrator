# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-24T04:45:50.353Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 12 |
| Instruction Fixes Needed | 12 |
| Environment Fixes Needed | 0 |
| Critical Issues | 12 |
| Estimated Effort | High (> 4 hours) |

## 📝 Instruction Updates

### 🔴 Critical Priority (12)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash screen by selecting Cancel
```

**Suggested Update:**
```
Sign in to the Azure portal at https://portal.azure.com. If a Welcome to Azure splash screen appears, dismiss it by selecting **Cancel**.
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
Search for and select Microsoft Entra ID, then explore the Overview blade and Manage tenants tab
```

**Suggested Update:**
```
In the Azure portal, navigate to **Microsoft Entra ID** by selecting it from the left-hand navigation menu or by typing "Microsoft Entra ID" in the top search bar and selecting it from the results. Once open, review the **Overview** page, then select **Manage tenants** from the top navigation to explore your tenant settings.
```

---

#### Navigate to Users Section

**Step ID:** step-3-navigate-users
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Return to Entra ID page and in the Manage blade, select Users, then select Create new user from the New user dropdown
```

**Suggested Update:**
```
Return to the Microsoft Entra ID page, select **Users** from the left navigation menu, then select **New user** and choose **Create new user**
```

---

#### Create Internal User Account

**Step ID:** step-4-create-internal-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Create a new user with User principal name 'az104-user1', Display name 'az104-user1', Auto-generate password checked, Account enabled checked. On Properties tab set Job title to 'IT Lab Administrator', Department to 'IT', Usage location to 'United States'. Then Review + create and Create.
```

**Suggested Update:**
```
In the Microsoft Entra admin center, navigate to **Identity > Users > All users**, then select **New user > Create new user**. Enter `az104-user1` as the User principal name and `az104-user1` as the Display name. Under Password, select **Auto-generate password**. Ensure **Account enabled** is selected. Select **Next: Properties** and set Job title to `IT Lab Administrator`, Department to `IT`, and Usage location to `United States`. Select **Review + create**, then **Create**.
```

---

#### Verify User Creation

**Step ID:** step-5-verify-user-created
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Refresh the page and confirm your new user was created
```

**Suggested Update:**
```
Navigate to the Users list and confirm your new user appears in the directory.
```

---

#### Invite External User

**Step ID:** step-6-invite-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
In the New user dropdown select Invite an external user. Enter your email address, your name as display name, check Send invite message, enter message 'Welcome to Azure and our group project'. On Properties tab set Job title to 'IT Lab Administrator', Department to 'IT', Usage location to 'United States'. Then Review + invite and Invite.
```

**Suggested Update:**
```
In the **New user** menu, select **Invite external user**. Enter your email address in the **Email** field and your name as the **Display name**. Check **Send invite message** and enter the message: *Welcome to Azure and our group project*. On the **Properties** tab, set **Job title** to `IT Lab Administrator`, **Department** to `IT`, and **Usage location** to `United States`. Click **Review + invite**, then click **Invite**.
```

---

#### Navigate to Groups Section

**Step ID:** step-7-navigate-groups
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups and explore the group settings in the left pane
```

**Suggested Update:**
```
In the Azure portal, search for and select **Microsoft Entra ID**. In the left navigation pane, select **Groups** and explore the available group settings.
```

---

#### Create New Security Group

**Step ID:** step-8-create-new-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
In the All groups blade, select + New group and create a new group with Group type 'Security', Group name 'IT Lab Administrators', Group description 'Administrators that manage the IT lab', Membership type 'Assigned'
```

**Suggested Update:**
```
In the All groups blade, select **+ New group** and in the New Group pane, set Group type to **Security**, enter **IT Lab Administrators** as the Group name, enter **Administrators that manage the IT lab** as the Group description, set Membership type to **Assigned**, then select **Create**.
```

---

#### Add Group Owners

**Step ID:** step-9-add-group-owners
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select No owners selected, then in the Add owners page, search for and select yourself as the owner
```

**Suggested Update:**
```
In the **Owners** section, select the option to add an owner, then search for and select yourself as the owner.
```

---

#### Add Group Members

**Step ID:** step-10-add-group-members
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select No members selected, then in the Add members pane, search for and select both az104-user1 and the guest user you invited. Add both users to the group
```

**Suggested Update:**
```
Select the **Members** field or **Add members** option, then search for and select both **az104-user1** and the guest user you invited. Add both users to the group.
```

---

#### Deploy the Group

**Step ID:** step-11-deploy-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select Create to deploy the group
```

**Suggested Update:**
```
Select **Deploy** to deploy the group.
```

---

#### Verify Group Creation

**Step ID:** step-12-verify-group-creation
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information
```

**Suggested Update:**
```
Navigate to the Groups list and confirm your new group appears. Select the group, then use the left-hand navigation to open the **Members** and **Owners** sections and verify the expected entries are listed.
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
