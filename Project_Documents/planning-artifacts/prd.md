---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - docs/index.md
  - docs/project-overview.md
  - docs/architecture.md
workflowType: 'prd'
lastStep: 1
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 0
  projectDocs: 7
---

# Product Requirements Document - it-tools

**Author:** MasterDat
**Date:** 2026-01-02

---

## Executive Summary

### Vision

This PRD defines the addition of a new tool called "Custom Team Mentions" to the existing it-tools collection. The tool addresses a specific limitation in Microsoft Teams where users cannot @mention people by their aliases or nicknames - only by their formal display names. This utility will allow users to generate properly formatted @mentions with custom alias text while preserving the correct Microsoft Teams MRI (Mention Resource Identifier) for proper functionality.

### Problem Statement

Microsoft Teams users who work in close-knit teams often use informal names, nicknames, or aliases when referring to colleagues. However, Teams' @mention functionality only recognizes formal display names, making it impossible to @mention someone as "Johnny" instead of "John Smith" in a channel message. This creates friction in team communication where informal relationships exist but the platform enforces formal naming conventions.

### Solution

The "Custom Team Mentions" tool will:
1. Accept user input for custom alias names (space-separated for multiple names)
2. Accept a pasted Teams @mention template (containing the MRI ID)
3. Generate properly formatted HTML @mentions with custom display text but correct MRI IDs
4. Provide a "Copy" button to easily copy the generated mentions to clipboard
5. Provide a "Reset" button to clear inputs and start over
6. Handle error cases gracefully (empty inputs, missing template)

### What Makes This Special

**Targeted Utility:** This is a focused, practical tool that solves a real pain point for Microsoft Teams power users, community managers, and team leads who value informal communication while maintaining platform functionality.

**Leverages Existing Patterns:** As the 87th tool in the it-tools collection, it follows the established architecture pattern - self-contained Vue component with TypeScript, using Naive UI components, and integrating seamlessly with the existing tool discovery and navigation system.

**Low Complexity, High Value:** Simple text transformation that delivers immediate value with minimal implementation effort, making it an ideal addition to the developer utilities category.

## Project Classification

**Technical Type:** web_app (new tool for existing SPA)
**Domain:** general (productivity/developer utility)
**Complexity:** low
**Project Context:** Brownfield - extending existing it-tools system

### Integration Points

- **Location:** `src/tools/custom-team-mentions/` (new tool directory)
- **Pattern:** Follows existing tool structure (Vue component, optional service layer, translations)
- **UI Framework:** Naive UI components (consistent with existing tools)
- **Routing:** Auto-registered in tool discovery system
- **Language:** English only (initial launch)

---

## Success Criteria

### User Success

**Immediate Success Indicators:**
- User completes the entire workflow in **under 10 seconds**
- User understands the interface **without instructions** (self-evident design)
- User achieves the "aha moment" on **first use** (instant gratification)

**Emotional Success:**
- User feels **delight** from the clean, uncluttered Swiss-style interface
- User feels **empowered** by how simple it is (not overwhelmed)
- User feels **satisfied** when they see the "perfect" formatted output

**The "Aha!" Moment:**
- User types aliases → pastes Teams template → sees beautifully formatted output → clicks "Copy" → done
- **Zero friction, zero confusion**

**Completion Scenarios:**
- Single alias mention generated and copied in under 5 seconds
- Multiple alias mentions (3-5 names) generated and copied in under 10 seconds
- User returns to tool repeatedly because it's fast and pleasant to use

### Business Success

**Product Integration Success:**
- Tool is discoverable within it-tools collection (search, categories, featured)
- Maintains the high design and quality bar of existing 86 tools
- Receives positive feedback from developer community

**Adoption Metrics:**
- Tool appears in it-tools "New Tools" section
- Community engagement (stars, issues, contributions) indicates value
- Tool is referenced in external developer communities (Reddit, Dev.to, etc.)

**3-Month Success:**
- Tool is stable, bug-free, and performs as expected
- Design is recognized as exemplary within it-tools ecosystem
- Foundation laid for potential enhancements (history, multi-language)

### Technical Success

**Performance:**
- Instant transformation (no perceived lag, < 100ms processing time)
- Real-time preview updates as user types
- Responsive on all devices (mobile, tablet, desktop)

**Reliability:**
- Error handling is graceful and helpful (empty inputs, invalid template)
- Edge cases handled (special characters in names, malformed Teams mentions)
- No console errors or browser compatibility issues

