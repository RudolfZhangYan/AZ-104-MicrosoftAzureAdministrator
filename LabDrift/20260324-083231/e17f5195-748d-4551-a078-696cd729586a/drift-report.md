# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** e17f5195-748d-4551-a078-696cd729586a
**Status:** FAILED
**Duration:** 140s

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

## Drift Issues

### step-1-sign-in-portal-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-1-sign-in-portal
- **Instruction:** Sign in to the Azure portal at https://portal.azure.com and dismiss the Welcome splash screen by sel...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-2-navigate-entra-id-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-2-navigate-entra-id
- **Instruction:** Search for and select Microsoft Entra ID to access Azure's cloud-based identity and access managemen...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-3-explore-overview-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-3-explore-overview
- **Instruction:** Select the Overview blade, then the Manage tenants tab to explore tenant information, then return to...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-4-navigate-users-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-4-navigate-users
- **Instruction:** In the Manage blade, select Users to access user management functionality...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-5-create-new-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-5-create-new-user
- **Instruction:** Click New user dropdown, select Create new user, and configure with User principal name: az104-user1...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-6-configure-user-properties-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-6-configure-user-properties
- **Instruction:** Navigate to Properties tab and configure Job title: IT Lab Administrator, Department: IT, Usage loca...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-7-create-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-7-create-user
- **Instruction:** Select Review + create, then Create to deploy the user account...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-8-invite-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-8-invite-external-user
- **Instruction:** Click New user dropdown, select Invite an external user, enter your email address, display name, che...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-9-configure-guest-properties-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-9-configure-guest-properties
- **Instruction:** Move to Properties tab and complete Job title: IT Lab Administrator, Department: IT, Usage location:...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-10-navigate-groups-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-10-navigate-groups
- **Instruction:** Search for and select Microsoft Entra ID, then in the Manage blade select Groups...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-11-create-security-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-11-create-security-group
- **Instruction:** Select + New group and configure Group type: Security, Group name: IT Lab Administrators, Group desc...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-12-assign-group-owners-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-12-assign-group-owners
- **Instruction:** Select No owners selected, then in the Add owners page search for and select yourself as the owner...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-13-assign-group-members-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-13-assign-group-members
- **Instruction:** Select No members selected, then in the Add members pane search for and select az104-user1 and the g...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-14-create-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-14-create-group
- **Instruction:** Select Create to deploy the group, then refresh the page and verify the group was created...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-15-verify-group-details-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-15-verify-group-details
- **Instruction:** Select the new group and review the Members and Owners information to confirm configuration...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

## Step Details

### ❌ step-1-sign-in-portal: Sign in to Azure Portal

**Status:** failed
**Duration:** 72s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-2-navigate-entra-id: Navigate to Microsoft Entra ID

**Status:** failed
**Duration:** 8s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-3-explore-overview: Explore Entra ID Overview

**Status:** failed
**Duration:** 7s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-4-navigate-users: Navigate to Users Management

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-5-create-new-user: Create New User Account

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-6-configure-user-properties: Configure User Properties

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-7-create-user: Create User Account

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-8-invite-external-user: Invite External User

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-9-configure-guest-properties: Configure Guest User Properties

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-10-navigate-groups: Navigate to Groups Management

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-11-create-security-group: Create Security Group

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-12-assign-group-owners: Assign Group Owners

**Status:** failed
**Duration:** 6s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-13-assign-group-members: Assign Group Members

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-14-create-group: Deploy Security Group

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-15-verify-group-details: Verify Group Configuration

**Status:** failed
**Duration:** 8s

**Drift Issues:**
- missing_element: Element not found...
