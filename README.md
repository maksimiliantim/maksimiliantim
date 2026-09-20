<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/maksimiliantim/maksimiliantim/main/dark.svg">
  <img alt="Maksim Timoshchuk — Quantitative ML Engineer" src="https://raw.githubusercontent.com/maksimiliantim/maksimiliantim/main/light.svg" width="100%">
</picture>

<p align="center">
  <a href="mailto:timoshchuk-2002@mail.ru">
    <img src="https://img.shields.io/badge/Email-timoshchuk--2002%40mail.ru-0d1117?style=flat-square&logo=gmail&logoColor=EA4335&labelColor=161b22" alt="Email"/>
  </a>
  &nbsp;
  <a href="https://t.me/maksim_tshchk">
    <img src="https://img.shields.io/badge/Telegram-%40maksim__tshchk-0d1117?style=flat-square&logo=telegram&logoColor=26A5E4&labelColor=161b22" alt="Telegram"/>
  </a>
  &nbsp;
  <a href="https://github.com/maksimiliantim">
    <img src="https://img.shields.io/badge/GitHub-maksimiliantim-0d1117?style=flat-square&logo=github&logoColor=white&labelColor=161b22" alt="GitHub"/>
  </a>
</p>

---

## About

B.Sc. Statistics, MIREA · M.Sc. Machine Learning and Data Analysis, Moscow Aviation Institute (2026)

At a private investment fund: build classification, regression, and text-analysis ML pipelines in Python on tick-level market databases (CME crude oil options and futures); research data-driven and algorithmic trading strategies against market microstructure data; explore reinforcement learning approaches to strategy optimization. Separately, built an OVX-style implied volatility pipeline over DataBento feeds and a physics-informed neural network surrogate for aerodynamic flow simulation.

**Stack:** Python · C++ · PyTorch · SQL/PostgreSQL · CUDA · scikit-learn · XGBoost · Docker  
**Domain:** time series · statistical modeling · quantitative finance · deep learning · scientific ML

---

## Tech Stack

