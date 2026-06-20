export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  ijipal: {
    slug: 'ijipal',
    domain: 'ijipal.com',
    name: 'International Journal of Innovative Pedagogy & Learning',
    shortName: 'IJIPAL',
    description: 'Educational Research and Innovation in Learning Sciences',
    dbEnvVar: 'DATABASE_URL_IJIPAL',
    smtpUserEnvVar: 'SMTP_USER_IJIPAL',
    smtpPassEnvVar: 'SMTP_PASS_IJIPAL',
    smtpFromEnvVar: 'SMTP_FROM_IJIPAL',
    r2BucketEnvVar: 'R2_BUCKET_IJIPAL',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_IJIPAL',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_IJIPAL',
  },
};

const DEV_SITE_SLUG = 'ijipal';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
