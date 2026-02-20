# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
