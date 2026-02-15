# knowledge-cutoff-awareness

A lightweight skill set to give AI agents "current time awareness".

## Features
- **Cross-Platform Support**: Works consistently on macOS, Linux, and Windows using a Node.js-based script.
- **Unified Date Calculation**: Provides simple syntax for date manipulation (e.g., `+1d`, `-1w`) across all operating systems.
- **Agent Optimization**: Helps LLMs accurately grasp the current system time, mitigating knowledge cutoff limitations.
- **Simple Integration**: Just place it under `.agent/skills` and it's ready to use.

## Installation

### Via npm (Recommended)

Run the following commands in your project's root directory:

```bash
npm install git+https://github.com/imkohenauser/knowledge-cutoff-awareness.git
npx knowledge-cutoff-awareness-install
```

This will install the skill into `.agent/skills/knowledge-cutoff-awareness`.

### Via Git Clone

You can also clone the repository directly into your skills directory:

```bash
mkdir -p .agent/skills
git clone https://github.com/imkohenauser/knowledge-cutoff-awareness.git .agent/skills/knowledge-cutoff-awareness
```

## Usage

Once installed, the agent will automatically recognize this skill (if the `.agent/skills` path is configured).
See [SKILL.md](./.agent/skills/knowledge-cutoff-awareness/SKILL.md) for details.
