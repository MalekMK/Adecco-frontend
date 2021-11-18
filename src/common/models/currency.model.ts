export interface CurrencyData {
  time: Time | null;
  disclaimer: string;
  bpi: Bpi | null;
}

export interface CurrencyHistory {
  bpi: any;
  disclaimer: string;
  time:  Time | null;
}

interface Bpi {
  USD: Currency;
  EUR?: Currency;
  CNY?: Currency;
  JPY?: Currency;
  PLN?: Currency;
}

interface Time {
  updated: string;
  updatedISO: string;
  updateduk?: string;
}

interface Currency {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}
