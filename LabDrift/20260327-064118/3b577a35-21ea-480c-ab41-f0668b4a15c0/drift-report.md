# Drift Detection Report

**Lab:** Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 3b577a35-21ea-480c-ab41-f0668b4a15c0
**Status:** DRIFT_DETECTED
**Duration:** 13880s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 13 |
| Passed | 10 |
| Drift Detected | 2 |
| Failed | 0 |
| Skipped (API errors) | 1 |

### Drift by Category

- **selector_drift**: 2

## Drift Issues

### step-1-sign-in-portal-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** The instructions mention a "Welcome to Azure" splash screen with a Cancel button. Instead, the portal loaded directly to the home page showing "Welcome to Azure!" as the default no-subscription landing page — not a dismissable modal. This is normal for returning authenticated sessions.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-8-verify-external-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-8-verify-external-user
- **Instruction:** Refresh the page and confirm the invited user was created....
- **Actual:** The invited external user's display name resolved to the Microsoft Account's profile name ("Zhang Rudolf") rather than the "az104-user2" display name set during invitation. This is standard Azure behavior — when inviting an existing Microsoft Account, Entra ID uses the account's real profile name.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-8-verify-external-user-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-8-verify-external-user
- **Instruction:** Refresh the page and confirm the invited user was created....
- **Actual:** A "Give feedback to Microsoft" popup appeared in the top-right corner (informational only, did not block progress).
- **Recommendation:** Informational UI element - does not affect lab completion

## Step Details

### ⚠️ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** drift
**Duration:** 200s

**Drift Issues:**
- selector_drift: The instructions mention a "Welcome to Azure" splash screen with a Cancel button...

### ✅ step-2-explore-entra-id: Navigate and Explore Microsoft Entra ID

**Status:** passed
**Duration:** 704s

### ✅ step-3-access-users-section: Access Users Section

**Status:** passed
**Duration:** 947s

### ✅ step-4-create-internal-user: Create Internal User az104-user1

**Status:** passed
**Duration:** 2199s

### ✅ step-5-verify-internal-user: Verify Internal User Creation

**Status:** passed
**Duration:** 546s

### ✅ step-6-start-external-user-invite: Start External User Invitation

**Status:** passed
**Duration:** 1181s

### ✅ step-7-configure-external-user: Configure External User Invitation

**Status:** passed
**Duration:** 615s

### ⚠️ step-8-verify-external-user: Verify External User Invitation

**Status:** drift
**Duration:** 267s

**Drift Issues:**
- selector_drift: The invited external user's display name resolved to the Microsoft Account's pro...
- unexpected_ui: A "Give feedback to Microsoft" popup appeared in the top-right corner (informati...

### ✅ step-9-access-groups-section: Access Groups Section

**Status:** passed
**Duration:** 971s

### ✅ step-10-configure-group-basic-settings: Configure Group Basic Settings

**Status:** passed
**Duration:** 665s

### ✅ step-11-assign-group-owner: Assign Group Owner

**Status:** passed
**Duration:** 954s

### ✅ step-12-add-group-members: Add Group Members

**Status:** passed
**Duration:** 755s

### ❌ step-13-create-and-verify-group: Create and Verify Group

**Status:** skipped
**Duration:** 3035s
