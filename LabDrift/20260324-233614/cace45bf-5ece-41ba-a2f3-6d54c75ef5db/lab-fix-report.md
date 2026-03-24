# Lab Fix Report

**Lab:** Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-24T23:40:15.701Z

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

#### Sign in to Azure portal

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
Sign in to the Azure portal - https://portal.azure.com. If a Welcome splash screen appears, dismiss it to proceed to the portal.
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
Search for and select Microsoft Entra ID. Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu.
```

**Suggested Update:**
```
Search for and select **Microsoft Entra ID** in the Azure portal search bar. On the Microsoft Entra ID page, select **Overview** from the left navigation menu, then select the **Manage tenants** tab. When finished, return to the Microsoft Entra ID page by selecting the back button in your browser or using the breadcrumb navigation at the top of the page.
```

---

#### Access Users management section

**Step ID:** step-3-access-users-section
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
In the Manage blade, select Users; then in the New user drop-down select Create new user.
```

**Suggested Update:**
```
In the left navigation menu, select **Users**; then select **New user** and choose **Create new user** from the drop-down menu.
```

---

#### Create internal user az104-user1

**Step ID:** step-4-create-internal-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Create a new user with the following settings: User principal name: az104-user1, Display name: az104-user1, Auto-generate password: checked, Account enabled: checked. On the Properties tab set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + create and then Create.
```

**Suggested Update:**
```
In Microsoft Entra ID, navigate to **Users** and select **New user** > **Create new user**. Enter the following:

- **User principal name:** az104-user1
- **Display name:** az104-user1
- **Password:** select Auto-generate password
- **Account enabled:** checked

On the **Properties** tab, set:
- **Job title:** IT Lab Administrator
- **Department:** IT
- **Usage location:** United States

Select **Review + create**, then **Create**.
```

---

#### Verify user creation

**Step ID:** step-5-verify-user-creation
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Refresh the page and confirm your new user was created.
```

**Suggested Update:**
```
After creating the user, navigate away from the page and return to the Users list to confirm the new user appears in the list.
```

---

#### Invite external guest user

**Step ID:** step-6-invite-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: check the box, Message: Welcome to Azure and our group project. Move to the Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the **Users** blade, select **New user** and choose **Invite external user** from the options. In the **Basics** tab, enter your email address in the **Email** field, your name as the **Display name**, check **Send invite message**, and type `Welcome to Azure and our group project` in the **Message** field. Switch to the **Properties** tab and set **Job title** to `IT Lab Administrator`, **Department** to `IT`, and **Usage location** to `United States`. Select **Review + invite**, then select...
```

---

#### Verify external user invitation

**Step ID:** step-7-verify-external-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Refresh the page and confirm the invited user was created. You should receive the invitation email shortly.
```

**Suggested Update:**
```
Navigate to the Users list and confirm the invited user appears with a pending status. The invitation email will be sent to the external user automatically.
```

---

#### Navigate to Groups management

**Step ID:** step-8-navigate-groups
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups.
```

**Suggested Update:**
```
In the Azure portal, search for and select **Microsoft Entra ID**. In the left navigation menu, under **Manage**, select **Groups**.
```

---

#### Create new security group

**Step ID:** step-9-create-new-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
In the All groups blade, select + New group and create a new group. Set Group type: Security, Group name: IT Lab Administrators, Group description: Administrators that manage the IT lab, Membership type: Assigned.
```

**Suggested Update:**
```
In the All groups blade, select **+ New group** to create a new group. Set **Group type** to **Security**, enter **IT Lab Administrators** as the **Group name**, enter **Administrators that manage the IT lab** as the **Group description**, and set **Membership type** to **Assigned**.
```

---

#### Assign group owner

**Step ID:** step-10-assign-group-owner
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select No owners selected. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner.
```

**Suggested Update:**
```
In the **Owners** section, select the owners field and search for yourself (shown in the top right corner of the portal), then select your name to assign yourself as the owner.
```

---

#### Add group members

**Step ID:** step-11-add-group-members
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select No members selected. In the Add members pane, search for and select the az104-user1 and the guest user you invited. Add both of the users to the group.
```

**Suggested Update:**
```
In the group settings, locate the Members section and select the option to add members. In the Add members pane, search for and select the az104-user1 and the guest user you invited. Add both of the users to the group.
```

---

#### Create the group

**Step ID:** step-12-create-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Select Create to deploy the group.
```

**Suggested Update:**
```
Select **Review + create**, then select **Create** to deploy the group.
```

---

#### Verify group creation and membership

**Step ID:** step-13-verify-group-creation
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information.
```

**Suggested Update:**
```
After creating the group, navigate to the Groups list and locate your newly created group. Select it to open the group details, then review the Members and Owners information to confirm the group was set up correctly.
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
