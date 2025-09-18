import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageHistorySection extends Struct.ComponentSchema {
  collectionName: 'components_about_page_history_sections';
  info: {
    displayName: 'HistorySection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.history-card', true>;
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    HireCard: Schema.Attribute.Component<'common.hire-card', false>;
  };
}

export interface AboutPageLeaderCard extends Struct.ComponentSchema {
  collectionName: 'components_about_page_leader_cards';
  info: {
    displayName: 'LeaderCard';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface AboutPageTeamComponent extends Struct.ComponentSchema {
  collectionName: 'components_about_page_team_components';
  info: {
    displayName: 'TeamComponent';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    ProfileCard: Schema.Attribute.Component<'common.profile-card', true>;
  };
}

export interface ClientPartners extends Struct.ComponentSchema {
  collectionName: 'components_client_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    image: Schema.Attribute.Media<'images', true>;
  };
}

export interface CommonCard extends Struct.ComponentSchema {
  collectionName: 'components_common_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface CommonHireCard extends Struct.ComponentSchema {
  collectionName: 'components_common_hire_cards';
  info: {
    displayName: 'HireCard';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CommonHistoryCard extends Struct.ComponentSchema {
  collectionName: 'components_common_history_cards';
  info: {
    displayName: 'HistoryCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface CommonProfileCard extends Struct.ComponentSchema {
  collectionName: 'components_common_profile_cards';
  info: {
    displayName: 'ProfileCard';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface CommonSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_common_section_headings';
  info: {
    displayName: 'SectionHeading';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonStatistics extends Struct.ComponentSchema {
  collectionName: 'components_common_statistics';
  info: {
    displayName: 'Statistics';
  };
  attributes: {
    data: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LandingPageAboutComponent extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_about_components';
  info: {
    displayName: 'about-component';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    image: Schema.Attribute.Media<'images'>;
    statistics: Schema.Attribute.Component<'common.statistics', true>;
  };
}

export interface LandingPageClientComponent extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_client_components';
  info: {
    displayName: 'ClientComponent';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
  };
}

export interface LandingPagePortfolio extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_portfolios';
  info: {
    displayName: 'Portfolio';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface LandingPageServices extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.card', true>;
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    HireCard: Schema.Attribute.Component<'common.hire-card', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface LandingPageTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false>;
  };
}

export interface LandingPageWhyChooseComponent extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_why_choose_components';
  info: {
    displayName: 'WhyChooseComponent';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.card', true>;
    heading: Schema.Attribute.Component<'common.section-heading', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Column1: Schema.Attribute.Component<'shared.column-link', false>;
    Column2: Schema.Attribute.Component<'shared.column-link', false>;
    Copyright: Schema.Attribute.String & Schema.Attribute.Required;
    MainLogo: Schema.Attribute.Component<'shared.logo-link', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Button: Schema.Attribute.Component<'shared.button', false>;
    MainLogo: Schema.Attribute.Component<'shared.logo-link', false> &
      Schema.Attribute.Required;
    NavLink: Schema.Attribute.Component<'shared.link', true> &
      Schema.Attribute.Required;
  };
}

export interface OurFocusFaq extends Struct.ComponentSchema {
  collectionName: 'components_our_focus_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface OurFocusOurMission extends Struct.ComponentSchema {
  collectionName: 'components_our_focus_our_missions';
  info: {
    displayName: 'OurMission';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    HireCard: Schema.Attribute.Component<'common.hire-card', false>;
    image1: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface OurFocusOurSteps extends Struct.ComponentSchema {
  collectionName: 'components_our_focus_our_steps';
  info: {
    displayName: 'OurSteps';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.card', true>;
    heading: Schema.Attribute.Component<'common.section-heading', false>;
  };
}

export interface OurFocusOurVision extends Struct.ComponentSchema {
  collectionName: 'components_our_focus_our_visions';
  info: {
    displayName: 'OurVision';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.section-heading', false> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedColumnLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_column_links';
  info: {
    displayName: 'ColumnLink';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedData extends Struct.ComponentSchema {
  collectionName: 'components_shared_data';
  info: {
    displayName: 'Data';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFormSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_sections';
  info: {
    displayName: 'FormSection';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'LogoLink';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface WhyXizecBetterSection extends Struct.ComponentSchema {
  collectionName: 'components_why_xizec_better_sections';
  info: {
    displayName: 'BetterSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.card', true>;
    heading: Schema.Attribute.Component<'common.section-heading', false>;
    HireCard: Schema.Attribute.Component<'common.hire-card', false>;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface WhyXizecIndustoryComponent extends Struct.ComponentSchema {
  collectionName: 'components_why_xizec_industory_components';
  info: {
    displayName: 'IndustoryComponent';
  };
  attributes: {
    cards: Schema.Attribute.Component<'common.card', true>;
    heading: Schema.Attribute.Component<'common.section-heading', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.history-section': AboutPageHistorySection;
      'about-page.leader-card': AboutPageLeaderCard;
      'about-page.team-component': AboutPageTeamComponent;
      'client.partners': ClientPartners;
      'common.card': CommonCard;
      'common.hire-card': CommonHireCard;
      'common.history-card': CommonHistoryCard;
      'common.profile-card': CommonProfileCard;
      'common.section-heading': CommonSectionHeading;
      'common.statistics': CommonStatistics;
      'landing-page.about-component': LandingPageAboutComponent;
      'landing-page.client-component': LandingPageClientComponent;
      'landing-page.portfolio': LandingPagePortfolio;
      'landing-page.services': LandingPageServices;
      'landing-page.testimonial': LandingPageTestimonial;
      'landing-page.why-choose-component': LandingPageWhyChooseComponent;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'our-focus.faq': OurFocusFaq;
      'our-focus.our-mission': OurFocusOurMission;
      'our-focus.our-steps': OurFocusOurSteps;
      'our-focus.our-vision': OurFocusOurVision;
      'shared.button': SharedButton;
      'shared.column-link': SharedColumnLink;
      'shared.data': SharedData;
      'shared.form-section': SharedFormSection;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
      'why-xizec.better-section': WhyXizecBetterSection;
      'why-xizec.industory-component': WhyXizecIndustoryComponent;
    }
  }
}