**Code Quality:**
- Follows it-tools architecture patterns perfectly
- TypeScript types are complete and strict
- Component is self-contained and testable
- Code is clean, readable, and maintainable

**Accessibility:**
- Keyboard navigation works throughout (Tab, Enter, Escape)
- Screen reader announces states and actions
- Color contrast meets WCAG AA standards
- Touch targets are minimum 44px for mobile

### Measurable Outcomes

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Workflow Speed | < 10 seconds complete | Manual testing with stopwatch |
| First-Use Success | 100% task completion | User testing (5 participants) |
| Error Recovery | 100% graceful handling | Automated edge case testing |
| Code Coverage | > 80% | Vitest unit tests |
| Accessibility Score | AA compliance | Axe DevTools scan |
| Performance | < 100ms transformation | Lighthouse Performance score |
| Browser Support | Chrome, Firefox, Safari, Edge | Manual testing matrix |

---

## Product Scope

### MVP - Minimum Viable Product

**Core Features (Must Have):**
- **Two Clean Input Fields:**
  - Aliases input (text field for space-separated names)
  - Teams template input (text area for pasting @mention)
- **Real-Time Preview:**
  - Shows generated mentions as user types/pastes
  - Visual feedback when template is detected
- **Action Buttons:**
  - Copy button (primary, prominent, satisfying)
  - Reset button (secondary, clear)
- **Error Handling:**
  - Empty state indicators
  - Invalid template detection and guidance
- **Swiss-Style Design:**
  - Grid-based layout
  - Typography-focused (clean sans-serif)
  - Generous whitespace
  - Minimal color palette (black, white, accent)
  - Functional elegance

**Technical Requirements:**
- Vue 3 Composition API component
- TypeScript with strict types
- Naive UI components (consistent with it-tools)
- Client-side only (no backend needed)
- English language only

### Growth Features (Post-MVP)

**Enhanced Functionality:**
- History of recent generated mentions (localStorage)
- Bulk operations (generate for entire teams)
- Template library (save common team MRI templates)
- Export/import functionality

