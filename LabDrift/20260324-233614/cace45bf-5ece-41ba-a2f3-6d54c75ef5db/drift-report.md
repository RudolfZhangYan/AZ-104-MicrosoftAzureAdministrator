# Drift Detection Report

**Lab:** Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** cace45bf-5ece-41ba-a2f3-6d54c75ef5db
**Status:** FAILED
**Duration:** 121s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 13 |
| Passed | 0 |
| Drift Detected | 0 |
| Failed | 13 |
| Skipped (API errors) | 0 |

### Drift by Category

- **missing_element**: 13

## Drift Issues

### step-1-sign-in-portal-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-2-navigate-entra-id-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID. Select the Overview blade and then the Manage tenants tab....
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-3-access-users-section-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-3-access-users-section
- **Instruction:** In the Manage blade, select Users; then in the New user drop-down select Create new user....
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-4-create-internal-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-4-create-internal-user
- **Instruction:** Create a new user with the following settings: User principal name: az104-user1, Display name: az104...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-5-verify-user-creation-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-5-verify-user-creation
- **Instruction:** Refresh the page and confirm your new user was created....
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-6-invite-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-6-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Set Email: your email address, Display nam...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-7-verify-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-7-verify-external-user
- **Instruction:** Refresh the page and confirm the invited user was created. You should receive the invitation email s...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-8-navigate-groups-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-8-navigate-groups
- **Instruction:** In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups....
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-9-create-new-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-9-create-new-group
- **Instruction:** In the All groups blade, select + New group and create a new group. Set Group type: Security, Group ...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-10-assign-group-owner-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-10-assign-group-owner
- **Instruction:** Select No owners selected. In the Add owners page, search for and select yourself (shown in the top ...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-11-add-group-members-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-11-add-group-members
- **Instruction:** Select No members selected. In the Add members pane, search for and select the az104-user1 and the g...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-12-create-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-12-create-group
- **Instruction:** Select Create to deploy the group....
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-13-verify-group-creation-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-13-verify-group-creation
- **Instruction:** Refresh the page and ensure your group was created. Select the new group and review the Members and ...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

## Step Details

### ❌ step-1-sign-in-portal: Sign in to Azure portal

**Status:** failed
**Duration:** 11s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-3-access-users-section: Access Users management section

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-4-create-internal-user: Create internal user az104-user1

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-5-verify-user-creation: Verify user creation

**Status:** failed
**Duration:** 64s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-6-invite-external-user: Invite external guest user

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-7-verify-external-user: Verify external user invitation

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-8-navigate-groups: Navigate to Groups management

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-9-create-new-group: Create new security group

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-10-assign-group-owner: Assign group owner

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-11-add-group-members: Add group members

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-12-create-group: Create the group

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-13-verify-group-creation: Verify group creation and membership

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...
