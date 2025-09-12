import type { Schema, Struct } from '@strapi/strapi';

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

export interface JobJob extends Struct.ComponentSchema {
  collectionName: 'components_job_jobs';
  info: {
    displayName: 'Job';
    icon: 'gate';
  };
  attributes: {
    CompanyName: Schema.Attribute.String & Schema.Attribute.Required;
    EndDate: Schema.Attribute.Date;
    FeaturedImage: Schema.Attribute.Component<'image.image', false>;
    JobTitle: Schema.Attribute.String & Schema.Attribute.Required;
    Project: Schema.Attribute.Component<'project.project', true>;
    Responsibilities: Schema.Attribute.RichText & Schema.Attribute.Required;
    StartDate: Schema.Attribute.Date & Schema.Attribute.Required;
    StillEmployed: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    WebsiteURL: Schema.Attribute.String;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
    icon: 'code';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    FeaturedImage: Schema.Attribute.Component<'image.image', false>;
    Name: Schema.Attribute.String & Schema.Attribute.Required;
    Technologies: Schema.Attribute.RichText & Schema.Attribute.Required;
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

export interface TitleAndTextPageInfo extends Struct.ComponentSchema {
  collectionName: 'components_title_and_text_page_infos';
  info: {
    displayName: 'PageInfo';
    icon: 'bulletList';
  };
  attributes: {
    FeaturedImage: Schema.Attribute.Component<'image.image', false> &
      Schema.Attribute.Required;
    PageExcerpt: Schema.Attribute.Text & Schema.Attribute.Required;
    PageTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image': ImageImage;
      'job.job': JobJob;
      'project.project': ProjectProject;
      'social-media.social-link': SocialMediaSocialLink;
      'title-and-text.category': TitleAndTextCategory;
      'title-and-text.page-info': TitleAndTextPageInfo;
    }
  }
}
