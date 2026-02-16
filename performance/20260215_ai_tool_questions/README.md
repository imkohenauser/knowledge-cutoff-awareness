---
title: Performance Comparison Summary
date: 2026-02-15
question_en: What AI tools do you recommend?
question_ja: おすすめのAIツールは？
---

# Performance Comparison Summary

## Test Conditions

| # | File | Language | Environment | Model |
|---|------|----------|-------------|-------|
| 1 | [`en_default.md`](./en_default.md) | EN | No KCA | Gemini 3 Pro High |
| 2 | [`en_kca.md`](./en_kca.md) | EN | KCA installed | Gemini 3 Pro High |
| 3 | [`ja_default.md`](./ja_default.md) | JA | No KCA | Gemini 3 Pro High |
| 4 | [`ja_kca.md`](./ja_kca.md) | JA | KCA installed | Gemini 3 Pro High |

## Key Differences

| Aspect | Default (No KCA) | KCA Installed |
|--------|-------------------|---------------|
| **Information freshness** | Answers based on outdated training data (GPT-4o, Claude 3.5 Sonnet, etc.) | Performs web search and reflects 2026 latest info (o3, GPT-5.1, etc.) |
| **Reasoning process** | Answers immediately from internal knowledge | Recognizes cutoff -> checks skill -> web search -> organizes response |
| **Answer accuracy** | Limited to training data snapshot | Real-time web info with cited sources |
| **Thinking time** | ~2-6s | ~5s + web search + ~1-2s |
| **Trend awareness** | None | Identifies trends like "Agentic AI" and autonomous agents |

## Conclusion

With KCA (Knowledge Cutoff Awareness) installed, the AI recognizes its own knowledge limitations and compensates by searching the web for up-to-date information. This results in significantly improved freshness and accuracy of responses.
