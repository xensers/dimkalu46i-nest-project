import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getIndexPage() {
    return { message: 'Index Page' };
  }

  @Get('/about')
  @Render('about')
  getAboutPage() {
    return { message: 'About Page' };
  }
}
