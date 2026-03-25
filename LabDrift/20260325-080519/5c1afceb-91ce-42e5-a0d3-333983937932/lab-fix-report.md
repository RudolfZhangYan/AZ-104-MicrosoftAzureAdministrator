# Lab Fix Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-25T10:11:51.849Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 15 |
| Instruction Fixes Needed | 15 |
| Environment Fixes Needed | 0 |
| Critical Issues | 10 |
| Estimated Effort | High (> 4 hours) |

## 📝 Instruction Updates

### 🔴 Critical Priority (10)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Account has no active Azure subscription. The portal presents subscription options instead of the expected dashboard. The "Cancel" button referenced in the instructions only appears on accounts WITH a subscription.

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. If prompted with subscription options, select **Maybe later** or dismiss the screen to proceed to the portal home page.
```

---

#### Access User Creation

**Step ID:** step-4-access-user-creation
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
In the left navigation pane, select **Users**; then select **+ New user** and choose **Create new user** from the drop-down menu.
```

---

#### Configure Basic User Information

**Step ID:** step-5-create-internal-user-basics
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Element not found

**Original Instruction:**
```
Create a new user with User principal name az104-user1, Display name az104-user1, Auto-generate password checked, Account enabled checked.
```

**Suggested Update:**
```
Create a new user by entering **az104-user1** as the User principal name and **az104-user1** as the Display name. Enable the option to auto-generate the password and ensure the account is set to enabled before saving.
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
On the Properties tab notice all the different types of information that can be included in the user account. Set Job title IT Lab Administrator, Department IT, Usage location United States.
```

**Suggested Update:**
```
Navigate to the **Properties** tab of the user account. Locate the identity and job information fields and set **Job title** to `IT Lab Administrator`, **Department** to `IT`, and **Usage location** to `United States`. Scroll through the tab to review the additional information that can be stored in the user account, then save your changes.
```

---

#### Review and Create User

**Step ID:** step-7-create-user
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Prerequisite steps 4-6 did not complete (automation session timeout)

**Original Instruction:**
```
Once you have finished reviewing, select Review + create and then Create. Refresh the page and confirm your new user was created.
```

**Suggested Update:**
```
Once you have finished reviewing, select **Review + create** and then **Create**. If the page does not reflect your new user immediately, refresh and confirm the user appears in the list.
```

---

#### Configure External User Basic Information

**Step ID:** step-9-configure-external-user-basics
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Prerequisite step 8 did not complete (automation session timeout)

**Original Instruction:**
```
Set Email to your email address, Display name to your name, check Send invite message box, Message Welcome to Azure and our group project.
```

**Suggested Update:**
```
Set the Email field to your email address and Display name to your name. Check the **Send invite message** checkbox and enter **Welcome to Azure and our group project** in the message field.
```

---

#### Configure External User Properties

**Step ID:** step-10-configure-external-user-properties
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Prerequisite steps 8-9 did not complete

**Original Instruction:**
```
Move to the Properties tab. Complete the basic information, including Job title IT Lab Administrator, Department IT, Usage location United States. Select Review + invite, and then Invite. Refresh the page and confirm the invited user was created.
```

**Suggested Update:**
```
Navigate to the Properties tab. Enter **IT Lab Administrator** for Job title and **IT** for Department. Set Usage location to **United States**. Select **Review + invite**, then select **Invite**. Refresh the page and verify the invited user appears in the directory.
```

---

#### Assign Group Owners

**Step ID:** step-13-assign-group-owners
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Prerequisite step 12 did not complete

**Original Instruction:**
```
Select No owners selected. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner. Notice you can have more than one owner.
```

**Suggested Update:**
```
Select **No owners selected**. In the **Add owners** panel, search for and select yourself as the owner (you can find your name by searching with your username or email address visible in the top right corner of the portal). Note that multiple owners can be assigned to a group.
```

---

#### Add Members to Group

**Step ID:** step-14-add-group-members
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Prerequisite step 12 did not complete

**Original Instruction:**
```
Select No members selected. In the Add members pane, search for and select the az104-user1 and the guest user you invited. Add both of the users to the group.
```

**Suggested Update:**
```
Before adding members to the group, ensure that az104-user1 and the guest user have been created and are available in your directory. Then, select **No members selected**. In the **Add members** pane, search for and select az104-user1 and the guest user. Add both users to the group.
```

---

#### Deploy and Verify Group Creation

**Step ID:** step-15-deploy-and-verify-group
**Category:** removed_feature
**Confidence:** high

**Reason:**
> Prerequisite steps 12-14 did not complete

**Original Instruction:**
```
Select Create to deploy the group. Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information.
```

**Suggested Update:**
```
Select **Create** to deploy the group. If the page does not refresh automatically, manually refresh to confirm the group appears in the list. Select the new group and review the **Members** and **Owners** information.
```

---

### 🟠 High Priority (2)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** ui_change
**Confidence:** high

**Reason:**
> The portal shows a full-page "Welcome to Azure!" with subscription signup cards (Free trial, Entra ID, Azure for Students). This is NOT the dismissible splash modal with a "Cancel" button described in the instructions — it's the no-subscription landing page.

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. If you see a "Welcome to Azure!" page with subscription options, sign in with an account that has an active Azure subscription to proceed to the portal.
```

---

#### Explore Entra ID Overview and Tenants

**Step ID:** step-3-explore-overview
**Category:** ui_change
**Confidence:** high

**Reason:**
> "Manage tenants" is a toolbar button, not a tab

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu. As you have time, explore other options such as Licenses and Password reset.
```

**Suggested Update:**
```
Select the Overview blade and then click the **Manage tenants** button in the toolbar. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu. As you have time, explore other options such as Licenses and Password reset.
```

---

### 🟡 Medium Priority (2)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** new_requirement
**Confidence:** high

**Reason:**
> The "Welcome to Azure!" page is a full-page view (not a dismissible modal) with no Cancel button. A human on this account would see the same thing.

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. If you see a **Welcome to Azure!** page, navigate past it by selecting the Azure portal home link or navigating directly to https://portal.azure.com/home.
```

---

#### Navigate to Microsoft Entra ID

**Step ID:** step-2-navigate-entra-id
**Category:** new_requirement
**Confidence:** high

**Reason:**
> A "Give feedback to Microsoft" popup appeared in the top-right corner asking about portal satisfaction — informational only, does not block progress.

**Original Instruction:**
```
Search for and select Microsoft Entra ID. Microsoft Entra ID is Azure's cloud-based identity and access management solution. Take a few minutes to familiarize yourself with some of the features listed in the left pane.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID. Microsoft Entra ID is Azure's cloud-based identity and access management solution. If a "Give feedback to Microsoft" popup appears in the top-right corner, dismiss it and continue. Take a few minutes to familiarize yourself with some of the features listed in the left pane.
```

---

### 🟢 Low Priority (1)

#### Explore Entra ID Overview and Tenants

**Step ID:** step-3-explore-overview
**Category:** new_requirement
**Confidence:** high

**Reason:**
> Entra admin center banner + auth methods migration alert (informational)

**Original Instruction:**
```
Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu. As you have time, explore other options such as Licenses and Password reset.
```

**Suggested Update:**
```
Select the Overview blade and then the Manage tenants tab. If an authentication methods migration alert banner appears, you may dismiss it or leave it as is. Return to the Entra ID page by pressing back in the browser or selecting the option in the breadcrumb menu. As you have time, explore other options such as Licenses and Password reset.
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
