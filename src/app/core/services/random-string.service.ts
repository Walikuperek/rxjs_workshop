import { Injectable } from '@angular/core';

const RANDOM_NAMES = [
  'Isaiah Harrell',
  'Jenny Zuniga',
  'Bobby Pittman',
  'Jaiden Odom',
  'Barrett Bradley',
  'Piper Paul',
  'Mikayla Fleming',
  'Cherish West',
  'Claire Mueller',
  'Deandre Waller',
  'Aleah Dougherty',
  'Hezekiah Sheppard',
];

const RANDOM_TECH_JOBS = [
  'MARKETING TECHNOLOGIST',
  'SEO CONSULTANT',
  'WEB ANALYTICS DEVELOPER',
  'DIGITAL MARKETING MANAGER',
  'SOCIAL MEDIA MANAGER',
  'GROWTH HACKER',
  'CONTENT MANAGER',
  'CONTENT STRATEGIST',
  'INFORMATION ARCHITECT',
  'UX DESIGNER',
  'UI DESIGNER',
  'INTERACTION DESIGNER',
  'VIDEO EDITOR',
  'VIDEO PRODUCER',
];

@Injectable()
export class RandomStringService {
  public randomJob(): string {
    return RANDOM_TECH_JOBS[
      Math.floor(Math.random() * RANDOM_TECH_JOBS.length)
    ];
  }

  public randomName(): string {
    return RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
  }

  public uuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        // tslint:disable-next-line:no-bitwise
        const r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
