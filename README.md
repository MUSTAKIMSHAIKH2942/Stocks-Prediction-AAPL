# Stocks Prediction - AAPL

This project performs a detailed time series analysis and forecasting for Apple Inc. (AAPL) stock data. The analysis includes data preparation, exploratory data analysis, time series decomposition, stationarity testing, forecasting model development, and model validation.

## Project Structure

- `time_series_analysis.py`: Main script containing all the analysis steps.
- `historical_stock_prices.csv`: CSV file with historical stock price data (downloaded automatically by the script).

## Analysis Steps

1. **Data Preparation and Exploration**
    - Download historical stock data using the `yfinance` library.
    - Clean and preprocess the data.
    - Conduct exploratory data analysis (EDA) to visualize the data and calculate summary statistics.

2. **Time Series Decomposition**
    - Apply decomposition techniques to identify trends, seasonality, and residuals.

3. **Stationarity Testing and Transformation**
    - Test for stationarity using the Augmented Dickey-Fuller (ADF) test.
    - Apply necessary transformations to achieve stationarity.

4. **Forecasting Model Development**
    - Build and validate an ARIMA model.
    - Forecast future stock prices and plot the results.

5. **Model Validation**
    - Analyze the residuals and calculate the Root Mean Squared Error (RMSE).

## How to Run the Project

1. Clone the repository:

    ```sh
    git clone https://github.com/MUSTAKIMSHAIKH2942/Stocks-Prediction-AAPL.git
    cd Stocks-Prediction-AAPL
    ```

2. Install the required libraries:

    ```sh
    pip install pandas numpy matplotlib seaborn statsmodels scikit-learn yfinance
    ```

3. Run the script:

    ```sh
    python time_series_analysis.py
    ```

