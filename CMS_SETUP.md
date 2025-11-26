# Decap CMS Setup Guide

This guide explains how to configure Decap CMS for the RoosterBots website content management.

## Overview

Decap CMS provides a visual editor at `/admin` for editing website content without needing git knowledge.

**Access the CMS:** `https://roosterbots.designbuildautomate.io/admin`

## Setup Steps

### 1. Create GitHub OAuth App

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **OAuth Apps** → **New OAuth App**
3. Fill in:
   - **Application name:** `RoosterBots CMS`
   - **Homepage URL:** `https://roosterbots.designbuildautomate.io`
   - **Authorization callback URL:** `https://roosterbots.designbuildautomate.io/api/callback`
4. Click **Register application**
5. Copy the **Client ID**
6. Click **Generate a new client secret** and copy it

### 2. Add Environment Variables

Add to your `.env` file (or Portainer stack environment):

```
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
```

### 3. Redeploy

After adding the environment variables, redeploy the stack for changes to take effect.

## Using the CMS

### For Content Editors

1. Go to `https://roosterbots.designbuildautomate.io/admin`
2. Click **Login with GitHub**
3. Authorize the app (first time only)
4. Start editing!

### Available Content Types

| Collection | Description |
|------------|-------------|
| **Blog Posts** | Team news and updates |
| **Pages** | About, Donate, and Home pages |
| **Store Products** | Merchandise items with prices |
| **Site Settings** | Site title, description, etc. |

### Workflow

1. **Edit** — Make changes in the visual editor
2. **Save** — Creates a draft (not live yet)
3. **Publish** — Commits changes to GitHub
4. **Auto-Deploy** — Site rebuilds automatically (if CI/CD configured)

## Permissions

Users must have **write access** to the `jtalborough/roosterbots-content` repository to use the CMS.

To add editors:
1. Go to [repo settings](https://github.com/jtalborough/roosterbots-content/settings/access)
2. Click **Add people**
3. Add their GitHub username with **Write** role

## Troubleshooting

### "Unable to authenticate"
- Verify GitHub OAuth credentials are correct
- Check callback URL matches exactly
- Ensure API server is running

### "Permission denied"
- User needs write access to the content repository

### Changes not appearing on site
- Check if the change was published (not just saved)
- Verify CI/CD pipeline ran successfully
- May need to manually trigger rebuild

## Technical Details

- **CMS:** [Decap CMS](https://decapcms.org) v3.x
- **Backend:** GitHub API
- **Auth:** Custom OAuth via Express API
- **Config:** `static/admin/config.yml`
