import ApolloClient from 'apollo-client';
import { CookieAttributes } from 'js-cookie';

import './vue';
import './nuxt';

export interface ApolloHelpers {
  onLogin(
    token: string,
    apolloClient?: ApolloClient<any>,
    tokenExpires?: number,
    cookieAttributes?: CookieAttributes
  ): Promise<void>;
  onLogout(apolloClient?: ApolloClient<any>): Promise<void>;
  getToken(tokenName?: string): string;
}
