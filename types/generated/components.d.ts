import type { Schema, Struct } from '@strapi/strapi';

export interface TemplateFeatures extends Struct.ComponentSchema {
  collectionName: 'components_template_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    Name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TemplateTechnicalDetails extends Struct.ComponentSchema {
  collectionName: 'components_template_technical_details';
  info: {
    displayName: 'TechnicalDetails';
  };
  attributes: {
    Autor: Schema.Attribute.String & Schema.Attribute.Required;
    Compatibility: Schema.Attribute.String & Schema.Attribute.Required;
    LatestUpdate: Schema.Attribute.Date & Schema.Attribute.Required;
    License: Schema.Attribute.String & Schema.Attribute.Required;
    TechnologieStack: Schema.Attribute.String & Schema.Attribute.Required;
    Version: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'template.features': TemplateFeatures;
      'template.technical-details': TemplateTechnicalDetails;
    }
  }
}
