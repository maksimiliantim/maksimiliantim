<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/maksimiliantim/maksimiliantim/main/dark.svg">
  <img alt="Maksim Timoshchuk — Quantitative ML Engineer" src="https://raw.githubusercontent.com/maksimiliantim/maksimiliantim/main/light.svg" width="100%">
</picture>

<p align="center">
  <a href="mailto:timmmaksim01@gmail.com">
    <img src="https://img.shields.io/badge/timmmaksim01%40gmail.com-0d1117?style=flat-square&logo=maildotru&logoColor=8b949e&labelColor=161b22" alt="Email"/>
  </a>
  &nbsp;
  <a href="https://t.me/maksim_tshchk">
    <img src="https://img.shields.io/badge/%40maksim__tshchk-0d1117?style=flat-square&logo=telegram&logoColor=8b949e&labelColor=161b22" alt="Telegram"/>
  </a>
</p>

---

## About

B.Sc. Statistics, MIREA · M.Sc. Machine Learning and Data Analysis, Moscow Aviation Institute (2026)

At a private investment fund: build classification, regression, and text-analysis ML pipelines in Python on tick-level market databases (CME crude oil options and futures); research data-driven and algorithmic trading strategies against market microstructure data; explore reinforcement learning approaches to strategy optimization. Separately, built an OVX-style implied volatility pipeline over DataBento feeds and a physics-informed neural network surrogate for aerodynamic flow simulation.

**Focus:** time series · statistical modeling · quantitative finance · deep learning · scientific ML

---

## Stack

**Languages & data**

![Python](https://img.shields.io/badge/Python-0d1117?style=flat-square&logo=python&logoColor=4B8BBE&labelColor=161b22)
![C++](https://img.shields.io/badge/C++-0d1117?style=flat-square&logo=cplusplus&logoColor=649AD2&labelColor=161b22)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-0d1117?style=flat-square&logo=postgresql&logoColor=7BA7CE&labelColor=161b22)
![NumPy](https://img.shields.io/badge/NumPy-0d1117?style=flat-square&logo=numpy&logoColor=8CB4D8&labelColor=161b22)
![pandas](https://img.shields.io/badge/pandas-0d1117?style=flat-square&logo=pandas&logoColor=9D8CD8&labelColor=161b22)
![Plotly](https://img.shields.io/badge/Plotly-0d1117?style=flat-square&logo=plotly&logoColor=8FA3C8&labelColor=161b22)

**Machine learning**

![PyTorch](https://img.shields.io/badge/PyTorch-0d1117?style=flat-square&logo=pytorch&logoColor=E5804F&labelColor=161b22)
![TensorFlow](https://img.shields.io/badge/TensorFlow-0d1117?style=flat-square&logo=tensorflow&logoColor=E0A052&labelColor=161b22)
![scikit-learn](https://img.shields.io/badge/scikit--learn-0d1117?style=flat-square&logo=scikitlearn&logoColor=E0A052&labelColor=161b22)
![XGBoost](https://img.shields.io/badge/XGBoost-0d1117?style=flat-square&labelColor=161b22)
![CUDA](https://img.shields.io/badge/CUDA-0d1117?style=flat-square&logo=nvidia&logoColor=9DBF6B&labelColor=161b22)
![Gymnasium](https://img.shields.io/badge/Gymnasium-0d1117?style=flat-square&labelColor=161b22)

**Quantitative**

![Mathematical statistics](https://img.shields.io/badge/mathematical_statistics-0d1117?style=flat-square&labelColor=161b22)
![Time series](https://img.shields.io/badge/time_series-0d1117?style=flat-square&labelColor=161b22)
![Options pricing](https://img.shields.io/badge/options_pricing-0d1117?style=flat-square&labelColor=161b22)
![DataBento](https://img.shields.io/badge/DataBento-0d1117?style=flat-square&labelColor=161b22)
![CME market data](https://img.shields.io/badge/CME_market_data-0d1117?style=flat-square&labelColor=161b22)

**Infrastructure**

![Git](https://img.shields.io/badge/Git-0d1117?style=flat-square&logo=git&logoColor=D88C6B&labelColor=161b22)
![Docker](https://img.shields.io/badge/Docker-0d1117?style=flat-square&logo=docker&logoColor=7BA7CE&labelColor=161b22)
![Linux](https://img.shields.io/badge/Linux-0d1117?style=flat-square&logo=linux&logoColor=D8C58C&labelColor=161b22)

---

## Selected work

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

## Activity

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/maksimiliantim/maksimiliantim/main/dist/stats-dark.svg">
  <img alt="Contribution activity, streaks, and language distribution" src="https://raw.githubusercontent.com/maksimiliantim/maksimiliantim/main/dist/stats-light.svg" width="100%">
</picture>

---

<details>
<summary><strong>How this profile is built</strong></summary>

| Path | Role |
|---|---|
| `dark.svg` / `light.svg` | Header, hand-written SVG, theme-switched via `<picture>` |
| `dist/stats-*.svg` | Contribution heatmap, streaks, language split — generated, not hotlinked |
| `scripts/render-stats.mjs` | Queries the GitHub GraphQL API and renders both themes |
| `.github/workflows/stats.yml` | Runs the renderer daily and commits any change |

The stats are rendered in-repo rather than fetched from a third-party widget host, so nothing can rate-limit or go offline. No secrets to configure — the workflow uses the built-in `GITHUB_TOKEN`.

Refresh manually: Actions → **stats** → Run workflow.

</details>
