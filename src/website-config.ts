export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'Wholeafs',
  description: 'Get some green in your life',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/wholeafs-logo.png',
  lang: 'en',
  siteUrl: 'https://wholeafs.netlify.com',
  facebook: '#',
  twitter: '#',
  showSubscribe: true,
  mailchimpAction:
    'https://netlify.us19.list-manage.com/subscribe/post?u=14106ec1afe42ac81ad24afa0&amp;id=d44cd173b2',
  mailchimpName: 'b_14106ec1afe42ac81ad24afa0_d44cd173b2',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
};

export default config;
