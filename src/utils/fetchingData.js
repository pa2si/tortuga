export const getFetchData = async (lang) => {
  const version = process.env.SB_DATA_VERSION;
  const token = process.env.SB_TOKEN;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&language=${lang}`;

  const response = await fetch(url, { next: { revalidate: 10 } });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const storyData = await response.json();

  const { nav_section } = storyData.story.content;
  const { hero_section } = storyData.story.content;
  const { about_section } = storyData.story.content;
  const { events_section } = storyData.story.content;
  const { programs_section } = storyData.story.content;
  const { contacts_section } = storyData.story.content;
  const { contact_component } = storyData.story.content;
  const { all_events_section } = storyData.story.content;
  const { single_event_section } = storyData.story.content;

  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    about_section: about_section[0],
    events_section: events_section[0],
    programs_section: programs_section[0],
    contacts_section: contacts_section[0],
    contact_component: contact_component[0],
    all_events_section: all_events_section[0],
    single_event_section: single_event_section[0],
  };
};
