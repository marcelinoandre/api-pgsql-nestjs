import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

const dirPath = path.resolve(__dirname, '..', '..', 'src/templates');

export const mailerConfig: MailerOptions = {
  template: {
    dir: dirPath,
    adapter: new HandlebarsAdapter(),
    options: {
      extName: '.hbs',
      layoutsDir: dirPath,
    },
  },

  transport: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  },
};
