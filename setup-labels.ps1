# ============================================================
# Hexabot — Label taxonomy setup
# Usage: .\setup-labels.ps1
# Requires: gh CLI authenticated
# ============================================================

$REPO = "Mathieu-CTL/Hexabot"

Write-Host ">>> Removing default labels to replace..."
$toDelete = @("bug", "enhancement", "documentation", "question", "wontfix", "invalid")
foreach ($label in $toDelete) {
    gh label delete $label --repo $REPO --yes 2>$null
    Write-Host "  Deleted: $label"
}

Write-Host ""
Write-Host ">>> Creating type/... labels"
gh label create "type/bug"      --color "E11D48" --description "Something isn't working"              --repo $REPO
gh label create "type/feat"     --color "7C3AED" --description "New feature or request"               --repo $REPO
gh label create "type/chore"    --color "0D9488" --description "Tooling, CI/CD, dependencies"         --repo $REPO
gh label create "type/docs"     --color "0EA5E9" --description "Documentation only"                   --repo $REPO
gh label create "type/refactor" --color "F59E0B" --description "Restructuring existing code"          --repo $REPO
gh label create "type/security" --color "991B1B" --description "Vulnerabilities, sensitive data"      --repo $REPO
gh label create "type/test"     --color "6366F1" --description "Adding or updating tests"             --repo $REPO

Write-Host ""
Write-Host ">>> Creating priority/... labels"
gh label create "priority/critical" --color "B60205" --description "Blocking, must fix immediately"   --repo $REPO
gh label create "priority/high"     --color "E4480F" --description "Next sprint"                      --repo $REPO
gh label create "priority/medium"   --color "F9A826" --description "Important but not urgent"         --repo $REPO
gh label create "priority/low"      --color "A8D1F0" --description "Nice to have"                     --repo $REPO

Write-Host ""
Write-Host ">>> Creating status/... labels"
gh label create "status/triage"        --color "FEF08A" --description "Not yet assigned or categorized" --repo $REPO
gh label create "status/in-progress"   --color "86EFAC" --description "Currently being worked on"       --repo $REPO
gh label create "status/needs-review"  --color "66F638" --description "Awaiting code review"            --repo $REPO
gh label create "status/blocked"       --color "6B7280" --description "Blocked by another issue"        --repo $REPO
gh label create "status/wontfix"       --color "CCCCCC" --description "This will not be worked on"      --repo $REPO

Write-Host ""
Write-Host ">>> Creating component/... labels"
gh label create "component/api"      --color "1D4ED8" --description "NestJS backend"           --repo $REPO
gh label create "component/frontend" --color "2563EB" --description "Next.js admin panel"      --repo $REPO
gh label create "component/widget"   --color "3B82F6" --description "Embeddable chat widget"   --repo $REPO
gh label create "component/docker"   --color "60A5FA" --description "Infrastructure / compose" --repo $REPO

Write-Host ""
Write-Host "Done! Verification..."
gh label list --repo $REPO