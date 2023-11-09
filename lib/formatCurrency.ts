const USD_CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatUSDCurrency(number: number) {
  return USD_CURRENCY_FORMATTER.format(number);
}

const KES_CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "KES",
  style: "currency",
});

export function formatKESCurrency(number: number) {
  return USD_CURRENCY_FORMATTER.format(number);
}
