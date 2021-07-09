
[![Build Status](https://travis-ci.com/sylk80/tictactoekata.svg?branch=master)](https://travis-ci.com/sylk80/tictactoekata)|
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoekata&metric=alert_status)](https://sonarcloud.io/dashboard?id=sylk80_tictactoekata)|
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoekata&metric=bugs)](https://sonarcloud.io/dashboard?id=sylk80_tictactoekata)|
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoekata&metric=code_smells)](https://sonarcloud.io/dashboard?id=sylk80_tictactoekata)|
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoekata&metric=coverage)](https://sonarcloud.io/dashboard?id=sylk80_tictactoekata)|


:heavy_check_mark: / :green_circle:  - green test

:x: / :red_circle: - failing test

:dart: - goal

:heavy_plus_sign: - items

:hammer_and_pick: - refactor

:warning: - TD?

#Tic-tac-toe kata

:dart: Guardians

:heavy_plus_sign: Player X and Player 0 have to be present - :x:, :heavy_check_mark:

:heavy_plus_sign: empty table has to be initialized  - :x:, :heavy_check_mark:, :hammer_and_pick:

:heavy_plus_sign: Minimum 5 rounds have to be played - :x:, :heavy_check_mark:, :hammer_and_pick:

:heavy_plus_sign: X starts - :x:, :heavy_check_mark:, :hammer_and_pick:


:dart: Boundaries

:heavy_plus_sign: Start with empty board  - :heavy_check_mark:, :hammer_and_pick:

:heavy_plus_sign: Players place randomly - :x:, :heavy_check_mark:, :hammer_and_pick:

:heavy_plus_sign: Vertical win recognized - :x:, :heavy_check_mark:,

:heavy_plus_sign: Horizontal win recognized  - :x:, :heavy_check_mark:, :hammer_and_pick:

:heavy_plus_sign: Diagonal win recognized :x:, :heavy_check_mark:,

:heavy_plus_sign: Draw recognized   - :x:, :heavy_check_mark:, :hammer_and_pick:


:dart: Algorithm

:heavy_plus_sign: 2 seconds timeout between rounds  - :x:, :heavy_check_mark:, :hammer_and_pick:


:warning: Need to learn how to test async events

:warning: The test don't cover every event, since the events are random

:warning: Create a test event generator, which can generate all the possible wining combinations