**UX Improvements:**
- Dark mode support
- Multi-language support (extend to it-tools' 9 languages)
- Keyboard shortcuts (Cmd/Ctrl+K to focus, Enter to copy)
- Animation polish (subtle micro-interactions)

**Integration:**
- Share to other platforms (Slack custom mentions, Discord)
- Browser extension for in-Teams usage
- API for programmatic access

### Vision (Future)

**Platform Expansion:**
- Standalone web app with more customization
- Mobile apps (iOS, Android) for on-the-go usage
- Desktop app (Electron/Tauri) for power users

**Advanced Features:**
- AI-powered alias suggestions
- Team roster integration (import from CSV, Azure AD)
- Collaboration features (share mention templates with teams)
- Analytics dashboard (usage patterns, popular aliases)

**Ecosystem:**
- Plugin system for custom mention formats
- Community template marketplace
- Integration with it-tools API for cross-tool workflows

---

## User Journeys

### Journey 1: Alex - Teams Community Manager Building Culture Through Informal Mentions

**Opening Scene:**

Alex is a community manager for a 50-person developer team on Microsoft Teams. The team has a fun, informal culture with nicknames like "Bear", "Sparky", "Jay", and "Tex". But when Alex tries to @mention people in channel announcements, Teams only recognizes formal names like "Michael Chen", "Sarah Johnson", "James Wilson" - completely killing the friendly vibe they've built.

It's 11 PM on a Tuesday, and Alex is drafting an announcement for the upcoming hackathon. She types "@Bear get your team ready!" but Teams autocorrects it to "@Michael Chen" - so formal, so wrong. She sighs, deletes the mention, and considers just typing the message without mentions at all.

**Rising Action:**

Frustrated, Alex Googles "Teams mention alias nickname" and finds it-tools. She clicks through to Custom Team Mentions. The interface is beautifully clean - just two fields and a preview area.

She types "Bear Sparky Jay" in the aliases field, then goes back to Teams, right-clicks on Michael Chen, and selects "Copy mention". She pastes the Teams @mention template into the second field.

**Climax:**

Instantly, the preview shows three beautifully formatted @mentions: @Bear, @Sparky, @Jay - all with the correct MRI IDs so they'll actually work in Teams. Alex clicks "Copy" - done. She pastes the mentions into her hackathon announcement: "@Bear @Sparky @Jay get your teams ready!"

When she hits send, the mentions work perfectly. The team channel lights up: "Love the nickname mentions!" "Finally feels like us!" "This is awesome!" The announcement gets 3x the usual engagement.

**Resolution:**

Six months later, Alex uses Custom Team Mentions weekly. She's shared it with other team leads in the organization, and it's become part of their community building toolkit. The tool takes what was a frustration (formal-only mentions) and turns it into a delight (informal, culture-building mentions).

**Key Moment:** That first successful paste - when "@Bear" actually worked in Teams - that's when Alex knew this tool was going to be part of her workflow forever.

**Time Saved:** What used to be a 5-minute workaround (manually typing "Bear (Michael Chen)") is now an 8-second workflow with better results.

### Journey Requirements Summary

This primary user journey reveals the following capability requirements:

- **Simple two-input workflow:** Aliases field + Teams template field
- **Real-time preview:** User sees output before copying
- **One-click copy:** Fast, frictionless action
- **Bulk processing:** Handle multiple names (3-5+) at once
- **Error resilience:** Graceful handling if Teams template is malformed
- **Swiss-style UI:** Clean, uncluttered, typography-focused design
- **Instant performance:** No perceived lag in transformation
- **Mobile support:** Alex sometimes works from phone

**Secondary journeys (not required for MVP but noted for future):**
- Power user with saved templates (history feature)
- Team lead generating mentions for entire roster (bulk operations)
- Developer using tool programmatically (API access)

---

## Web Application Specific Requirements

### Project-Type Overview

Custom Team Mentions is a client-side web utility tool - part of the it-tools collection of 86+ developer utilities. It runs entirely in the browser with no backend dependencies.

### Technical Architecture Considerations

**Component Structure:**
- Single Vue 3 SFC (`custom-team-mentions.vue`)
- Optional service layer for mention parsing logic
- Follows it-tools tool pattern: self-contained directory in `src/tools/`

**State Management:**
- Local component state (no Pinia store needed)
- Reactive inputs for aliases and Teams template
- Computed property for real-time preview generation

**Clipboard Integration:**
- Navigator Clipboard API for copy functionality
- Graceful fallback for browsers without clipboard support

### Browser Compatibility

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14+ | Full support |
| Edge | 90+ | Full support |

### Performance Requirements

- **Transformation Time:** < 100ms for up to 10 names
- **Preview Update:** Real-time (no debounce needed for text input)
- **Initial Load:** < 500ms component mount

### Implementation Considerations

**Key Questions Resolved:**
- **SPA or standalone:** Integrated tool in existing SPA
- **Browser support:** Modern browsers (ES2020+)
- **Real-time needed:** Yes - instant preview as user types
- **Accessibility:** Full keyboard navigation, screen reader support
- **Responsive:** Mobile-first, works on all screen sizes

---

## Functional Requirements

### Core Capabilities

#### FR-1: Alias Input
**The tool shall provide a text input field for entering user aliases.**

**Acceptance Criteria:**
- Input accepts space-separated names
- Supports up to 50 names in a single batch
- Trims whitespace automatically
- Handles special characters (hyphens, apostrophes, numbers)
- Clear placeholder text guides user: "e.g., Bear Sparky Jay"

#### FR-2: Teams Template Input
**The tool shall provide a text area for pasting Microsoft Teams @mention template.**

**Acceptance Criteria:**
- Accepts rich text/html paste from Teams
- Extracts MRI ID from pasted template using regex: `/mri="(.+?)"/`
- Shows visual feedback when valid MRI detected
- Clears template after successful copy (optional, user preference)
- Handles edge cases (multiple mentions, malformed HTML)

#### FR-3: Real-Time Preview
**The tool shall display a preview of generated @mentions as user types/pastes.**

**Acceptance Criteria:**
- Preview updates instantly on input change
- Shows each alias as a formatted mention badge
- Displays error message if template missing
- Shows "No aliases entered" message when input empty
- Highlights MRI extraction status (detected/not detected)

#### FR-4: Copy to Clipboard
**The tool shall provide a prominent Copy button to copy generated mentions.**

**Acceptance Criteria:**
- Button is primary action, visually prominent
- Copies HTML-formatted mentions to clipboard
- Shows success feedback: "Copied!" tooltip
- Button disabled if no mentions generated
- Keyboard shortcut: Ctrl/Cmd + Enter

#### FR-5: Reset Function
**The tool shall provide a Reset button to clear all inputs.**

**Acceptance Criteria:**
- Secondary action, visually distinct from Copy
- Clears both input fields
- Resets preview to initial state
- Optional: Confirmation dialog if mentions generated
- Keyboard shortcut: Esc

#### FR-6: Error Handling
**The tool shall gracefully handle error conditions.**

**Acceptance Criteria:**
- Shows inline error if template missing when aliases entered
- Shows inline error if MRI ID not found in template
- Shows inline error if special characters problematic
- Provides helpful guidance for each error type
- No console errors or browser crashes

### Input/Output Specifications

**Inputs:**
- Aliases: Space-separated string (1-50 names)
- Teams Template: HTML string containing `<mention>` tag with `mri` attribute

**Outputs:**
- Generated HTML: Array of formatted `<mention>` tags
- Clipboard Data: HTML format for Teams paste

---

## Non-Functional Requirements

### Performance

| Metric | Target | Measurement |
|--------|--------|-------------|
| Initial Load | < 500ms | Lighthouse Performance |
| Preview Update | < 50ms | Manual testing |
| Copy Action | < 100ms | Manual testing |
| Memory Usage | < 5MB | Chrome DevTools |

### Usability

| Metric | Target | Measurement |
|--------|--------|-------------|
| Task Completion Time | < 10 seconds | User testing (5 users) |
| First-Use Success Rate | 100% | User testing (5 users) |
| Error Recovery | 100% graceful | Manual testing |
| Learnability | No instructions needed | User testing |

### Swiss-Style Design Requirements

**Visual Design:**
- Grid-based layout with clear alignment
- Typography: Inter or system sans-serif, 16px base
- Generous whitespace (16px-24px gutters)
- Minimal color palette:
  - Primary: Black (#000000) for text
  - Secondary: Gray (#666666) for labels
  - Accent: Green (#18a058) for success states
  - Error: Red (#d03050) for errors
- No decorative elements (pure functional design)

**Interaction Design:**
- Instant feedback on all actions
- Subtle micro-interactions (button states, focus rings)
- No animations except functional transitions
- Loading states (if needed): minimal spinner

### Accessibility

| Standard | Level | Notes |
|----------|-------|-------|
| WCAG 2.1 | AA | Full compliance |
| Keyboard | Full | Tab, Enter, Esc navigation |
| Screen Reader | Full | ARIA labels, announcements |
| Touch Targets | 44px minimum | Mobile compliance |

### Security

- Client-side only (no data transmission)
- No persistent storage of user input
- Sanitizes all HTML output
- No XSS vulnerabilities

### Maintainability

- TypeScript strict mode enabled
- Component test coverage > 80%
- Code follows it-tools patterns
- Clear inline comments for complex logic

---

## Risks & Mitigations

### Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|------------|------------|
| Teams format changes | High | Low | Monitor for Teams updates, community feedback |
| Clipboard API not supported | Medium | Low | Fallback to manual copy button |
| Regex fails on edge cases | Medium | Low | Comprehensive test coverage |
| Browser compatibility | Low | Low | Modern browsers only, test matrix |

### Product Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|------------|------------|
| Low adoption | Medium | Medium | Feature in it-tools homepage |
| User confusion | Low | Medium | Clear placeholder text, examples |
| Limited use case | Medium | High | Add other platforms (Slack, Discord) later |

### Mitigation Strategies

- **Monitoring:** Track usage through it-tools analytics
- **Feedback:** Add feedback link in tool footer
- **Iteration:** Plan for post-MVP enhancements based on usage
- **Community:** Share in Teams communities for validation

---

## Assumptions & Dependencies

### Assumptions

- Users have access to Microsoft Teams
- Users can copy @mention templates from Teams
- Teams @mention format remains stable
- Modern browser environment (ES2020+)
- it-tools platform continues to be maintained

### Dependencies

- **External:** Microsoft Teams (for mention format)
- **Internal:** it-tools infrastructure (routing, discovery)
- **Technical:** Vue 3.3+, Naive UI 2.35+, TypeScript 5.2+

---

## Open Questions

| Question | Priority | Status |
|----------|----------|--------|
| Should we support Teams' new "friendly name" feature? | Low | Open |
| Add dark mode support from day 1? | Low | Deferred to post-MVP |
| Multi-language support timeline? | Low | English only for MVP |
| Browser extension for in-Teams usage? | Low | Future consideration |

---

## Appendix

### Glossary

- **MRI:** Mention Resource Identifier - Unique ID for Teams entities
- **Alias:** Nickname or informal name for a user
- **Swiss Style:** Design philosophy emphasizing minimalism, grid layouts, typography
- **it-tools:** Existing collection of 86 developer utilities

### References

- Microsoft Teams Documentation: https://docs.microsoft.com/en-us/microsoftteams/
- it-tools Repository: https://github.com/CorentinTh/it-tools
- Clipboard API: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API

