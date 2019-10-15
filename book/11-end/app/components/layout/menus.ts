import { Team } from '../../lib/store';

import { URL_API } from '../../lib/consts';

const menuOnTheRight = ({ currentTeam }: { currentTeam: Team }) => [
  {
    text: 'Your Settings',
    href: '/your-settings',
    simple: true,
  },
  {
    text: 'Team Settings',
    href: `/team-settings?teamSlug=${currentTeam.slug}`,
    as: `/team/${currentTeam.slug}/team-settings`,
    simple: true,
  },
  {
    text: 'Billing',
    href: `/billing?teamSlug=${currentTeam.slug}`,
    as: `/team/${currentTeam.slug}/billing`,
    simple: true,
  },
  {
    separator: true,
  },
  {
    text: 'Log out',
    href: `${URL_API}/logout`,
    as: `${URL_API}/logout`,
    simple: true,
    external: true,
  },
];

export { menuOnTheRight };
