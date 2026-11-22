import { APIRequestContext } from '@playwright/test';

export class ApiHelper {

  constructor(private apiContext: APIRequestContext) {}

  async getTransaction(transactionId: string) {

    const response = await this.apiContext.get(
      `/api/transactions/${transactionId}`
    );

    return await response.json();
  }

  async getSummary() {

    const response = await this.apiContext.get(
      '/api/summary'
    );

    return await response.json();
  }

  async retryTransaction(transactionId: string) {

    const response = await this.apiContext.post(
      `/api/retry/${transactionId}`
    );

    return await response.json();
  }

}