# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 1808e83b-1a8c-401d-8558-443561894f96
**Status:** DRIFT_DETECTED
**Duration:** 2127s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 12 |
| Passed | 9 |
| Drift Detected | 3 |
| Failed | 0 |
| Skipped (API errors) | 0 |

### Drift by Category

- **selector_drift**: 3

## Drift Issues

### step-1-sign-in-azure-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-sign-in-azure
- **Instruction:** Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash scre...
- **Actual:** The "Welcome to Azure" splash screen with a "Cancel" button no longer appears as a modal dialog. Instead, the portal loads directly to the home page which shows inline "Welcome to Azure!" content with subscription options (Free Trial, Manage Entra ID, Azure for Students). There is no Cancel button to click. This appears to be the current default home experience for tenants without subscriptions.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-1-sign-in-azure-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-1-sign-in-azure
- **Instruction:** Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash scre...
- **Actual:** A Microsoft feedback survey toast ("How satisfied are you with portal.azure.com?") appeared in the top-right corner. It's informational and does not block progress — can be dismissed via its X button.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-7-invite-external-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-7-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Enter your email address, your name as dis...
- **Actual:** The lab instructions say "Invite an external user" but the actual menu item text is "Invite external user" (no "an"). The final button is labeled "Invite" (not "Create"). The review tab is labeled "Review + invite" (not "Review + create"). These are consistent with the invite workflow being distinct from the create workflow.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-9-create-security-group-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-9-create-security-group
- **Instruction:** In the All groups blade, select + New group. Set Group type to Security, Group name to IT Lab Admini...
- **Actual:** The Membership type dropdown is disabled/greyed out when Group type is "Security" — it's locked to "Assigned" and cannot be changed. A human user would see this is pre-set and not editable, which differs slightly from the instruction suggesting they need to "set" it.
- **Recommendation:** Update lab instructions to reflect new element text/location

## Step Details

### ⚠️ step-1-sign-in-azure: Sign in to Azure Portal

**Status:** drift
**Duration:** 378s

**Drift Issues:**
- selector_drift: The "Welcome to Azure" splash screen with a "Cancel" button no longer appears as...
- unexpected_ui: A Microsoft feedback survey toast ("How satisfied are you with portal.azure.com?...

### ✅ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** passed
**Duration:** 222s

### ✅ step-3-explore-tenant-management: Explore Tenant Management

**Status:** passed
**Duration:** 96s

### ✅ step-4-navigate-to-users: Navigate to Users Section

**Status:** passed
**Duration:** 102s

### ✅ step-5-create-user-az104: Create User az104-user1

**Status:** passed
**Duration:** 147s

### ✅ step-6-verify-user-creation: Verify User Creation

**Status:** passed
**Duration:** 75s

### ⚠️ step-7-invite-external-user: Invite External User

**Status:** drift
**Duration:** 283s

**Drift Issues:**
- selector_drift: The lab instructions say "Invite an external user" but the actual menu item text...

### ✅ step-8-navigate-to-groups: Navigate to Groups Section

**Status:** passed
**Duration:** 75s

### ⚠️ step-9-create-security-group: Create IT Lab Administrators Group

**Status:** drift
**Duration:** 107s

**Drift Issues:**
- selector_drift: The Membership type dropdown is disabled/greyed out when Group type is "Security...

### ✅ step-10-add-group-owners: Add Group Owners

**Status:** passed
**Duration:** 201s

### ✅ step-11-add-group-members: Add Group Members

**Status:** passed
**Duration:** 126s

### ✅ step-12-create-group: Create and Verify Group

**Status:** passed
**Duration:** 192s
