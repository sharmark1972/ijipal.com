export const getSiteSlugFromDomain = (): string => {
  // Server-side fallback
  if (typeof window === 'undefined') return 'ijipal';

  const hostname = window.location.hostname;
  const slug = hostname.split('.')[0];

  const validSites = ['ajoams', 'ajomait', 'ejoas', 'ijipal', 'ijarcm', 'wjiis', 'localhost'];
  return validSites.includes(slug) ? slug : 'ijipal';
};

export const siteFetch = async (
  url: string,
  options: RequestInit = {}
) => {
  const siteSlug = getSiteSlugFromDomain();

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'x-site-slug': siteSlug
    }
  });
};