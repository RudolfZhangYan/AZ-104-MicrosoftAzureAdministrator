# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 32ce9ca8-8e40-470e-9fa1-4d793b8afa5c
**Status:** PASSED
**Duration:** 6324s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 15 |
| Passed | 15 |
| Drift Detected | 0 |
| Failed | 0 |
| Skipped (API errors) | 0 |

## Drift Issues

### step-2-navigate-entra-id-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID from the Azure portal...
- **Actual:** A "Give feedback to Microsoft" satisfaction survey popup appeared in the top-right corner. It was informational only and did not block any functionality.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-5-create-new-user-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-5-create-new-user
- **Instruction:** Click the New user dropdown and select Create new user, then fill the form with az104-user1 details ...
- **Actual:** An informational banner "Azure Active Directory is now Microsoft Entra ID" appears at the top of the Users page. It is non-blocking and informational only.
- **Recommendation:** Informational UI element - does not affect lab completion

### step-7-invite-external-user-unexpected

- **Category:** unexpected_ui
- **Severity:** info
- **Step:** step-7-invite-external-user
- **Instruction:** Click New user dropdown, select Invite an external user, fill the invitation form with your email an...
- **Actual:** A "Give feedback to Microsoft" satisfaction survey popup appeared in the top-right corner during the invite form. It was informational only and did not block functionality.
- **Recommendation:** Informational UI element - does not affect lab completion

## Step Details

### ✅ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** passed
**Duration:** 644s

### ✅ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** passed
**Duration:** 295s

**Drift Issues:**
- unexpected_ui: A "Give feedback to Microsoft" satisfaction survey popup appeared in the top-rig...

### ✅ step-3-explore-tenants: Explore Entra ID Tenants

**Status:** passed
**Duration:** 128s

### ✅ step-4-navigate-users: Navigate to Users Section

**Status:** passed
**Duration:** 85s

### ✅ step-5-create-new-user: Create New User

**Status:** passed
**Duration:** 1884s

**Drift Issues:**
- unexpected_ui: An informational banner "Azure Active Directory is now Microsoft Entra ID" appea...

### ✅ step-6-verify-user-created: Verify User Creation

**Status:** passed
**Duration:** 88s

### ✅ step-7-invite-external-user: Invite External User

**Status:** passed
**Duration:** 364s

**Drift Issues:**
- unexpected_ui: A "Give feedback to Microsoft" satisfaction survey popup appeared in the top-rig...

### ✅ step-8-verify-guest-user: Verify Guest User Invitation

**Status:** passed
**Duration:** 80s

### ✅ step-9-navigate-groups: Navigate to Groups Section

**Status:** passed
**Duration:** 66s

### ✅ step-10-explore-group-settings: Explore Group Settings

**Status:** passed
**Duration:** 86s

### ✅ step-11-create-security-group: Create Security Group

**Status:** passed
**Duration:** 177s

### ✅ step-12-assign-group-owners: Assign Group Owners

**Status:** passed
**Duration:** 981s

### ✅ step-13-assign-group-members: Assign Group Members

**Status:** passed
**Duration:** 140s

### ✅ step-14-create-group: Create and Verify Group

**Status:** passed
**Duration:** 350s

### ✅ step-15-review-group-details: Review Group Configuration

**Status:** passed
**Duration:** 116s
