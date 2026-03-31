# Drift Detection Report

**Lab:** Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** f59f3c10-0e19-4dde-8845-914977884b8a
**Status:** DRIFT_DETECTED
**Duration:** 5593s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 11 |
| Passed | 5 |
| Drift Detected | 6 |
| Failed | 0 |
| Skipped (API errors) | 0 |

### Drift by Category

- **selector_drift**: 6
- **flow_drift**: 1

## Drift Issues

### step-1-signin-portal-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-signin-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** The instructions mention a "Welcome to Azure splash screen" with a "Cancel" button. Instead, the portal shows a "Welcome to Azure!" landing page with three option cards (Free trial, Manage Entra ID, Azure for Students) and no Cancel button. This is the standard home page for accounts without an active subscription — not a dismissible splash overlay.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-3-explore-interface-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-3-explore-interface
- **Instruction:** Return to the Entra ID page. Explore options such as Licenses and Password reset to familiarize your...
- **Actual:** The left sidebar has been significantly simplified. It no longer contains "Licenses" or "Password reset" as direct menu items. The sidebar now only shows: Overview, Preview features, Diagnose and solve problems, Manage, Monitoring, and Troubleshooting + Support. A banner directs users to the new Microsoft Entra admin center for the full feature set.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-3-explore-interface-flow

- **Category:** flow_drift
- **Severity:** warning
- **Step:** step-3-explore-interface
- **Instruction:** Return to the Entra ID page. Explore options such as Licenses and Password reset to familiarize your...
- **Actual:** To explore Licenses and Password reset, a human user would now need to either expand the "Manage" section in the sidebar or click "Go to Microsoft Entra" to use the new Entra admin center. The lab instructions should be updated to reflect this reorganized navigation.
- **Recommendation:** Add missing steps to lab instructions

### step-3-explore-interface-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-3-explore-interface
- **Instruction:** Return to the Entra ID page. Explore options such as Licenses and Password reset to familiarize your...
- **Actual:** An info banner at the top reads: "Microsoft Entra has a simpler, integrated experience for managing all your Identity and Access Management needs. Try the new Microsoft Entra admin center!" — informational, not blocking.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-6-invite-external-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-6-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email to your email address, Display n...
- **Actual:** The button/tab label is "Review + invite" (not "Review + create" as used for new users). This matches the invite workflow correctly — the instructions say "Review + invite" which is accurate.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-9-add-group-owners-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-9-add-group-owners
- **Instruction:** Select No owners selected. In the Add owners page, search for and select yourself (shown in the top ...
- **Actual:** The instructions reference "No owners selected" link on the New Group creation form. Since the group was already created in Step 8, the owner was added via the group detail page's "Add owners" toolbar button instead. A human following the instructions sequentially would see "No owners selected" during group creation — the flow is functionally the same.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-10-add-group-members-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-10-add-group-members
- **Instruction:** Select No members selected. In the Add members pane, search for and select the az104-user1 and the g...
- **Actual:** The instructions reference "No members selected" link on the New Group creation form. Since the group was already created, members were added via the group detail page's "Add members" toolbar button. A human following instructions sequentially would use "No members selected" during group creation — functionally identical.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-11-create-and-verify-group-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-11-create-and-verify-group
- **Instruction:** Select Create to deploy the group. Refresh the page and ensure your group was created. Select the ne...
- **Actual:** The "Create" button referenced in the instructions was already clicked in Step 8 (group was created then). This step's "Create" action was already completed — only the verification portion remained.
- **Recommendation:** Update lab instructions to reflect new element text/location

## Step Details

### ⚠️ step-1-signin-portal: Sign in to Azure portal

**Status:** drift
**Duration:** 969s

**Drift Issues:**
- selector_drift: The instructions mention a "Welcome to Azure splash screen" with a "Cancel" butt...

### ✅ step-2-navigate-entra: Navigate to Microsoft Entra ID

**Status:** passed
**Duration:** 138s

### ⚠️ step-3-explore-interface: Explore Entra ID interface

**Status:** drift
**Duration:** 163s

**Drift Issues:**
- selector_drift: The left sidebar has been significantly simplified. It no longer contains "Licen...
- flow_drift: To explore Licenses and Password reset, a human user would now need to either ex...
- unexpected_ui: An info banner at the top reads: "Microsoft Entra has a simpler, integrated expe...

### ✅ step-4-navigate-users: Navigate to Users section

**Status:** passed
**Duration:** 116s

### ✅ step-5-create-user1: Create az104-user1 with properties

**Status:** passed
**Duration:** 1043s

### ⚠️ step-6-invite-external-user: Invite external user

**Status:** drift
**Duration:** 257s

**Drift Issues:**
- selector_drift: The button/tab label is "Review + invite" (not "Review + create" as used for new...

### ✅ step-7-navigate-groups: Navigate to Groups section

**Status:** passed
**Duration:** 109s

### ✅ step-8-create-security-group: Create IT Lab Administrators group

**Status:** passed
**Duration:** 620s

### ⚠️ step-9-add-group-owners: Add group owners

**Status:** drift
**Duration:** 847s

**Drift Issues:**
- selector_drift: The instructions reference "No owners selected" link on the New Group creation f...

### ⚠️ step-10-add-group-members: Add group members

**Status:** drift
**Duration:** 358s

**Drift Issues:**
- selector_drift: The instructions reference "No members selected" link on the New Group creation ...

### ⚠️ step-11-create-and-verify-group: Create and verify group

**Status:** drift
**Duration:** 132s

**Drift Issues:**
- selector_drift: The "Create" button referenced in the instructions was already clicked in Step 8...
