# Drift Detection Report

**Lab:** Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** b6ced244-9543-4373-8484-12750f3d9d20
**Status:** FAILED
**Duration:** 145s

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
- **Instruction:** Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome to Azure splash scre...
- **Actual:** PowerShell 6+ (pwsh.exe) is not installed. All tool execution is blocked. Install from https://aka.ms/powershell then retry.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-2-navigate-entra-id-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID. Take a few minutes to familiarize yourself with the featur...
- **Actual:** PowerShell 6+ (pwsh.exe) is not installed. All tool execution is blocked — no browser, no CLI, no screenshots. Install from https://aka.ms/powershell then retry.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-3-explore-overview-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-3-explore-overview
- **Instruction:** Select the Overview blade and then the Manage tenants tab. Review tenant information, then return to...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-4-navigate-users-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-4-navigate-users
- **Instruction:** In the Manage blade, select Users, then in the New user drop-down select Create new user....
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-5-create-user1-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-5-create-user1
- **Instruction:** Create a new user with User principal name 'az104-user1', Display name 'az104-user1', Auto-generate ...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-6-verify-user1-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-6-verify-user1
- **Instruction:** Refresh the page and confirm your new user was created....
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-7-invite-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-7-invite-external-user
- **Instruction:** In the New user drop-down select Invite an external user. Fill Email with your email address, Displa...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-8-navigate-groups-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-8-navigate-groups
- **Instruction:** Search for and select Microsoft Entra ID again. In the Manage blade, select Groups. Take a minute to...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-9-create-new-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-9-create-new-group
- **Instruction:** In the All groups blade, select + New group and create a new group with Group type 'Security', Group...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-10-add-group-owners-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-10-add-group-owners
- **Instruction:** Select No owners selected. In the Add owners page, search for and select yourself (shown in the top ...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-11-add-group-members-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-11-add-group-members
- **Instruction:** Select No members selected. In the Add members pane, search for and select both az104-user1 and the ...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-12-create-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-12-create-group
- **Instruction:** Select Create to deploy the group. Refresh the page and ensure your group was created....
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-13-verify-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-13-verify-group
- **Instruction:** Select the new IT Lab Administrators group and review the Members and Owners information to confirm ...
- **Actual:** PowerShell 6+ (pwsh.exe) not installed. All execution blocked.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

## Step Details

### ❌ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** failed
**Duration:** 17s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) is not installed. All tool execution is blocked. Instal...

### ❌ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) is not installed. All tool execution is blocked — no br...

### ❌ step-3-explore-overview: Explore Entra ID Overview

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-4-navigate-users: Navigate to Users section

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-5-create-user1: Create az104-user1 account

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-6-verify-user1: Verify user creation

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-7-invite-external-user: Invite external user

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-8-navigate-groups: Navigate to Groups section

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-9-create-new-group: Create IT Lab Administrators group

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-10-add-group-owners: Add group owners

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-11-add-group-members: Add group members

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-12-create-group: Deploy the group

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....

### ❌ step-13-verify-group: Verify group configuration

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: PowerShell 6+ (pwsh.exe) not installed. All execution blocked....
