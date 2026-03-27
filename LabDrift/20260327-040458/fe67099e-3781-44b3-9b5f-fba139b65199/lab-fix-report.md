# Lab Fix Report

**Lab:** Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-27T05:41:11.098Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 12 |
| Instruction Fixes Needed | 12 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Medium (1-4 hours) |

## 📝 Instruction Updates

### 🟠 High Priority (9)

#### Sign in to Azure Portal

**Step ID:** step-1-sign-in-portal
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions describe a "Welcome to Azure splash screen" with a Cancel button to dismiss it. The current Azure portal shows a "Welcome to Azure!" home page with three subscription option cards (Free trial, Manage Entra ID, Azure for Students). There is no Cancel button, no dismissable overlay, and no splash screen to close. The Welcome content IS the home page.

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. After signing in, you will land on the Azure home page. If you see a Welcome to Azure! page with subscription option cards, you can proceed directly — no additional action is needed to dismiss it.
```

---

#### Navigate to Microsoft Entra ID

**Step ID:** step-2-navigate-entra-id
**Category:** ui_change
**Confidence:** high

**Reason:**
> "Manage tenants" appears as a toolbar button in the command bar at the top of the Overview blade (next to "Add", "What's new", "Preview features", "Got feedback?"), not as a separate tab within the page content. The Overview content area has its own tabs: Overview, Monitoring, Properties, Recommendations, Setup guides.

**Original Instruction:**
```
Search for and select Microsoft Entra ID. Select the Overview blade and then the Manage tenants tab. Take a few minutes to familiarize yourself with some of the features listed in the left pane.
```

**Suggested Update:**
```
Search for and select Microsoft Entra ID. Select the Overview blade and then select **Manage tenants** from the command bar at the top of the page. Take a few minutes to familiarize yourself with some of the features listed in the left pane.
```

---

#### Create New User az104-user1

**Step ID:** step-5-create-new-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> Form has new "Assignments" tab and "Mail nickname" field not in instructions. Usage location has no editable input during creation.

**Original Instruction:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate password: checked, Account enabled: checked. On Properties tab set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + create and then Create.
```

**Suggested Update:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Mail nickname: az104-user1, Auto-generate password: checked, Account enabled: checked. On the Properties tab set Job title: IT Lab Administrator and Department: IT. On the Assignments tab, no changes are needed. Select Review + create and then Create. After the user is created, open the user profile, go to Properties, and set Usage location: United States, then save.
```

---

#### Create New User az104-user1

**Step ID:** step-5-create-new-user
**Category:** flow_change
**Confidence:** high

**Reason:**
> Usage location must be set post-creation via user profile.

**Original Instruction:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate password: checked, Account enabled: checked. On Properties tab set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + create and then Create.
```

**Suggested Update:**
```
Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate password: checked, Account enabled: checked. On Properties tab set Job title: IT Lab Administrator, Department: IT. Select Review + create and then Create. After the user is created, open the user's profile, set Usage location: United States, and save.
```

---

#### Invite External User

**Step ID:** step-7-invite-external-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> The form has tabs "Basics | Properties | Assignments | Review + invite" — the "Assignments" tab is new (not in instructions). The Basics tab has additional fields not mentioned: "Cc recipient" and "Invite redirect URL" (pre-populated). There is also an info banner: "Starting December 2025, B2B invitation emails will be sent from your organization's primary domain instead of Microsoft.com." Usage location label exists on Properties but has no editable input during invite (same as Create new user).

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: check the box, Message: Welcome to Azure and our group project. Move to Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the **New user** drop-down, select **Invite an external user**. On the **Basics** tab, set **Email** to your email address, **Display name** to your name, and check the **Send invite message** box. In the **Message** field, enter: *Welcome to Azure and our group project*. Move to the **Properties** tab and set **Job title** to *IT Lab Administrator* and **Department** to *IT*. Select **Review + invite**, then **Invite**.
```

---

#### Invite External User

**Step ID:** step-7-invite-external-user
**Category:** flow_change
**Confidence:** high

**Reason:**
> Usage location cannot be set during invite — must be set after via user profile.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: check the box, Message: Welcome to Azure and our group project. Move to Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: check the box, Message: Welcome to Azure and our group project. Move to Properties tab and set Job title: IT Lab Administrator, Department: IT. Select Review + invite, then Invite. Once the user has been created, open the user's profile, set Usage location: United States, and save.
```

