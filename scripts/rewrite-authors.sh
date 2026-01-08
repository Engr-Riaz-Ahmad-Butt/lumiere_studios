#!/bin/sh

# Rewrite commit author/committer info for unwanted contributors
# This script is used by `git filter-branch --env-filter`.

# Replace GPT Engineer bot commits
if [ "$GIT_AUTHOR_EMAIL" = "159125892+gpt-engineer-app[bot]@users.noreply.github.com" ]; then
    export GIT_AUTHOR_NAME="Engr Riaz Ahmad Butt"
    export GIT_AUTHOR_EMAIL="Engr-Riaz-Ahmad-Butt@users.noreply.github.com"
fi
if [ "$GIT_COMMITTER_EMAIL" = "159125892+gpt-engineer-app[bot]@users.noreply.github.com" ]; then
    export GIT_COMMITTER_NAME="Engr Riaz Ahmad Butt"
    export GIT_COMMITTER_EMAIL="Engr-Riaz-Ahmad-Butt@users.noreply.github.com"
fi

# Replace Lovable bot commits
if [ "$GIT_AUTHOR_EMAIL" = "noreply@lovable.dev" ]; then
    export GIT_AUTHOR_NAME="Engr Riaz Ahmad Butt"
    export GIT_AUTHOR_EMAIL="Engr-Riaz-Ahmad-Butt@users.noreply.github.com"
fi
if [ "$GIT_COMMITTER_EMAIL" = "noreply@lovable.dev" ]; then
    export GIT_COMMITTER_NAME="Engr Riaz Ahmad Butt"
    export GIT_COMMITTER_EMAIL="Engr-Riaz-Ahmad-Butt@users.noreply.github.com"
fi
