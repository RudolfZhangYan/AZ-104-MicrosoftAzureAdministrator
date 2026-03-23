# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 8519bb2c-c5e9-4180-9c2d-92257a676606
**Status:** FAILED
**Duration:** 316s

## Summary

| Metric | Count |
|--------|-------|
| Total Steps | 15 |
| Passed | 0 |
| Drift Detected | 0 |
| Failed | 15 |
| Skipped (API errors) | 0 |

### Drift by Category

- **missing_element**: 15
- **flow_drift**: 1

## Drift Issues

### step-1-signin-portal-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-1-signin-portal
- **Instruction:** Sign in to the Azure portal - https://portal.azure.com. To proceed to the portal, select Cancel on t...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-2-navigate-entraid-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-2-navigate-entraid
- **Instruction:** Search for and select Microsoft Entra ID....
- **Actual:** PowerShell 6+ (pwsh.exe) is not installed. Cannot execute any commands or launch browser.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-2-navigate-entraid-flow

- **Category:** flow_drift
- **Severity:** warning
- **Step:** step-2-navigate-entraid
- **Instruction:** Search for and select Microsoft Entra ID....
- **Actual:** Install PowerShell 6+ (pwsh.exe)
- **Recommendation:** Add missing steps to lab instructions

### step-3-explore-overview-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-3-explore-overview
- **Instruction:** Select the Overview blade and then the Manage tenants tab. Return to the Entra ID page by pressing b...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All browser interaction blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-4-navigate-users-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-4-navigate-users
- **Instruction:** In the Manage blade, select Users; then in the New user drop-down select Create new user....
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-5-create-internal-user-basic-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-5-create-internal-user-basic
- **Instruction:** Create a new user with User principal name: az104-user1, Display name: az104-user1, Auto-generate pa...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-6-configure-user-properties-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-6-configure-user-properties
- **Instruction:** Move to the Properties tab. Complete the basic information with Job title: IT Lab Administrator, Dep...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-7-create-internal-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-7-create-internal-user
- **Instruction:** Select Review + create and then Create. Refresh the page and confirm your new user was created....
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-8-invite-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-8-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Enter your email address, your name as dis...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-9-configure-external-user-properties-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-9-configure-external-user-properties
- **Instruction:** Move to the Properties tab. Complete the basic information, including Job title: IT Lab Administrato...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-10-navigate-groups-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-10-navigate-groups
- **Instruction:** In the Azure portal, search for and select Microsoft Entra ID. In the Manage blade, select Groups....
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-11-create-new-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-11-create-new-group
- **Instruction:** In the All groups blade, select + New group and create a new group....
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-12-configure-group-details-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-12-configure-group-details
- **Instruction:** Configure with Group type: Security, Group name: IT Lab Administrators, Group description: Administr...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-13-add-group-owners-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-13-add-group-owners
- **Instruction:** Select No owners selected. In the Add owners page, search for and select yourself (shown in the top ...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-14-add-group-members-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-14-add-group-members
- **Instruction:** Select No members selected. In the Add members pane, search for and select the az104-user1 and the g...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-15-create-and-verify-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-15-create-and-verify-group
- **Instruction:** Select Create to deploy the group. Refresh the page and ensure your group was created. Select the ne...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

## Step Details

### ❌ step-1-signin-portal: Sign in to Azure Portal

**Status:** failed
**Duration:** 65s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-2-navigate-entraid: Navigate to Microsoft Entra ID

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) is not installed. Cannot execute any commands or launch...
- flow_drift: Install PowerShell 6+ (pwsh.exe)...

### ❌ step-3-explore-overview: Explore Overview and Tenant Management

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All browser interaction blocked....

### ❌ step-4-navigate-users: Navigate to Users Section

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-5-create-internal-user-basic: Configure Basic User Information

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-6-configure-user-properties: Configure User Properties

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-7-create-internal-user: Create Internal User

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-8-invite-external-user: Invite External User

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-9-configure-external-user-properties: Configure External User Properties

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-10-navigate-groups: Navigate to Groups Section

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-11-create-new-group: Start Creating New Group

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-12-configure-group-details: Configure Group Details

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-13-add-group-owners: Add Group Owners

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-14-add-group-members: Add Group Members

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....

### ❌ step-15-create-and-verify-group: Create and Verify Group

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed....
