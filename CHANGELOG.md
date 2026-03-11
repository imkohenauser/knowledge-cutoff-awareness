# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- **Skill routing and instructions**: New content to improve when agents invoke this skill.
  - **When to Use / When NOT to Use**: Clear criteria and example queries so the skill is selected for current-time questions and not for fixed historical dates.
  - **Agent Instructions**: Steps and guidelines (retrieve via script, prefer ISO 8601, do not assume the date).
  - **Examples for Agents**: Command examples with sample outputs (today, tomorrow, -1w, --human).
  - **Reliability Notes**: NTP sync and timezone configuration for critical use.
- **Progressive disclosure**: Moved the above sections to `references/examples.md`; `SKILL.md` links to it so the main file stays lightweight and reference material loads on demand.

### Changed
- **Repository structure**: Reorganized for clearer separation of concerns and [skills.sh](https://skills.sh) compatibility.
  - Skill content moved from `.agent/skills/knowledge-cutoff-awareness/` to `skills/knowledge-cutoff-awareness/`.
  - Installer moved from `bin/install.js` to `cli/install.js`.
  - Evaluation docs moved from `performance/` to `research/`.
- **SKILL.md frontmatter**: Strengthened `description` for better skill routing—now emphasizes "anchor the agent in present reality", trigger phrases (today, current time, recent events, newer than training data), and preventing knowledge-cutoff errors and fictionalization of facts.
- `package.json`: `bin` now points to `./cli/install.js`; `files` set to `["skills", "cli", "README.md"]`; removed `main` entry.
- README and research docs: paths updated to the new layout (e.g. `skills/`, `research/`). Direct skill path example now uses `tree/main/skills/knowledge-cutoff-awareness`.

### Removed
- `index.js` (library-style export). Distribution is installer-only; use `npx knowledge-cutoff-awareness-install` or `npx skills add` to install the skill.

## [1.1.0] - 2026-03-08
### Added
- Support for [Vercel Skills CLI (skills.sh)](https://skills.sh): install with `npx skills add imkohenauser/knowledge-cutoff-awareness`.
- README section "Via Skills CLI (skills.sh)" with install examples and options (`-g`, `-a cursor`, direct tree path).

### Changed
- README References: added https://skills.sh. Opening line now mentions Vercel Skills CLI (skills.sh) alongside Antigravity and Gemini CLI.

## [1.0.1] - 2026-02-20
### Added
- Added support for installation via `gemini skills install` for seamless integration into Gemini CLI environments.
- Added `CHANGELOG.md` to track project history.
- Added a Shebang (`#!/usr/bin/env node`) to `scripts/get_date.js` to ensure the file is easily executable.

### Changed
- Updated the script execution path in `SKILL.md` from an absolute `.agent/skills/...` path to a relative `scripts/...` path. This enhances portability, allowing the skill to be invoked regardless of whether it's installed at the project scope or the user scope (e.g., global installation mapped via the CLI).
- Updated `README.md` to reflect that this is a skill for both "Google Antigravity IDE" and "Gemini CLI".

### Fixed
- Cleaned up `.DS_Store` files that were incorrectly tracked in the repository.

## [1.0.0] - 2026-02-16
### Added
- Initial release of knowledge-cutoff-awareness.
- Base Agent Skill functionality utilizing Node.js for cross-platform date retrieval and manipulation.
- Included `get_date.js` wrapper script to provide ISO 8601 formatting, human-readable formatting, and relative date calculation (`+1d`, `-2w`, `yesterday`, etc.).
- Performance documentation showcasing the efficacy of current time awareness for LLMs facing knowledge cutoffs.
