# Lab Fix Report

**Lab:** Manage Microsoft Entra ID Identities
**URL:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Generated:** 2026-03-31T00:24:08.412Z

## Summary

| Metric | Value |
|--------|-------|
| Total Issues | 8 |
| Instruction Fixes Needed | 8 |
| Environment Fixes Needed | 0 |
| Critical Issues | 0 |
| Estimated Effort | Medium (1-4 hours) |

## 📝 Instruction Updates

### 🟠 High Priority (7)

#### Sign in to Azure portal

**Step ID:** step-1-signin-portal
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions mention a "Welcome to Azure splash screen" with a "Cancel" button. Instead, the portal shows a "Welcome to Azure!" landing page with three option cards (Free trial, Manage Entra ID, Azure for Students) and no Cancel button. This is the standard home page for accounts without an active subscription — not a dismissible splash overlay.

**Original Instruction:**
```
Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on the Welcome to Azure splash screen.
```

**Suggested Update:**
```
Sign in to the Azure portal - https://portal.azure.com. If a "Welcome to Azure!" landing page appears with option cards, navigate directly to the Azure home page by selecting the Microsoft Azure logo in the top-left corner.
```

---

#### Explore Entra ID interface

**Step ID:** step-3-explore-interface
**Category:** ui_change
**Confidence:** high

**Reason:**
> Button now opens a dropdown menu instead of direct action

**Original Instruction:**
```
Return to the Entra ID page. Explore options such as Licenses and Password reset to familiarize yourself with the interface.
```

**Suggested Update:**
```
Return to the Entra ID page. Click the dropdown menu to explore options such as Licenses and Password reset to familiarize yourself with the interface.
```

---

#### Explore Entra ID interface

**Step ID:** step-3-explore-interface
**Category:** flow_change
**Confidence:** high

**Reason:**
> To explore Licenses and Password reset, a human user would now need to either expand the "Manage" section in the sidebar or click "Go to Microsoft Entra" to use the new Entra admin center. The lab instructions should be updated to reflect this reorganized navigation.

**Original Instruction:**
```
Return to the Entra ID page. Explore options such as Licenses and Password reset to familiarize yourself with the interface.
```

**Suggested Update:**
```
Return to the Entra ID page. In the left sidebar, expand the **Manage** section to reveal additional options, then explore items such as **Licenses** and **Password reset** to familiarize yourself with the interface.
```

---

#### Invite external user

**Step ID:** step-6-invite-external-user
**Category:** ui_change
**Confidence:** high

**Reason:**
> The button/tab label is "Review + invite" (not "Review + create" as used for new users). This matches the invite workflow correctly — the instructions say "Review + invite" which is accurate.

**Original Instruction:**
```
In the New user drop-down select Invite an external user. Set Email to your email address, Display name to your name, check Send invite message, Message: Welcome to Azure and our group project. On Properties tab: Job title: IT Lab Administrator, Department: IT, Usage location: United States. Select Review + invite, then Invite.
```

**Suggested Update:**
```
In the **New user** drop-down, select **Invite an external user**. Set **Email** to your email address and **Display name** to your name. Check **Send invite message** and enter the message: *Welcome to Azure and our group project*. On the **Properties** tab, set **Job title** to *IT Lab Administrator*, **Department** to *IT*, and **Usage location** to *United States*. Select **Review + invite**, then select **Invite**.
```

---

#### Add group owners

**Step ID:** step-9-add-group-owners
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions reference "No owners selected" link on the New Group creation form. Since the group was already created in Step 8, the owner was added via the group detail page's "Add owners" toolbar button instead. A human following the instructions sequentially would see "No owners selected" during group creation — the flow is functionally the same.

**Original Instruction:**
```
Select No owners selected. In the Add owners page, search for and select yourself (shown in the top right corner) as the owner.
```

**Suggested Update:**
```
Select **No owners selected** on the New Group form, or use the **Add owners** toolbar button on the group detail page. In the Add owners panel, search for and select yourself (shown in the top right corner) as the owner.
```

---

#### Add group members

**Step ID:** step-10-add-group-members
**Category:** ui_change
**Confidence:** high

**Reason:**
> The instructions reference "No members selected" link on the New Group creation form. Since the group was already created, members were added via the group detail page's "Add members" toolbar button. A human following instructions sequentially would use "No members selected" during group creation — functionally identical.

**Original Instruction:**
```
Select No members selected. In the Add members pane, search for and select the az104-user1 and the guest user you invited. Add both users to the group.
```

**Suggested Update:**
```
On the New Group form, select **No members selected**. In the Add members pane, search for and select **az104-user1** and the guest user you invited, then click **Select** to add both users to the group.
```

---

#### Create and verify group

**Step ID:** step-11-create-and-verify-group
**Category:** ui_change
**Confidence:** high

**Reason:**
> The "Create" button referenced in the instructions was already clicked in Step 8 (group was created then). This step's "Create" action was already completed — only the verification portion remained.

**Original Instruction:**
```
Select Create to deploy the group. Refresh the page and ensure your group was created. Select the new group and review the Members and Owners information.
```

**Suggested Update:**
```
Refresh the page and verify your group was created. Select the new group and review the Members and Owners information.
```

---

### 🟢 Low Priority (1)

#### Explore Entra ID interface

**Step ID:** step-3-explore-interface
**Category:** new_requirement
**Confidence:** high

**Reason:**
> An info banner at the top reads: "Microsoft Entra has a simpler, integrated experience for managing all your Identity and Access Management needs. Try the new Microsoft Entra admin center!" — informational, not blocking.

**Original Instruction:**
```
Return to the Entra ID page. Explore options such as Licenses and Password reset to familiarize yourself with the interface.
```

**Suggested Update:**
```
Return to the Entra ID page. You may see a banner suggesting the new Microsoft Entra admin center — you can dismiss it or explore it later. Explore options such as Licenses and Password reset to familiarize yourself with the interface.
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