**Languages & Data**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=c%2B%2B&logoColor=white)
![SQL](https://img.shields.io/badge/PostgreSQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=flat-square&logoColor=white)
![Plotly](https://img.shields.io/badge/Plotly-3F4F75?style=flat-square&logo=plotly&logoColor=white)

**Machine Learning & Deep Learning**

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![XGBoost](https://img.shields.io/badge/XGBoost-017CEE?style=flat-square&logoColor=white)
![CUDA](https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white)
![Gymnasium](https://img.shields.io/badge/Gymnasium_RL-0064a5?style=flat-square&logoColor=white)

**Statistics & Quantitative Finance**

![Mathematical Statistics](https://img.shields.io/badge/Mathematical_Statistics-0ea5e9?style=flat-square&logoColor=white)
![Time Series](https://img.shields.io/badge/Time_Series_Forecasting-7c3aed?style=flat-square&logoColor=white)
![DataBento](https://img.shields.io/badge/DataBento-0f172a?style=flat-square&logoColor=white)
![CME Data](https://img.shields.io/badge/CME_Market_Data-003087?style=flat-square&logoColor=white)

**Infrastructure**

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)

---

## Featured Projects

### RL Execution Agent for Futures Trading
> Reinforcement Learning · Market Microstructure · CME

Trained a PPO agent to optimize order execution on CME crude oil futures, minimizing slippage against a VWAP benchmark. State space encodes order book imbalance, time-of-day, remaining inventory, and short-term momentum; reward penalizes adverse price impact and rewards fill quality relative to arrival price. Backtested in a simulated limit order book environment built on historical tick data; compared against TWAP and aggressive market-order baselines.

`Python` `PyTorch` `Gymnasium` `PPO` `CME Tick Data` `Order Book`

---

### Gradient Boosting Signal Pipeline for Intraday Price Prediction
> Quantitative ML · Feature Engineering · Time Series

XGBoost classifier trained to predict short-term directional price moves on futures tick data. Feature set covers multi-scale momentum, rolling volume imbalance, bid-ask spread dynamics, and lagged return autocorrelation. Handled non-stationarity via walk-forward cross-validation with expanding windows; calibrated predicted probabilities to produce reliable signal confidence scores for downstream position sizing.

`Python` `XGBoost` `scikit-learn` `Walk-Forward CV` `Tick Data` `Signal Research`

---

### Time Series Regime Detection and Forecasting
> Statistical Modeling · Hidden Markov Models · Forecasting

Implemented a Hidden Markov Model to identify latent market regimes (trending, mean-reverting, high-volatility) from daily return and volume features. Regime labels used as conditioning input to a regime-specific ARIMA/GARCH forecasting stack. Evaluated on out-of-sample log-likelihood and volatility forecast accuracy; HMM-conditioned models outperformed unconditional baselines across regime transitions.

`Python` `hmmlearn` `statsmodels` `GARCH` `ARIMA` `Regime Switching`

---

### OVX-Style Implied Volatility Pipeline
> Quantitative Data Engineering · Options Pricing · Time Series

End-to-end pipeline implementing CBOE OVX methodology on CME WTI crude oil options and futures chains ingested via DataBento. Selects near-term and next-term contract months, applies model-free variance estimation across the full options strike surface, handles expiry alignment and forward price derivation from the futures term structure, and outputs a 30-day forward-looking implied volatility index. Focus on data integrity, reproducible calculation steps, and handling gaps in sparse strike grids.

`Python` `DataBento` `SQL` `CME Data` `Options Math` `Volatility Surface`

---

<details>
<summary>Other work</summary>

### Neural Network Surrogate for Wing Aerodynamics
> Scientific ML · Physics-Informed Networks · CFD Surrogate

Trained a neural network to approximate steady-state flow fields around a wing cross-section, replacing iterative numerical solvers with a learned surrogate. Loss combines a data-fidelity term with PDE residual enforcement to respect physical boundary conditions. Core challenge: generalization to unseen geometries without rerunning the full simulation.

`Python` `PyTorch` `Physics-Informed NN` `PDE Residual Loss`

</details>

---

## GitHub Statistics

<p align="center">
  <img height="160" src="https://github-readme-stats.vercel.app/api?username=maksimiliantim&theme=github_dark&hide_border=true&show_icons=true&count_private=true&bg_color=0d1117&title_color=00d9ff&icon_color=7c3aed&text_color=94a3b8&ring_color=00d9ff" alt="GitHub Stats"/>
  &nbsp;
  <img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=maksimiliantim&theme=github_dark&hide_border=true&layout=compact&bg_color=0d1117&title_color=00d9ff&text_color=94a3b8&langs_count=8" alt="Top Languages"/>
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com?user=maksimiliantim&theme=dark&hide_border=true&stroke=00000000&background=0D1117&ring=00D9FF&fire=7C3AED&currStreakLabel=00D9FF&sideLabels=94A3B8&dates=94A3B8&currStreakNum=E6EDF3&sideNums=E6EDF3" alt="GitHub Streak"/>
</p>

<p align="center">
  <img width="96%" src="https://github-readme-activity-graph.vercel.app/graph?username=maksimiliantim&theme=github-compact&bg_color=0d1117&color=00d9ff&line=7c3aed&point=60a5fa&area=true&area_color=7c3aed&hide_border=true" alt="Contribution Activity"/>
</p>

---

<details>
<summary><strong>Setup & Deployment</strong></summary>

### Steps

1. On GitHub, create a **new public repository** named exactly `maksimiliantim` (same as your username).
2. Upload `README.md`, `dark.svg`, and `light.svg` to the root of that repository.
3. The profile appears automatically on your GitHub profile page.

### Values to replace

| Placeholder | Replace with |
|---|---|
| `YOUR_LINKEDIN_URL` | Your LinkedIn profile URL, e.g. `https://linkedin.com/in/your-handle` |

All other URLs already contain your username `maksimiliantim` — no changes needed.

### Services used

| Service | Purpose |
|---|---|
| [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) | Stats cards and top languages |
| [streak-stats](https://github.com/DenverCoder1/github-readme-streak-stats) | Contribution streak widget |
| [github-readme-activity-graph](https://github.com/Ashutosh00710/github-readme-activity-graph) | Activity graph |
| [shields.io](https://shields.io) | Tech stack and contact badges |

All services are free and publicly maintained. Stats update automatically on each GitHub visit.

</details>