---

#### Create IT Lab Administrators Group

**Step ID:** step-9-create-security-group
**Category:** ui_change
**Confidence:** high

**Reason:**
> The New Group form includes additional fields not mentioned in the lab instructions: "Owners" section with "No owners selected" link, "Members" section with "No members selected" link, a "Microsoft Entra roles can be assigned to the group" toggle, and a "Set up a recurring Access Review on this group (Preview)" section. The form is a single-page layout with a "Create" button at the bottom — no tabbed "Review + create" workflow. Group type defaults to "Security" and Membership type defaults to "Assigned", so these are already set correctly for a human following the instructions.

**Original Instruction:**
```
In the All groups blade, select + New group and create a new group with Group type: Security, Group name: IT Lab Administrators, Group description: Administrators that manage the IT lab, Membership type: Assigned.
```

**Suggested Update:**
```
In the All groups blade, select **+ New group**. Confirm that **Group type** is set to **Security** and **Membership type** is set to **Assigned**, then enter **IT Lab Administrators** as the Group name and **Administrators that manage the IT lab** as the Group description. Leave the Owners and Members sections unchanged, then select **Create**.
```

---

#### Add Group Owners

**Step ID:** step-10-add-group-owners
**Category:** ui_change
**Confidence:** medium

**Reason:**
> Button text has changed to "in the command bar (not a "

**Original Instruction:**
```
Select No owners selected. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner.
```

**Suggested Update:**
```
Click "in the command bar (not a "
```

---

#### Add Group Members

**Step ID:** step-11-add-group-members
**Category:** ui_change
**Confidence:** high

**Reason:**
> Button now opens a dropdown menu instead of direct action

**Original Instruction:**
```
Select No members selected. In the Add members pane, search for and select the az104-user1 and the guest user you invited. Add both of the users to the group.
```

**Suggested Update:**
```
Select **No members selected** to open the dropdown menu. From the dropdown, choose the option to add members, then search for and select **az104-user1** and the guest user you invited. Add both users to the group.
```

---

### 🟢 Low Priority (3)

#### Verify User Creation

**Step ID:** step-6-verify-user-created
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An info banner "Azure Active Directory is now Microsoft Entra ID" is shown at the top of the users page. This is informational and does not block progress. A human user would also see this.

**Original Instruction:**
```
Refresh the page and confirm your new user was created.
```

**Suggested Update:**
```
Refresh the page and confirm your new user was created. If you see a banner stating "Azure Active Directory is now Microsoft Entra ID", you can dismiss or ignore it and continue.
```

---

#### Invite External User

**Step ID:** step-7-invite-external-user
**Category:** new_requirement
**Confidence:** high

**Reason:**
> Info banner about B2B invitation email domain change (December 2025). Informational only, does not block progress.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email: your email address, Display name: your name, Send invite message: check the box, Message: Welcome to Azure and our group project. Move to Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the New user drop-down select Invite an external user. If an info banner appears regarding B2B invitation email domain changes, dismiss it and continue. Set Email: your email address, Display name: your name, Send invite message: check the box, Message: Welcome to Azure and our group project. Move to Properties tab and set Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

---

#### Navigate to Groups Section

**Step ID:** step-8-navigate-groups
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An "IT Lab Administrators" group already exists from a previous lab run (1 group found). Info banner: "Microsoft Entra has a simpler, integrated experience for managing all your Identity and Access Management needs. Try the new Microsoft Entra admin center!" — informational only.

**Original Instruction:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups. Take a minute to familiarize yourself with the group settings in the left pane.
```

**Suggested Update:**
```
In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups. If any groups from a previous session are present, you may disregard them. Take a minute to familiarize yourself with the group settings in the left pane.
```

---

## 📌 Additional Notes

- This lab has significant UI drift. Consider scheduling regular reviews as Azure portal UI updates frequently.

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
