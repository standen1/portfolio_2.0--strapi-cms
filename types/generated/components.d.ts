import type { Schema, Struct } from '@strapi/strapi';

export interface EmployementEmployment extends Struct.ComponentSchema {
  collectionName: 'components_employement_employments';
  info: {
    displayName: 'Employment';
    icon: 'bulletList';
  };
  attributes: {
    CompanyName: Schema.Attribute.String & Schema.Attribute.Required;
    CurrentlyEmployed: Schema.Attribute.Boolean & Schema.Attribute.Required;
    EmployerWebsite: Schema.Attribute.String;
    EndDate: Schema.Attribute.String;
    JobResponsibility: Schema.Attribute.Component<
      'title-and-text.job-responsibility',
      true
    >;
    StartDate: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'Image';
    icon: 'landscape';
  };
  attributes: {
    AltText: Schema.Attribute.String & Schema.Attribute.Required;
    Height: Schema.Attribute.Integer & Schema.Attribute.Required;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    ImageURL: Schema.Attribute.String & Schema.Attribute.Required;
    Width: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface ProjectPortfolioProject extends Struct.ComponentSchema {
  collectionName: 'components_project_portfolio_projects';
  info: {
    displayName: 'PortfolioProject';
  };
  attributes: {
    ProjectInfo: Schema.Attribute.Component<'project.project', false> &
      Schema.Attribute.Required;
    ThumbnailImage: Schema.Attribute.Component<'image.image', false> &
      Schema.Attribute.Required;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
    icon: 'code';
  };
  attributes: {
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    ProjectName: Schema.Attribute.String & Schema.Attribute.Required;
    WebsiteURL: Schema.Attribute.String;
  };
}

export interface SocialMediaSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_social_media_social_links';
  info: {
    displayName: 'SocialLink';
    icon: 'alien';
  };
  attributes: {
    Icon: Schema.Attribute.Component<'image.image', true>;
    LinkURL: Schema.Attribute.String;
  };
}

export interface TitleAndTextCategory extends Struct.ComponentSchema {
  collectionName: 'components_title_and_text_categories';
  info: {
    displayName: 'Category';
    icon: 'bulletList';
  };
  attributes: {
    Content: Schema.Attribute.RichText & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TitleAndTextJobResponsibility extends Struct.ComponentSchema {
  collectionName: 'components_title_and_text_job_responsibilities';
  info: {
    displayName: 'JobResponsibility';
  };
  attributes: {
    Description: Schema.Attribute.RichText & Schema.Attribute.Required;
    ResponsibilityTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TitleAndTextPageInfo extends Struct.ComponentSchema {
  collectionName: 'components_title_and_text_page_infos';
  info: {
    displayName: 'PageInfo';
    icon: 'bulletList';
  };
  attributes: {
    PageExcerpt: Schema.Attribute.Text & Schema.Attribute.Required;
    PageTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'employement.employment': EmployementEmployment;
      'image.image': ImageImage;
      'project.portfolio-project': ProjectPortfolioProject;
      'project.project': ProjectProject;
      'social-media.social-link': SocialMediaSocialLink;
      'title-and-text.category': TitleAndTextCategory;
      'title-and-text.job-responsibility': TitleAndTextJobResponsibility;
      'title-and-text.page-info': TitleAndTextPageInfo;
    }
  }
}
