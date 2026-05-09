# Agent Compass

## Goal

- Maintain speed without sacrificing reliability.
- Prefer small, verifiable changes.

## Working Rules

- Read context before editing.
- Preserve existing behavior unless explicitly requested.
- Prefer className/CSS over inline style attributes in JSX.
- Run local validation for changed scope.

## Validation Order

- `npm run typecheck`
- `npm run test:run`
- `npm run build`

## Change Strategy

- Keep diffs minimal and focused.
- Do not refactor unrelated files.
- If a task is unclear, implement safest incremental version first.

## Notes

- For UI fixes: prioritize accessibility, then consistency, then visual polish.
- For workflow changes: ensure no conflict with `.github/workflows/deploy.yml`.
