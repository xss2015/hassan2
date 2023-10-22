import type { Schema, Attribute } from '@strapi/strapi';

export interface CarouselCarousel extends Schema.Component {
  collectionName: 'components_carousel_carousels';
  info: {
    displayName: 'carousel';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
  };
}

export interface GoalsGoals extends Schema.Component {
  collectionName: 'components_goals_goals';
  info: {
    displayName: 'goals';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface SectionsSections extends Schema.Component {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'Sections';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    content: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'carousel.carousel': CarouselCarousel;
      'goals.goals': GoalsGoals;
      'sections.sections': SectionsSections;
    }
  }
}
