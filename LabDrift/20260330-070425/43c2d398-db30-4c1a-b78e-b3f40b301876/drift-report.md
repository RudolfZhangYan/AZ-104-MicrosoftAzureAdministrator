# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 43c2d398-db30-4c1a-b78e-b3f40b301876
**Status:** DRIFT_DETECTED
**Duration:** 10255s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 14 |
| Passed | 12 |
| Drift Detected | 2 |
| Failed | 0 |
| Skipped (API errors) | 0 |

### Drift by Category

- **selector_drift**: 2

## Drift Issues

### step-3-explore-overview-tenants-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-3-explore-overview-tenants
- **Instruction:** Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing b...
- **Actual:** The lab instructions refer to "Manage tenants tab" but in the current UI it appears as a toolbar button (管理租户) in the command bar alongside "+ Add", "What's new", "Preview features", and "Provide feedback" — not as a content tab next to Overview/Monitoring/Properties/Recommendations/Setup guides.
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-3-explore-overview-tenants-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-3-explore-overview-tenants
- **Instruction:** Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing b...
- **Actual:** A Microsoft feedback popup appeared ("向 Microsoft 提供反馈 — 你对 Microsoft Entra 的满意度如何?") — informational only, did not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-6-verify-user-created-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-6-verify-user-created
- **Instruction:** Refresh the page and confirm your new user was created....
- **Actual:** An informational banner "Azure Active Directory is now Microsoft Entra ID" appears at the top — informational only, does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-7-invite-external-user-selector

- **Category:** selector_drift
- **Severity:** warning
- **Step:** step-7-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** The form tabs show "Review + invite" (not "Review + create" as on the create user form). Additional fields visible that aren't mentioned in instructions: Cc recipient, Invite redirect URL (pre-filled with myapplications.microsoft.com). An info banner states "Starting December 2025, B2B invitation emails will be sent from your organization's primary domain instead of Microsoft.com."
- **Recommendation:** Update lab instructions to reflect new element text/location

### step-7-invite-external-user-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-7-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** Info banner about B2B invitation email changes (December 2025) — informational only, does not block progress.
- **Recommendation:** Informational UI element - does not affect lab completion

## Step Details

### ✅ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** passed
**Duration:** 229s

### ✅ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** passed
**Duration:** 250s

### ⚠️ step-3-explore-overview-tenants: Explore Overview and Manage Tenants

**Status:** drift
**Duration:** 372s

**Drift Issues:**
- selector_drift: The lab instructions refer to "Manage tenants tab" but in the current UI it appe...
- unexpected_ui: A Microsoft feedback popup appeared ("向 Microsoft 提供反馈 — 你对 Microsoft Entra 的满意度...

### ✅ step-4-navigate-users: Navigate to Users and Create New User

**Status:** passed
**Duration:** 3297s

### ✅ step-5-create-az104-user1: Configure and Create User az104-user1

**Status:** passed
**Duration:** 3429s

### ✅ step-6-verify-user-created: Verify User Creation

**Status:** passed
**Duration:** 76s

**Drift Issues:**
- unexpected_ui: An informational banner "Azure Active Directory is now Microsoft Entra ID" appea...

### ⚠️ step-7-invite-external-user: Invite External User

**Status:** drift
**Duration:** 136s

**Drift Issues:**
- selector_drift: The form tabs show "Review + invite" (not "Review + create" as on the create use...
- unexpected_ui: Info banner about B2B invitation email changes (December 2025) — informational o...

### ✅ step-8-configure-external-user-properties: Configure External User Properties and Invite

**Status:** passed
**Duration:** 189s

### ✅ step-9-verify-external-user: Verify External User Invitation

**Status:** passed
**Duration:** 97s

### ✅ step-10-navigate-groups: Navigate to Groups

**Status:** passed
**Duration:** 72s

### ✅ step-11-create-new-group: Create New Security Group

**Status:** passed
**Duration:** 225s

### ✅ step-12-add-group-owners: Add Group Owners

**Status:** passed
**Duration:** 190s

### ✅ step-13-add-group-members: Add Group Members and Create Group

**Status:** passed
**Duration:** 892s

### ✅ step-14-verify-group-creation: Verify Group Creation and Review Members

**Status:** passed
**Duration:** 88s
