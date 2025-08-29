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
    Width: Schema.Attribute.Integer & Schema.Attribute.Required;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'image.image': ImageImage;
      'project.project': ProjectProject;
      'social-media.social-link': SocialMediaSocialLink;
      'title-and-text.category': TitleAndTextCategory;
    }
  }
}
