import { applicationConfig, Preview } from "@storybook/angular";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { provideAnimations } from '@angular/platform-browser/animations';
import { baseUrlInterceptor, RM_API_CONFIG } from "@runmates/ui"; // Adjust the import path as necessary
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass'
});


const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6'
    },
    msw: {
      handlers: {
        // You can import specific handlers here if needed
      }
    }
  },
  loaders: [mswLoader],
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(), 
        provideHttpClient(withInterceptors([baseUrlInterceptor])),
        { provide: RM_API_CONFIG, useValue: { apiUrl: 'http://localhost:3000' } },
      ],
    })
  ]
};

export default preview;
