---
title: "Reinforcement Learning on Competitive Pokemon Battle"
subtitle: "Training deep reinforcement learning agents to master the complexities of Pokemon Showdown battles."
status: "ongoing"
members:
  - "Supervisor"
  - "Co-supervisor"
repo: "https://github.com/ThapanapongRukkanchanunt/pokemon-rl"

publications:
  - title: "Self-Play Deep Reinforcement Learning for Competitive Pokemon Battles"
    authors: ["Thapanapong Rukkanchanunt", "Jakramate Bootkrajang"]
    venue: "Special Interest Group Working Paper"
    year: 2026
    url: "#"
---

## Overview
Competitive Pokemon battles present a unique and challenging domain for Reinforcement Learning (RL) agents. Unlike chess or Go, Pokemon is characterized by **imperfect information**, **massive state and action spaces**, **stochasticity (RNG)**, and complex **meta-game dynamics** (team building, synergies, and counters).

In this project, we develop intelligent agents capable of playing competitive singles battles (Generation 8/9 format) on the **Pokemon Showdown** platform.

---

## Key Challenges

1. **Imperfect Information (Fog of War)**: Players do not know the opponent's full team sets (moves, items, abilities, EVs/IVs) until they are revealed during the battle.
2. **Huge Action Space**: At any turn, a player can choose to use one of four moves or switch to one of up to five remaining team members. Furthermore, battle decisions must account for the opponent's simultaneous choices.
3. **Complex State Representation**: The state consists of active Pokemon stats, boosts, status conditions, hazard layers (stealth rock, spikes), weather, and remaining team composition.

---

## Methodology

Our research leverages several modern RL techniques:

* **Environment Integration**: We interface with the open-source Pokemon Showdown simulator using custom wrappers compatible with the Gymnasium API (e.g. leveraging Pokemon-Showdown-Client APIs).
* **Feature Representation**: We represent the battle state as a structured vector including numerical representations of active Pokemon, health percentages, type match-ups, and opponent sets tracker.
* **Deep RL Algorithms**: We train agents using **Proximal Policy Optimization (PPO)** and **Deep Q-Networks (DQN)** with self-play to allow the agent to continuously learn against evolving strategies.
