import { applicationConfig, Preview } from "@storybook/angular";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { provideAnimations } from '@angular/platform-browser/animations';
import { RM_API_CONFIG } from "../src/rm.module";

const preview: Preview = {
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    }
  }
}

export const decorators = [
  applicationConfig({
    providers: [provideAnimations(), { provide: RM_API_CONFIG, useValue: { apiUrl: 'http://localhost:3000' } },
    ],
  })
]