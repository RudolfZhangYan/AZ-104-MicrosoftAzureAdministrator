# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** dbf16afd-9019-4657-ad9d-2a3de66d0fd3
**Status:** FAILED
**Duration:** 58s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 12 |
| Passed | 0 |
| Drift Detected | 0 |
| Failed | 12 |
| Skipped (API errors) | 0 |

### Drift by Category

- **missing_element**: 12

## Drift Issues

### step-1-sign-in-portal-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash scre...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-2-navigate-entra-id-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID, then explore the Overview blade and Manage tenants tab...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-3-navigate-users-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-3-navigate-users
- **Instruction:** Return to Entra ID page and in the Manage blade, select Users, then select Create new user from the ...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-4-create-internal-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-4-create-internal-user
- **Instruction:** Create a new user with User principal name 'az104-user1', Display name 'az104-user1', Auto-generate ...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-5-verify-user-created-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-5-verify-user-created
- **Instruction:** Refresh the page and confirm your new user was created...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-6-invite-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-6-invite-external-user
- **Instruction:** In the New user dropdown select Invite an external user. Enter your email address, your name as disp...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-7-navigate-groups-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-7-navigate-groups
- **Instruction:** In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups an...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-8-create-new-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-8-create-new-group
- **Instruction:** In the All groups blade, select + New group and create a new group with Group type 'Security', Group...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-9-add-group-owners-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-9-add-group-owners
- **Instruction:** Select No owners selected, then in the Add owners page, search for and select yourself as the owner...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-10-add-group-members-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-10-add-group-members
- **Instruction:** Select No members selected, then in the Add members pane, search for and select both az104-user1 and...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-11-deploy-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-11-deploy-group
- **Instruction:** Select Create to deploy the group...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-12-verify-group-creation-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-12-verify-group-creation
- **Instruction:** Refresh the page and ensure your group was created. Select the new group and review the Members and ...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

## Step Details

### ❌ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** failed
**Duration:** 16s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** failed
**Duration:** 7s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-3-navigate-users: Navigate to Users Section

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-4-create-internal-user: Create Internal User Account

**Status:** failed
**Duration:** 7s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-5-verify-user-created: Verify User Creation

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-6-invite-external-user: Invite External User

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-7-navigate-groups: Navigate to Groups Section

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-8-create-new-group: Create New Security Group

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-9-add-group-owners: Add Group Owners

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-10-add-group-members: Add Group Members

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-11-deploy-group: Deploy the Group

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-12-verify-group-creation: Verify Group Creation

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...
