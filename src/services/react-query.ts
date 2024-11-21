'use client';

import { QueryClient } from '@tanstack/react-query';

export const csrClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,         // 기본 staleTime
      retry: 0,                         // 기본 재시도 횟수
      refetchOnWindowFocus: false,      // 포커스 시 재요청 비활성화
    },
  },
});
