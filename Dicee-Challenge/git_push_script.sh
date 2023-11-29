#!/bin/bash

# Check if a commit message argument is provided
if [ $# -eq 0 ]; then
    echo "Please provide a commit message."
    exit 1
fi

# Add all changes to the staging area
git add .

# Commit changes with the provided commit message
commit_message="$1"
git commit -m "$commit_message"

# Push the committed changes to the remote repository
git push
