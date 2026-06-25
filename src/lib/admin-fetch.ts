import { siteFetch } from '@/lib/siteFetch'

'use client';

export async function adminFetch(
  input: string,
  init: RequestInit = {}
): Promise<Response> {
  const extraHeaders: Record<string, string> = {
    'x-site-slug': 'ijipal'
  };

  return siteFetch(input, {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      ...extraHeaders,
    },
  });
}

