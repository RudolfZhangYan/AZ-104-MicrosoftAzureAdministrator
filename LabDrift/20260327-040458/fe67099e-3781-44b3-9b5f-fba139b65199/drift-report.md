# Drift Detection Report

**Lab:** Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** fe67099e-3781-44b3-9b5f-fba139b65199
**Status:** DRIFT_DETECTED
**Duration:** 5715s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 12 |
| Passed | 5 |
| Drift Detected | 7 |
| Failed | 0 |
| Skipped (API errors) | 0 |

### Drift by Category

- **selector_drift**: 7
- **flow_drift**: 2

## Drift Issues

### step-1-sign-in-portal-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** The instructions describe a "Welcome to Azure splash screen" with a Cancel button to dismiss it. The current Azure portal shows a "Welcome to Azure!" home page with three subscription option cards (Free trial, Manage Entra ID, Azure for Students). There is no Cancel button, no dismissable overlay, and no splash screen to close. The Welcome content IS the home page.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-2-navigate-entra-id-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID. Select the Overview blade and then the Manage tenants tab....
- **Actual:** "Manage tenants" appears as a toolbar button in the command bar at the top of the Overview blade (next to "Add", "What's new", "Preview features", "Got feedback?"), not as a separate tab within the page content. The Overview content area has its own tabs: Overview, Monitoring, Properties, Recommendations, Setup guides.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-5-create-new-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-5-create-new-user
- **Instruction:** Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate pa...
- **Actual:** Form has new "Assignments" tab and "Mail nickname" field not in instructions. Usage location has no editable input during creation.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-5-create-new-user-flow

- **Category:** flow_drift
- **Severity:** warning
- **Step:** step-5-create-new-user
- **Instruction:** Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate pa...
- **Actual:** Usage location must be set post-creation via user profile.
- **Recommendation:** Add missing steps to lab instructions

### step-6-verify-user-created-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-6-verify-user-created
- **Instruction:** Refresh the page and confirm your new user was created....
- **Actual:** An info banner "Azure Active Directory is now Microsoft Entra ID" is shown at the top of the users page. This is informational and does not block progress. A human user would also see this.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-7-invite-external-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-7-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** The form has tabs "Basics | Properties | Assignments | Review + invite" — the "Assignments" tab is new (not in instructions). The Basics tab has additional fields not mentioned: "Cc recipient" and "Invite redirect URL" (pre-populated). There is also an info banner: "Starting December 2025, B2B invitation emails will be sent from your organization's primary domain instead of Microsoft.com." Usage location label exists on Properties but has no editable input during invite (same as Create new user).
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-7-invite-external-user-flow

- **Category:** flow_drift
- **Severity:** warning
- **Step:** step-7-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** Usage location cannot be set during invite — must be set after via user profile.
- **Recommendation:** Add missing steps to lab instructions

### step-7-invite-external-user-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-7-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** Info banner about B2B invitation email domain change (December 2025). Informational only, does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-8-navigate-groups-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-8-navigate-groups
- **Instruction:** In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups. T...
- **Actual:** An "IT Lab Administrators" group already exists from a previous lab run (1 group found). Info banner: "Microsoft Entra has a simpler, integrated experience for managing all your Identity and Access Management needs. Try the new Microsoft Entra admin center!" — informational only.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-9-create-security-group-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-9-create-security-group
- **Instruction:** In the All groups blade, select + New group and create a new group with Group type: Security, Group ...
- **Actual:** The New Group form includes additional fields not mentioned in the lab instructions: "Owners" section with "No owners selected" link, "Members" section with "No members selected" link, a "Microsoft Entra roles can be assigned to the group" toggle, and a "Set up a recurring Access Review on this group (Preview)" section. The form is a single-page layout with a "Create" button at the bottom — no tabbed "Review + create" workflow. Group type defaults to "Security" and Membership type defaults to "Assigned", so these are already set correctly for a human following the instructions.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-10-add-group-owners-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-10-add-group-owners
- **Instruction:** Select No owners selected. In the Add owners page, search for and select yourself (shown in the top ...
- **Actual:** The instructions say to click "No owners selected" link from the New Group form. However, since the group was already created in the previous step, the workflow is to navigate to the group → Owners blade → Add owners. The "Add owners" button is in the command bar (not a "No owners selected" link). A human following the instructions would likely be on the New Group creation form where "No owners selected" appears as a clickable link — both paths lead to the same Add Owners panel.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-11-add-group-members-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-11-add-group-members
- **Instruction:** Select No members selected. In the Add members pane, search for and select the az104-user1 and the g...
- **Actual:** The instructions reference clicking "No members selected" link from the New Group creation form. Since the group was already created, the workflow uses the Members blade with an "Add members" button in the command bar. The Members page has tabs "Direct members" and "All members" (not mentioned in instructions). The command bar also includes "Bulk operations" dropdown (not in instructions).
- **Recommendation:** Update lab instructions to reflect new element text/location

## Step Details

### ⚠️ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** drift
**Duration:** 940s

**Drift Issues:**
- selector_drift: The instructions describe a "Welcome to Azure splash screen" with a Cancel butto...

### ⚠️ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** drift
**Duration:** 127s

**Drift Issues:**
- selector_drift: "Manage tenants" appears as a toolbar button in the command bar at the top of th...

### ✅ step-3-return-entra-overview: Return to Entra ID Overview

**Status:** passed
**Duration:** 68s

### ✅ step-4-navigate-users: Navigate to Users Section

**Status:** passed
**Duration:** 291s

### ⚠️ step-5-create-new-user: Create New User az104-user1

**Status:** drift
**Duration:** 1520s

**Drift Issues:**
- selector_drift: Form has new "Assignments" tab and "Mail nickname" field not in instructions. Us...
- flow_drift: Usage location must be set post-creation via user profile....

### ✅ step-6-verify-user-created: Verify User Creation

**Status:** passed
**Duration:** 349s

**Drift Issues:**
- unexpected_ui: An info banner "Azure Active Directory is now Microsoft Entra ID" is shown at th...

### ⚠️ step-7-invite-external-user: Invite External User

**Status:** drift
**Duration:** 128s

**Drift Issues:**
- selector_drift: The form has tabs "Basics | Properties | Assignments | Review + invite" — the "A...
- flow_drift: Usage location cannot be set during invite — must be set after via user profile....
- unexpected_ui: Info banner about B2B invitation email domain change (December 2025). Informatio...

### ✅ step-8-navigate-groups: Navigate to Groups Section

**Status:** passed
**Duration:** 68s

**Drift Issues:**
- unexpected_ui: An "IT Lab Administrators" group already exists from a previous lab run (1 group...

### ⚠️ step-9-create-security-group: Create IT Lab Administrators Group

**Status:** drift
**Duration:** 1196s

**Drift Issues:**
- selector_drift: The New Group form includes additional fields not mentioned in the lab instructi...

### ⚠️ step-10-add-group-owners: Add Group Owners

**Status:** drift
**Duration:** 377s

**Drift Issues:**
- selector_drift: The instructions say to click "No owners selected" link from the New Group form....

### ⚠️ step-11-add-group-members: Add Group Members

**Status:** drift
**Duration:** 85s

**Drift Issues:**
- selector_drift: The instructions reference clicking "No members selected" link from the New Grou...

### ✅ step-12-create-and-verify-group: Create and Verify Group

**Status:** passed
**Duration:** 105s
