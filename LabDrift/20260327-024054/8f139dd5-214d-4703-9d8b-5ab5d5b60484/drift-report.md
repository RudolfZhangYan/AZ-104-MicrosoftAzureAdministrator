# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 8f139dd5-214d-4703-9d8b-5ab5d5b60484
**Status:** DRIFT_DETECTED
**Duration:** 4487s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 13 |
| Passed | 11 |
| Drift Detected | 2 |
| Failed | 0 |
| Skipped (API errors) | 0 |

### Drift by Category

- **selector_drift**: 1
- **unexpected_ui**: 1

## Drift Issues

### step-1-signin-portal-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-signin-portal
- **Instruction:** Sign in to the Azure portal at https://portal.azure.com. To proceed to the portal, select Cancel on ...
- **Actual:** The "Welcome to Azure" screen is a subscription landing page showing "Don't have a subscription? Check out the following options" with Start/View/Learn more buttons — not a dismissible splash modal with a Cancel button. This likely appears because the account has no active subscription.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-2-navigate-entra-id-unexpected

- **Category:** unexpected_ui
- **Severity:** warning
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID from the Azure portal....
- **Actual:** An "Interaction Required" (需要交互) warning dialog appeared with AADSTS16000 error stating the user account from identity provider 'live.com' does not exist in this tenant. This is an account/authentication configuration issue, not instruction drift. The dialog is dismissible by clicking "Ignore" (忽略) and does not block access to Entra ID features.
- **Recommendation:** Consider documenting this UI element in instructions

### step-7-invite-external-user-setup-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-7-invite-external-user-setup
- **Instruction:** In the New user drop-down select Invite an external user. Enter your email address, your name as dis...
- **Actual:** An informational banner at top states "Starting December 2025, B2B invitation emails will be sent from your organization's primary domain (e.g., contoso.onmicrosoft.com) instead of Microsoft.com." This is informational only and does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

## Step Details

### ⚠️ step-1-signin-portal: Sign in to Azure Portal

**Status:** drift
**Duration:** 107s

**Drift Issues:**
- selector_drift: The "Welcome to Azure" screen is a subscription landing page showing "Don't have...

### ⚠️ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** drift
**Duration:** 100s

**Drift Issues:**
- unexpected_ui: An "Interaction Required" (需要交互) warning dialog appeared with AADSTS16000 error ...

### ✅ step-3-explore-overview-tenants: Explore Overview and Manage Tenants

**Status:** passed
**Duration:** 377s

### ✅ step-4-access-users-section: Access Users Management Section

**Status:** passed
**Duration:** 475s

### ✅ step-5-create-internal-user-basics: Create Internal User Basic Settings

**Status:** passed
**Duration:** 156s

### ✅ step-6-add-user-properties-create: Add User Properties and Create

**Status:** passed
**Duration:** 151s

### ✅ step-7-invite-external-user-setup: Setup External User Invitation

**Status:** passed
**Duration:** 371s

**Drift Issues:**
- unexpected_ui: An informational banner at top states "Starting December 2025, B2B invitation em...

### ✅ step-8-external-user-properties-invite: Add External User Properties and Send Invite

**Status:** passed
**Duration:** 114s

### ✅ step-9-navigate-to-groups: Navigate to Groups Management

**Status:** passed
**Duration:** 98s

### ✅ step-10-configure-group-settings: Configure Group Basic Settings

**Status:** passed
**Duration:** 105s

### ✅ step-11-add-group-owners: Add Group Owners

**Status:** passed
**Duration:** 216s

### ✅ step-12-add-group-members: Add Group Members

**Status:** passed
**Duration:** 964s

### ✅ step-13-create-and-verify-group: Create Group and Verify

**Status:** passed
**Duration:** 709s
