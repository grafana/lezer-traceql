# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-01-07

### Added
- Add CODEOWNERS file for `@grafana/oss-big-tent` team
- Add Renovate configuration for automated dependency updates
- Add `.nvmrc` file for consistent Node.js versioning (Node 24)

### Changed
- Bump to version 1.0.0 (stable release)
- Update Node.js version to 24 (via `.nvmrc`)
- Update CI and publish workflows to use `.nvmrc` for Node version
- Switch publish workflow from yarn to npm (`npm ci`, `npm run build`)
- Update `@lezer/lr` from ^1.4.2 to ^1.4.7
- Update `mocha` from 11.7.4 to 11.7.5
- Update `rollup` from ^4.52.4 to ^4.55.1

## [0.0.25] - 2025-09-19

### Changed
- Refactor NPM publish workflow for Trusted Publishing (#38)
- Modify NPM workflow to use Node.js 20

## [0.0.24] - 2025-09-03

### Added
- Add support for topk and bottomk 2nd level functions (#36)

## [0.0.23] - 2025-07-18

### Added
- Support syntax for compare function (#33)
- New features for TraceQL grammar (#32)

### Fixed
- Use fixed version for EndBug/version-check

## [0.0.22] - 2025-04-24

### Added
- Add support for structural operators (#29)

## [0.0.21] - 2025-04-02

### Changed
- Update grammar with new functions (#28)
- Update lezer to latest version

## [0.0.20] - 2024-10-17

### Added
- Support new TraceQL scopes (#26)

### Changed
- Update lezer

## [0.0.19] - 2024-10-03

### Changed
- Update intrinsic list (#22)

## [0.0.18] - 2024-06-21

### Fixed
- Export types so ESM env with moduleResolution bundler can find types (#18)

## [0.0.17] - 2024-05-22

### Added
- Add histogram to grammar
- Allow more than two quantiles (#21)

## [0.0.16] - 2024-03-07

### Added
- Show error message for invalid queries (#17)

### Fixed
- Fix `by` operator to support multiple fields (#16)

### Changed
- Improve README (#20)

## [0.0.15] - 2024-02-15

### Added
- Add syntax for metrics queries (#15)

## [0.0.14] - 2024-02-02

### Added
- Support backtick strings (#14)

## [0.0.13] - 2024-01-26

### Fixed
- Fix durations (#13)

## [0.0.12] - 2023-12-15

### Added
- Support special characters in identifiers (#11)

## [0.0.11] - 2023-11-08

### Added
- Allow quotes and escaping in tag names and values (#10, #9)

## [0.0.10] - 2023-11-03

### Added
- Support comments (#8)

## [0.0.9] - 2023-10-31

### Added
- Add statusMessage as intrinsic attribute (#7)

## [0.0.8] - 2023-10-24

### Added
- Add new operators (#6)

## [0.0.7] - 2023-10-12

### Added
- Support template variables (#5)

## [0.0.6] - 2023-09-18

### Added
- Support more queries (#4)

## [0.0.5] - 2023-08-30

### Changed
- Minor improvements to visualization tool (#3)

## [0.0.4] - 2023-08-14

### Fixed
- Fix node selection in tree (#2)
- Fix tree visualizer (#1)

## [0.0.3] - 2023-08-08

### Fixed
- Fix multiple span set support

## [0.0.2] - 2023-07-27

### Changed
- Reduce priority of And/Or in precedence
- Change tree-viz tool to load local package

## [0.0.1] - 2023-07-25

### Changed
- Simplify grammar to avoid nested SpansetExpression

## [0.0.0] - 2023-07-07

### Added
- Initial release
- TraceQL lezer grammar based on Tempo's expr.y
- Support for spanset pipelines using pipe
- Support for `by` and `select` operators
- Scalar filter support
- ScalarPipelineExpressionFilter
- String and identifier tokens with regex operators
- CI and publish-npm workflows
- Tests and documentation

