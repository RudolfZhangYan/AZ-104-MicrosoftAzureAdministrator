# Drift Detection Report

**Lab:** Lab 01 - Manage Microsoft Entra ID Identities
**Source:** https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/Instructions/Labs/LAB_01-Manage_Entra_ID_Identities.html
**Run ID:** 6cb1bdf8-af7f-4b97-bb2f-2b6ce9d3a4d0
**Status:** FAILED
**Duration:** 86s

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

### step-1-sign-in-azure-portal-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-1-sign-in-azure-portal
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
- **Instruction:** Select the Overview blade and then the Manage tenants tab to view tenant information, then return to...
- **Actual:** Element not found
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-4-navigate-to-users-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-4-navigate-to-users
- **Instruction:** In the Manage blade, select Users and then select Create new user from the New user dropdown...
- **Actual:** This agent does not have Playwright MCP or browser tools configured. Steps must be routed to a Copilot SDK session with Playwright MCP server.
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-5-create-user-basic-info-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-5-create-user-basic-info
- **Instruction:** Create a new user with User principal name 'az104-user1', Display name 'az104-user1', Auto-generate ...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-6-configure-user-properties-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-6-configure-user-properties
- **Instruction:** Switch to the Properties tab and set Job title to 'IT Lab Administrator', Department to 'IT', and Us...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-7-create-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-7-create-user
- **Instruction:** Select Review + create and then Create to create the user account...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-8-verify-user-creation-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-8-verify-user-creation
- **Instruction:** Refresh the page and confirm your new user was created...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-9-invite-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-9-invite-external-user
- **Instruction:** In the New user dropdown select Invite an external user...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-10-configure-external-user-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-10-configure-external-user
- **Instruction:** Fill Email with your email address, Display name with your name, check Send invite message box, and ...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-11-send-invitation-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-11-send-invitation
- **Instruction:** Select Review + invite and then Invite to send the invitation...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-12-navigate-to-groups-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-12-navigate-to-groups
- **Instruction:** Search for and select Microsoft Entra ID, then in the Manage blade select Groups...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-13-create-new-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-13-create-new-group
- **Instruction:** In the All groups blade, select + New group and create a new group with Group type 'Security', Group...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-14-add-group-owners-members-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-14-add-group-owners-members
- **Instruction:** Select No owners selected, add yourself as owner. Then select No members selected and add both az104...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

### step-15-deploy-group-missing

- **Category:** missing_element
- **Severity:** blocking
- **Step:** step-15-deploy-group
- **Instruction:** Select Create to deploy the group, then refresh the page and ensure your group was created. Select t...
- **Actual:** No Playwright MCP or browser tools available in this session
- **Recommendation:** Update lab instructions - element may have been removed or renamed

## Step Details

### ❌ step-1-sign-in-azure-portal: Sign in to Azure Portal

**Status:** failed
**Duration:** 12s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-2-navigate-entra-id: Search for and select Microsoft Entra ID

**Status:** failed
**Duration:** 10s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-3-explore-overview: Explore Overview and Manage tenants

**Status:** failed
**Duration:** 7s

**Drift Issues:**
- missing_element: Element not found...

### ❌ step-4-navigate-to-users: Navigate to Users management

**Status:** failed
**Duration:** 11s

**Drift Issues:**
- missing_element: This agent does not have Playwright MCP or browser tools configured. Steps must ...

### ❌ step-5-create-user-basic-info: Fill basic user information

**Status:** failed
**Duration:** 7s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-6-configure-user-properties: Configure user properties

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-7-create-user: Create the user account

**Status:** failed
**Duration:** 5s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-8-verify-user-creation: Verify user creation

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-9-invite-external-user: Start external user invitation

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-10-configure-external-user: Configure external user invitation

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-11-send-invitation: Send external user invitation

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-12-navigate-to-groups: Navigate to Groups management

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-13-create-new-group: Create security group

**Status:** failed
**Duration:** 3s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-14-add-group-owners-members: Add group owners and members

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...

### ❌ step-15-deploy-group: Deploy and verify group

**Status:** failed
**Duration:** 4s

**Drift Issues:**
- missing_element: No Playwright MCP or browser tools available in this session...
