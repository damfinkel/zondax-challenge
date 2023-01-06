// I would guess this comes from an API in a real project
// It makes sense that Gmail and Mailchimp have different options
export const GMAIL_OPTIONS = [
  'family',
  'work_friends',
  'another_label',
  'fourth_label'
];

export const initialSelectedOptions = (options: string[]) => {
  return options.reduce((result, option) => {
    return { ...result, [option]: false };
  }, {} as Record<string, boolean>);
};

export const MAILCHIMP_OPTIONS = [
  'close_friends',
  'family',
  'work',
  'food_places'
];
